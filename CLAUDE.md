# AgencyOS

Sistema operacional de uma agência de marketing dentro do Claude Code.
Uma pasta para a agência inteira: a memória da agência, a memória de cada
cliente e todas as skills num lugar só. Toda melhoria numa skill vale para
todos os clientes no mesmo instante.

> Primeira vez aqui? Rode `/instalar`. Ele configura a agência e deixa o
> sistema pronto para receber o primeiro cliente.

---

## Como o sistema está organizado

```
_agencia/            quem opera: a agência
  agencia.md           posicionamento, serviços, método, equipe, rituais
  voz.md               como a agência escreve para clientes
  identidade.md        visual das entregas (HTML, relatórios, planejamentos)
  aprendizados.md      regras aprendidas que valem para todos os clientes
  carteira.md          lista de clientes e status, uma linha cada

clientes/<cliente>/  cada conta, isolada
  CLAUDE.md            ficha da conta + regras específicas dela
  memoria/
    empresa.md         fatos estáveis do cliente
    voz.md             tom de voz da marca do cliente
    estrategia.md      o momento atual: fase, meta, foco, pendências abertas
    historico.md       registro datado de decisões e reuniões (só cresce)
  identidade/          design-guide.md, logo/, referencias/ (estaticos/, lp/, videos/)
  transcripts/         reuniões e handoff
  dados/               exports, planilhas, prints a analisar
  marketing/           landing-pages/, criativos/, roteiros/, campanhas/, seo/, conteudo/
  entregas/            planejamentos/, relatorios/, atas/, auditorias/, outros/

clientes/_modelo/    molde que o /novo-cliente copia (nunca editar com dados reais)
.claude/skills/      todas as skills do sistema
ferramentas/         como conectar MCPs e integrações
```

---

## Regra nº 1 — um cliente por vez

Todo trabalho de cliente acontece no contexto de **um cliente ativo**.

- O cliente ativo é definido por `/abrir <cliente>` ou pelo nome do cliente no
  pedido ("faz a ata da reunião da Acme").
- Se o pedido é de cliente e não dá para saber qual, **perguntar** antes de
  ler ou escrever qualquer coisa. Nunca adivinhar.
- Nunca levar dado, número, fala ou decisão de um cliente para outro. Isso
  vale inclusive para exemplos: não citar o cliente A numa entrega do cliente B.
- Trocar de cliente no meio da sessão é permitido, mas avisar em uma linha
  qual passou a ser o ativo.

Tarefas da própria agência (proposta comercial, processo interno, conteúdo da
agência) não têm cliente ativo e usam só `_agencia/`.

---

## Contexto que o Claude carrega

**Sempre, em qualquer sessão:** `_agencia/agencia.md`, `_agencia/voz.md` e
`_agencia/aprendizados.md`.

**Quando há cliente ativo**, também:

1. `clientes/<cliente>/CLAUDE.md`
2. `clientes/<cliente>/memoria/empresa.md`
3. `clientes/<cliente>/memoria/estrategia.md`
4. `clientes/<cliente>/memoria/voz.md` quando for escrever em nome da marca
5. `clientes/<cliente>/identidade/design-guide.md` quando for gerar visual da marca
6. `_agencia/identidade.md` quando for gerar entrega da agência (planejamento, relatório, auditoria)

O `historico.md` só é lido quando a tarefa precisa do passado (planejamento,
fechamento, "o que a gente decidiu sobre X").

Não listar o que foi lido nem confirmar a leitura. Usar o contexto.

**Arquivo em branco ou com placeholder** (`[preencher]`, `<!-- ... -->`) não
vale como informação. Se a tarefa depende dele, avisar e perguntar, sem
inventar. Isso vale em dobro para tom de voz e identidade visual: sem material
real, avisar que o resultado é provisório.

---

## Onde cada coisa é salva

| O quê | Onde | Nome |
|---|---|---|
| Transcript de reunião, handoff | `transcripts/` | `AAAA-MM-DD_descricao.md` |
| Export, planilha, print | `dados/` | `AAAA-MM-DD_fonte-descricao.ext` |
| Landing page (blueprint + protótipo) | `marketing/landing-pages/<tema>/` | `blueprint.md`, `index.html` |
| Copy de criativo estático | `marketing/criativos/` | `AAAA-MM-DD_tema.md` |
| Roteiro de vídeo | `marketing/roteiros/` | `AAAA-MM-DD_tema.md` |
| Campanha de Google Ads (painel HTML + plano) | `marketing/campanhas/google-ads-AAAA-MM-DD/` | arquivos da pasta |
| Pesquisa de SEO, perfil do Google e GEO | `marketing/seo/` | `01-pesquisa-demanda.md` … `08-geo-otimizacao-ia.md` |
| Conteúdo orgânico (artigo, carrossel, legendas) | `marketing/conteudo/<tipo>-<tema>-AAAA-MM-DD/` | arquivos da pasta |
| Anúncio ou vídeo de outra marca para inspirar | `identidade/referencias/<estaticos\|lp\|videos>/` | livre |
| Extração bruta do CRM (fora do Git) | `dados/crm-AAAA-MM-DD/` | `raw.json`, `PROGRESSO.md` |
| Perfil do CRM do cliente (criado pela 1ª auditoria) | `memoria/crm.md` | fixo |
| Planejamento (onboarding e mensal) | `entregas/planejamentos/` | `AAAA-MM_tipo.html` (+ `.md`) |
| Relatório de ads | `entregas/relatorios/` | `AAAA-MM-DD_relatorio-ads.md` |
| Ata de reunião | `entregas/atas/` | `AAAA-MM-DD_assunto.md` |
| Auditoria comercial / CRM | `entregas/auditorias/` | `AAAA-MM_auditoria-crm.html` |
| Qualquer outra entrega | `entregas/outros/` | `AAAA-MM-DD_descricao.ext` |

Tudo relativo a `clientes/<cliente>/`. Data sempre no começo do nome, para a
pasta ficar em ordem cronológica. Nunca sobrescrever uma entrega anterior:
versão nova ganha data nova ou sufixo `-v2`.

---

## Fluxo de trabalho

1. **Existe skill para isso?** Conferir `.claude/skills/` antes de executar.
   Se existir, seguir a skill.
2. **Contexto primeiro.** Ler o que o cliente já tem registrado antes de
   perguntar. Perguntar só o que falta, tudo de uma vez, em bloco.
3. **Plano antes de peça grande.** Em entrega longa (planejamento, LP,
   auditoria), mostrar a estrutura ou o corte e esperar o OK antes de produzir.
4. **Nunca inventar.** Número, depoimento, concorrente, prazo, resultado ou
   fala de cliente só entram se vieram de arquivo, do usuário ou de pesquisa
   mostrada e aprovada. Sem o dado: perguntar ou marcar `[confirmar]`.
5. **Fechar a tarefa.** Dizer onde o arquivo foi salvo. Se algo mudou no
   contexto do cliente, seguir a seção "Manter a memória viva".

Tarefa sem skill que parece repetível (o usuário provavelmente vai pedir de
novo): ao terminar, perguntar

> "Isso pode virar uma skill. Quer que eu crie com o `/nova-skill`?"

Não perguntar em tarefa pontual.

---

## Manter a memória viva

A memória só vale se estiver certa. Ao terminar uma tarefa que mudou algo
relevante, **propor a atualização mostrando a linha exata** e salvar só com OK.

| Mudou... | Arquivo | Como |
|---|---|---|
| Fato estável do cliente (produto, praça, equipe, ferramenta) | `memoria/empresa.md` | editar a linha, sem histórico dentro |
| Fase, meta, foco, investimento, pendência nova | `memoria/estrategia.md` | editar o estado atual |
| Pendência concluída | sai de `estrategia.md` | vira linha em `historico.md` |
| Reunião, decisão, entrega aprovada | `memoria/historico.md` | uma linha datada no topo |
| Tom da marca | `memoria/voz.md` | adicionar a regra |
| Visual da marca | `identidade/design-guide.md` | editar o token |
| Escopo, canal, regra só desta conta | `clientes/<cliente>/CLAUDE.md` | adicionar a regra |
| Status do cliente na carteira | `_agencia/carteira.md` | editar a linha |

**Regra de ouro da memória:** `empresa.md` e `estrategia.md` descrevem o
**agora**, curtos e sem narrativa. O **passado** mora no `historico.md`.
Quando um desses dois arquivos começar a contar história ("em 12/07 decidimos
que... depois mudou para..."), mover a história para o histórico e deixar só o
estado atual.

Não perguntar em tarefa pontual sem impacto no contexto nem em pergunta simples.
Para uma revisão completa, rodar `/atualizar`.

---

## Aprender com correções

Quando o usuário corrigir algo ou der uma instrução com cara de permanente
("na verdade é assim", "não faz mais isso", "sempre que...", "evita...",
"da próxima vez..."), perguntar:

> "Quer que eu salve isso para não precisar repetir?"

Se sim, decidir **o alcance** antes do arquivo:

- **Vale só para este cliente** → `memoria/voz.md` (escrita), `memoria/empresa.md`
  (fato) ou `clientes/<cliente>/CLAUDE.md` (regra de operação da conta)
- **Vale para todos os clientes** → `_agencia/aprendizados.md`
- **Muda o jeito de uma skill trabalhar** → editar o `SKILL.md` da skill
  (mostrar o trecho antes de salvar)
- **Regra do sistema inteiro** → este `CLAUDE.md`

Na dúvida sobre o alcance, perguntar: "Isso vale só para a <cliente> ou para
todos?". Salvar com uma linha nova e clara, com a data, sem reformatar o
arquivo. Mostrar a linha adicionada.

Não perguntar quando a correção é óbvia do contexto imediato ("o arquivo se
chama X").

---

## Skills do sistema

**Núcleo**
- `/instalar` — configura a agência (roda uma vez)
- `/novo-cliente` — cria a pasta de um cliente a partir do molde e preenche a memória
- `/abrir` — abre a sessão de um cliente e resume onde a conta está
- `/atualizar` — varre a pasta do cliente e reconcilia a memória com o que existe de fato
- `/salvar` — commit e push no GitHub
- `/nova-skill` — mapeia uma tarefa repetitiva e transforma em skill

**Estratégia e gestão de conta**
- `/planejamento` — planejamento estratégico de onboarding em HTML
- `/planejamento-mensal` — planejamento recorrente do mês (completo ou enxuto)
- `/ata-reuniao` — ata de reunião pronta para o grupo do cliente
- `/auditoria-crm` — vistoria do comercial no CRM. A 1ª vez cria o perfil do CRM do cliente; as seguintes rodam só pelo comando, comparando com a anterior
- `/seo` — SEO local, Perfil da Empresa no Google e GEO (aparecer em respostas de IA)
- `/relatorio-ads` — relatório de performance de Google Ads e Meta Ads
- `/analisar-dados` — resumo executivo de qualquer planilha ou export

**Criação**
- `/lp-alta-conversao` — landing page: blueprint para o webdesigner + protótipo HTML
- `/copy-lp` — copy de LP a partir de uma LP de referência
- `/anuncio-google` — painel HTML de copiar e colar para montar a campanha de Google Ads Search (entrega pausada)
- `/carrossel` — carrossel e post visual, orgânico ou anúncio, com legenda
- `/publicar-tema` — artigo de blog + carrossel + legendas a partir de um tema
- `/copy-estaticos-meta` — copy de criativo estático para Meta Ads
- `/roteiros-video-meta` — roteiros de vídeo curto para Meta Ads
- `/email-cliente` — e-mail ou mensagem para cliente, no tom da agência
- `/responder-avaliacoes` — respostas para avaliações do Google

---

## Regras do sistema

- Português do Brasil em tudo, salvo pedido contrário.
- `clientes/_modelo/` é molde: nunca escrever dado real ali.
- Dado sensível do cliente (faturamento, margem, contrato) nunca vai para
  entrega que o cliente repassa a terceiros, nem para peça pública.
- Entrega que sai da agência com visual usa `_agencia/identidade.md`.
  Peça que sai com a marca do cliente usa o `design-guide.md` do cliente.
- Pesquisa na web que não veio do cliente nem do usuário: mostrar o que foi
  achado e pedir OK antes de usar numa entrega.

---

## Regras desta agência

<!-- O /instalar completa esta seção. Regras que valem para a operação toda
     e não cabem em nenhum outro arquivo entram aqui, uma por linha. -->
