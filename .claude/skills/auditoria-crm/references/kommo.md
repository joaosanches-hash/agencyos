# Kommo — extração em lote pela sessão do navegador

Receita testada numa auditoria real: 341 leads e ~20 mil mensagens extraídos
em cerca de 3 minutos, sem abrir conversa por conversa e sem token de API.

**Como funciona:** com o Kommo aberto e logado no Chrome da MCP, o
`evaluate_script` roda `fetch()` dentro da página. As chamadas usam a sessão
de quem fez o login, então a API do próprio Kommo responde como se fosse o
navegador.

> **Sinal de caminho errado:** mais de ~5 segundos por lead na extração. Quase
> sempre é script lendo a tela (abrindo o lead, esperando a conversa carregar)
> em vez de chamar os endpoints abaixo, ou pausa fixa entre chamadas. Parar,
> guardar o que já veio (`window.__...`) e trocar para a receita desta página.
>
> Os endpoints `/ajax/...` são internos do Kommo, não documentados. Funcionam
> hoje e podem mudar. Se algum voltar erro, abrir um lead, rodar
> `list_network_requests` e ver qual endpoint a própria tela chama.

---

## 1. Reconhecer a conta

```js
async () => {
  const get = async u => { const r = await fetch(u, {headers: {'X-Requested-With': 'XMLHttpRequest'}}); return r.status === 204 ? null : r.json(); };
  const acc = await get('/api/v4/account?with=users_groups,datetime_settings');
  const pipes = await get('/api/v4/leads/pipelines');
  const users = await get('/api/v4/users?limit=50');
  const cf = await get('/api/v4/leads/custom_fields?limit=250');
  return {
    tz: acc.datetime_settings?.timezone,
    pipelines: pipes._embedded.pipelines.map(p => ({id: p.id, name: p.name, statuses: p._embedded.statuses.map(s => ({id: s.id, name: s.name, type: s.type}))})),
    users: users._embedded.users.map(u => ({id: u.id, name: u.name})),
    fields: cf._embedded.custom_fields.map(f => ({id: f.id, name: f.name, type: f.type}))
  };
}
```

Anotar os IDs de funil e de etapa. **Atenção:** a etapa de entrada ("Leads de
entrada" / incoming, `type: 1`) **não vem** na listagem padrão de leads. É
preciso buscá-la à parte (passo 2), senão metade dos leads some da análise.

## 2. Listar todos os leads e contatos

Guarda o resultado em `window.__L` para o passo 3 usar.

```js
async () => {
  const get = async u => { for (let k = 0; k < 5; k++) { try { const r = await fetch(u, {headers: {'X-Requested-With': 'XMLHttpRequest'}}); if (r.status === 204) return null; if (r.status === 429 || r.status >= 500) { await new Promise(s => setTimeout(s, 2000 * (k + 1))); continue; } return await r.json(); } catch (e) { await new Promise(s => setTimeout(s, 2000)); } } return {error: true}; };
  const PIPE = 0000000, INCOMING = 0000000; // IDs do passo 1
  const leads = [];
  for (const extra of ['', `&filter[statuses][0][pipeline_id]=${PIPE}&filter[statuses][0][status_id]=${INCOMING}`]) {
    for (let p = 1; p < 50; p++) { const t = await get(`/api/v4/leads?limit=250&page=${p}&with=contacts,loss_reason${extra}`); if (!t) break; leads.push(...t._embedded.leads); if (!t._links?.next) break; }
  }
  const seen = new Set(); const L = leads.filter(l => !seen.has(l.id) && seen.add(l.id));
  const cids = [...new Set(L.flatMap(l => (l._embedded.contacts || []).map(c => c.id)))];
  const contacts = {};
  for (let i = 0; i < cids.length; i += 50) {
    const t = await get('/api/v4/contacts?limit=250&' + cids.slice(i, i + 50).map(id => 'filter[id][]=' + id).join('&'));
    for (const c of (t?._embedded?.contacts || [])) contacts[c.id] = {name: c.name, phones: (c.custom_fields_values || []).filter(f => f.field_code === 'PHONE').flatMap(f => f.values.map(v => v.value))};
  }
  window.__L = L; window.__contacts = contacts;
  return {leads: L.length, contacts: Object.keys(contacts).length};
}
```

## 3. Baixar o histórico de conversa de cada lead

4 em paralelo, com nova tentativa em caso de limite (429). Pode rodar de novo:
continua de onde parou (`window.__TL`).

```js
async () => {
  const get = async u => { for (let k = 0; k < 5; k++) { try { const r = await fetch(u, {headers: {'X-Requested-With': 'XMLHttpRequest'}}); if (r.status === 204) return null; if (r.status === 429 || r.status >= 500) { await new Promise(s => setTimeout(s, 2000 * (k + 1))); continue; } return await r.json(); } catch (e) { await new Promise(s => setTimeout(s, 2000)); } } return {error: true}; };
  const compact = i => {
    const d = i.data || {};
    if (d.message) {
      const m = d.message, a = d.author || {};
      const o = {d: i.date_create, dir: i.type === 89 ? 'in' : (i.type === 90 ? 'out' : 't' + i.type), a: a.name || i.author_name, mt: m.type, tx: m.text || ''};
      if (a.bot) o.bot = 1;
      if (m.media_file_name) o.mf = m.media_file_name;
      const ref = d.message_attributes?.referral;
      if (ref) o.ref = {title: ref.title, body: (ref.body || '').slice(0, 160), src: ref.source_name, url: ref.source_url};
      return o;
    }
    return {d: i.date_create, ev: i.type, a: i.author_name, tx: (d.text || '').slice(0, 300)};
  };
  const out = window.__TL || (window.__TL = {});
  const todo = window.__L.filter(l => !out[l.id]);
  let errors = 0;
  const worker = async () => {
    while (todo.length) {
      const l = todo.shift(); const items = []; const ids = new Set();
      let url = `/ajax/v3/leads/${l.id}/events_timeline?limit=100`; let guard = 0;
      while (url && guard++ < 60) {
        const t = await get(url); if (!t || t.error) { if (t?.error) errors++; break; }
        const arr = t._embedded?.items || []; let added = 0;
        for (const it of arr) if (!ids.has(it.id)) { ids.add(it.id); items.push(it); added++; }
        if (!added || arr.length < 100) break;
        url = `/ajax/v3/leads/${l.id}/events_timeline?limit=100&filter[created_at][lt]=${arr[arr.length - 1].date_create + 1}`;
      }
      out[l.id] = items.map(compact).sort((a, b) => a.d - b.d);
    }
  };
  await Promise.all([worker(), worker(), worker(), worker()]);
  return {done: Object.keys(out).length, items: Object.values(out).reduce((s, a) => s + a.length, 0), errors};
}
```

**Leitura dos eventos:** `dir: 'in'` = mensagem do lead (tipo 89) · `'out'` =
resposta da empresa (tipo 90) · `bot: 1` = resposta automática (não conta como
primeira resposta) · `ref` = **card de anúncio do Meta** (título e texto do
anúncio que o lead clicou) · `mf` = arquivo enviado (orçamento em PDF, foto).
Eventos sem mensagem (`ev`) incluem mudança de etapa, nota, venda e tag.

## 4. Salvar em arquivo, não na conversa

Chamar o `evaluate_script` com o parâmetro **`filePath`** apontando para
`clientes/<cliente>/dados/crm-AAAA-MM-DD/raw.json`. O retorno vai direto para
o arquivo e não enche o contexto da sessão.

```js
() => ({
  extracted_at: new Date().toISOString(),
  leads: window.__L.map(l => ({id: l.id, name: l.name, status_id: l.status_id, pipeline_id: l.pipeline_id, price: l.price, created_at: l.created_at, closed_at: l.closed_at, loss_reason: l._embedded.loss_reason?.[0]?.name || null, responsible: l.responsible_user_id, tags: (l._embedded.tags || []).map(t => t.name), cf: (l.custom_fields_values || []).map(f => f.field_name + '=' + f.values.map(v => v.value).join('|')), contacts: (l._embedded.contacts || []).map(c => c.id)})),
  contacts: window.__contacts,
  timeline: window.__TL
})
```

## 5. PDFs de orçamento

O `fetch` direto dos arquivos é bloqueado (CORS). O que funciona: abrir o link
de cada PDF numa aba nova do Chrome da MCP; o navegador salva em
`Downloads`. Depois, mover os PDFs para `dados/crm-AAAA-MM-DD/pdf/` e extrair
o texto com Python (`pypdf`). Os valores saem limpos (produto × quantidade ×
preço = total).

## 6. Escrever no CRM em lote (só com autorização)

Tags e valor de venda de muitos leads numa chamada só:

```js
async () => {
  const body = [ /* {id: 123, price: 2240, tags_to_add: [{name: 'ORÇAMENTO'}]} , ... */ ];
  const r = await fetch('/api/v4/leads', {method: 'PATCH', headers: {'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'}, body: JSON.stringify(body)});
  return {status: r.status, resp: (await r.text()).slice(0, 300)};
}
```

Regras:
- **Testar em 1 lead primeiro**, lendo antes e depois, e só então rodar o lote
- `tags_to_add` **acrescenta** tags; nunca usar `_embedded.tags`, que
  **substitui** todas as tags do lead
- Depois do lote, baixar os leads de novo e conferir com a classificação
  (`after.json`); listar qualquer divergência
- Nunca mover etapa, fechar lead, enviar mensagem ou criar tarefa
