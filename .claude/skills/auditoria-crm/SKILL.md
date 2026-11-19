---
name: auditoria-crm
description: >
  Vistoria do comercial de um cliente dentro do CRM (Kommo, RD Station,
  HubSpot, Pipedrive e similares): extrai em lote todos os leads e conversas
  de um período, identifica a origem (Meta Ads, Google Ads, orgânico), mede
  tempo de resposta, funil, follow-up e registro, lê os orçamentos, encontra
  onde as vendas se perdem e quanto dinheiro está parado, e entrega um
  relatório HTML com diagnóstico, forças, plano de ação e lista de retomada.
  Opcionalmente organiza o CRM (tags de origem e de situação, valor dos
  orçamentos). A primeira vez grava o perfil do CRM do cliente
  (memoria/crm.md); as seguintes rodam só pelo comando, no período novo,
  comparando com a auditoria anterior. Use quando o usuário disser "auditoria de CRM", "vistoria do
  CRM", "vistoria comercial", "auditar o comercial", "ver como está o
  atendimento" ou "/auditoria-crm".
---

# /auditoria-crm — vistoria comercial no CRM

Responde três perguntas para o cliente: **os anúncios estão trazendo gente?
O comercial está convertendo? Onde o dinheiro está ficando pelo caminho?**

Ler antes de começar:
- `references/estrutura-relatorio.md` — régua de leitura e seções do relatório
- `references/kommo.md` — receita de extração em lote (Kommo)

## Dois modos: linha de base e recorrente

A primeira auditoria de um cliente **ensina** o sistema como aquele CRM funciona.
As seguintes só rodam em cima do que foi aprendido.

**Descobrir o modo:** procurar `clientes/<cliente>/memoria/crm.md` (o perfil do CRM).

| Situação | Modo | O que faz |
|---|---|---|
| Não existe `crm.md` | **Linha de base** | Roda o fluxo completo (passos 1 a 9) e, no fim, **grava o perfil** do CRM do cliente |
| Existe `crm.md` | **Recorrente** | Pula o briefing: usa o perfil, extrai só o período novo, compara com a auditoria anterior e entrega relatório curto |
| Usuário pede "refazer do zero" ou o CRM mudou (funil, tags, LP) | **Nova linha de base** | Refaz o perfil, guarda o antigo como `crm-AAAA-MM-DD.md` |

**Perfil do CRM (`memoria/crm.md`)**: modelo em `references/perfil-crm.md`. Guarda o que
não muda entre auditorias: qual CRM e URL, funil e etapas, assinaturas de origem
(mensagens de anúncio e de LP), tags e regras, horário comercial, SLA, caixas que recebem lead,
o que é "lead de teste", e a **última auditoria**: data, período e os números-base
(volume, taxa de resposta, mediana de tempo, funil, valor em aberto).

**Histórico (`dados/crm-historico.csv`)**: uma linha por auditoria, com as mesmas
métricas, para ver tendência de 3 ou mais pontos. Nunca apagar linha.

### Modo recorrente, em 6 passos

1. Ler `crm.md` e a última linha de `crm-historico.csv`. Dizer ao usuário em uma frase o período que vai auditar (da data da última auditoria até hoje) e rodar sem perguntar de novo
2. Abrir o CRM e pedir login só se a sessão caiu (passo 2)
3. Extrair **apenas leads criados ou movimentados no período novo**, mais os que estavam "em aberto" na última lista de retomada (para saber se foram atendidos)
4. Classificar com as regras do perfil; só o que fugir delas vai para o usuário como dúvida, no fim
5. Calcular as mesmas métricas e **comparar**: o que melhorou, o que piorou, o que se repetiu. Reincidência de problema é a primeira coisa a dizer. A lista de retomada anterior: quantos foram retomados e quantos viraram venda
6. Entregar o relatório curto (`AAAA-MM-DD_auditoria-crm-recorrente.html`: veredito, comparação com a anterior, perdas por valor, nova lista de retomada), atualizar `crm.md` (bloco "Última auditoria") e acrescentar a linha em `crm-historico.csv`

Se mudou algo estrutural (etapa nova, tag nova, outro número de WhatsApp), parar e perguntar
antes de seguir: o perfil pode estar velho.

## O que faz a auditoria ser rápida

1. **Extrair tudo de uma vez, nunca clicar conversa por conversa.** Pela API
   do próprio CRM, usando a sessão logada no navegador (`evaluate_script` +
   `fetch`). Centenas de leads em minutos.
2. **Salvar a extração em arquivo** (parâmetro `filePath` do `evaluate_script`)
   e analisar com Python. O navegador só serve para buscar dados.
3. **Origem por regra, não por leitura.** Mapear antes as mensagens
   pré-preenchidas dos anúncios e da LP; o script classifica a maioria sozinho.
4. **Ler a fundo só quem importa.** Leads de anúncio e comerciais são lidos
   inteiros; o resto (fornecedor, pessoal, cobrança) passa por triagem por
   palavra-chave.
5. **Registrar enquanto lê**, em arquivo, com um arquivo de progresso. A
   sessão pode cair ou acabar o limite: retoma de onde parou.
6. **Briefing completo no começo** e execução sem interrupção; as dúvidas vão
   para o fim.

## Passo 0 — Conferir as ferramentas (antes de tudo, na linha de base)

Na **primeira auditoria** (modo linha de base, ou nova linha de base), antes do
briefing, conferir se o que a extração precisa está instalado. No modo
recorrente basta uma checagem rápida do navegador e do Python; só repetir o
resto se algo falhar.

| Ferramenta | Como conferir | Para que serve |
|---|---|---|
| Node.js | `node --version` | Roda a MCP do Chrome |
| Google Chrome | procurar o executável (Windows: `Test-Path "$env:ProgramFiles\Google\Chrome\Application\chrome.exe"`, também em `Program Files (x86)` e `LocalAppData`) | O navegador que a MCP controla |
| **MCP do Chrome DevTools** | as ferramentas `mcp__chrome-devtools__*` estão disponíveis (buscar com ToolSearch) e `claude mcp list` mostra `chrome-devtools` conectado | Abrir o CRM logado e extrair em lote |
| Python | `python --version` | Processar a extração |
| pandas e pypdf | `python -c "import pandas, pypdf"` | Resumo por lead, métricas, leitura de PDF de orçamento |

**Se tudo estiver ok:** dizer em uma linha ("Ferramentas ok: Chrome MCP, Python,
pandas") e seguir para o briefing.

**Se faltar algo:** não seguir calado. Dizer o que falta, para que serve e
**perguntar antes de instalar**, tudo em uma mensagem:

> "Para auditar o CRM está faltando: **MCP do Chrome** (abre o CRM e extrai os
> leads) e **pandas** (calcula as métricas). Posso instalar agora para
> seguirmos?"

Com o "sim", instalar e conferir de novo:

- **MCP do Chrome:** `claude mcp add chrome-devtools --scope user -- npx -y chrome-devtools-mcp@latest`
  (no Windows, se falhar, usar `-- cmd /c npx -y chrome-devtools-mcp@latest`; ver `ferramentas/README.md`).
  **O servidor só aparece numa sessão nova.** Avisar o usuário para fechar e
  reabrir o Claude Code na raiz do AgencyOS e rodar `/auditoria-crm` de novo;
  nada se perde, porque o briefing ainda não começou
- **pandas e pypdf:** `pip install pandas pypdf`
- **Node.js e Chrome:** se o `winget` existir, oferecer
  `winget install OpenJS.NodeJS.LTS` e `winget install Google.Chrome`; sem ele,
  passar o link (nodejs.org, google.com/chrome) e esperar o usuário avisar que
  instalou

Com o "não": explicar que sem a MCP do Chrome a extração em lote não roda e
oferecer o caminho alternativo (export CSV/XLSX do CRM, sem as conversas, ver
Passo 3). Nunca instalar nada sem o "sim". Nunca pedir senha de CRM nesta etapa.

## Passo 1 — Briefing (uma mensagem só)

Ler do cliente ativo: `CLAUDE.md` (qual CRM), `memoria/estrategia.md`
(critério de MQL, SLA, funil), `memoria/empresa.md` (produtos, ticket, praça,
horário), auditoria anterior em `entregas/auditorias/`.

Montar e confirmar com o usuário, **tudo de uma vez**:

- **Período** e **funil**
- **Horário comercial** do cliente
- **Assinaturas de origem**, as mensagens que identificam cada canal:
  - Meta Ads: mensagens pré-preenchidas dos anúncios, a mensagem padrão do
    Meta ("Posso ter mais informações sobre isso?") e o **card de anúncio**
    que aparece na conversa
  - Google Ads / site: as mensagens dos botões de WhatsApp da LP. Se a LP
    estiver no ar, abrir no navegador e **ler os links `wa.me`** para pegar os
    textos exatos. Considerar variações e "vim pelo site / achei no Google"
- **Tags de situação** que o cliente quer usar (sugestão abaixo)
- **Pode escrever no CRM?** Aplicar tags e preencher o valor do orçamento, ou
  só ler? Padrão: só ler
- **Rodar direto?** Se o usuário for deixar rodando, executar sem perguntar e
  listar as dúvidas no fim

**Tags de situação sugeridas** (ajustar ao cliente):

| Tag | Quando |
|---|---|
| `META ADS` / `GOOGLE ADS` | Origem identificada |
| `ORÇAMENTO` | Recebeu orçamento personalizado (valor vai no campo de venda) |
| `PREÇO` | Recebeu só preço por unidade ou m², sem orçamento |
| `QUALIFICADO` | Mandou medida, projeto, local: engajou de verdade |
| `CLIENTE POTENCIAL` | Conversa boa, negociação real, alto valor |
| `NÃO RESPONDEU` | Sumiu depois do nosso último contato |
| `VENDA` | Fechou (registrado ou dito na conversa) |

## Passo 2 — Acesso

Abrir o CRM no Chrome da MCP (ver `ferramentas/README.md`) e pedir para o
usuário **fazer o login na janela**. Nunca pedir nem digitar senha.

## Passo 3 — Extração

**Kommo:** seguir `references/kommo.md` (reconhecer a conta → leads e contatos
→ histórico de conversas → salvar em arquivo).

**Outro CRM:** mesmo princípio. Abrir um lead, rodar `list_network_requests`
para descobrir quais endpoints a tela usa para listar leads e carregar a
conversa, e chamar esses endpoints em lote com `fetch` dentro da página. Se
não der, usar a API oficial com token do cliente ou o export (CSV/XLSX). Pelo
export as conversas costumam não vir: dizer isso no relatório.

Pasta de trabalho: `clientes/<cliente>/dados/crm-AAAA-MM-DD/`
- `raw.json` — extração bruta
- `PROGRESSO.md` — uma linha por etapa concluída (o que foi feito, próximo passo)

## Passo 4 — Preparar

Com Python, a partir do `raw.json`:

1. **Resumo por lead** (`digest.json`): origem pela regra de assinaturas,
   produto por palavra-chave, data/hora de entrada, **minutos até a primeira
   resposta humana** (ignorar bot), quem falou por último, dias sem contato,
   anexos, etapa, motivo de perda
2. **Uma conversa por arquivo** (`tx/<id>.txt`), compacta: `MM-DD HH:MM autor: texto`,
   juntando sequências de fotos e figurinhas numa linha só
3. **Lotes de leitura:** leads de anúncio primeiro, em lotes de ~10 conversas
4. **PDFs de orçamento:** baixar e extrair os valores (`references/kommo.md`, seção 5)

## Passo 5 — Ler e classificar

Ler cada lote pela régua de `references/estrutura-relatorio.md`. **Gravar na
hora**, uma linha por lead, em `classif.jsonl`:

`id | tipo | origem | cidade | produto | tags | valor | desfecho | observação`

- `tipo`: LEAD · CLIENTE (já comprava) · REVENDA · NÃO LEAD (pessoal, fornecedor, teste)
- `valor`: o orçamento personalizado; preço por m² não conta
- `observação`: o fato em uma linha, com o trecho que prova ("pediu 40 m²,
  recebeu PDF de R$ 5.200, sem follow-up desde 02/03")

Depois dos leads de anúncio, **triagem** do resto por palavra-chave
(orçamento, pedido, m², valor, fechou): só os comerciais são lidos inteiros.

Atualizar o `PROGRESSO.md` a cada lote.

## Passo 6 — Organizar o CRM (só se autorizado no briefing)

Montar a lista de alterações (`actions.json`) a partir do `classif.jsonl`.
Seguir `references/kommo.md`, seção 6: testar em 1 lead, aplicar em lote,
baixar de novo e conferir. **Nunca** mover etapa, fechar lead, enviar
mensagem ou criar tarefa.

## Passo 7 — Métricas

Um script (`metrics.py`) calcula tudo a partir do `classif.jsonl` e do
`digest.json`:

1. Volume por origem e por produto
2. Funil com números absolutos: contatos → conversa real → orçamento →
   negociação → venda
3. Tempo de resposta: mediana dentro e fora do horário, por hora e dia da semana
4. Pontos de perda, **ordenados pelo dinheiro em jogo**
5. Forças do comercial
6. Produtos: procura × valor, onde cada um trava
7. Uso do CRM: o que é registrado e o que falta
8. Lista de retomada: orçamento ou sinal de compra sem próximo passo, por valor

## Passo 8 — Checkpoint

Se o usuário está acompanhando, mostrar em até 15 linhas: veredito, funil,
pontos de perda com valor, tamanho da lista de retomada. Perguntar se há
contexto que as conversas não mostram.

Se está rodando sozinho, seguir e colocar isso no resumo final.

## Passo 9 — Relatório

HTML de arquivo único, visual de `_agencia/identidade.md`, seções de
`references/estrutura-relatorio.md`. Linguagem do **dono do negócio**:
frases curtas, sem jargão, elementos visuais no lugar de parágrafo.

- `entregas/auditorias/AAAA-MM_auditoria-crm.html`
- `entregas/auditorias/AAAA-MM_lista-retomada.html` — só a tabela e as
  mensagens sugeridas, para o vendedor usar no celular

## Cuidados

- **Nome de cliente final** só na lista de retomada. No relatório, exemplos
  sem nome.
- **Processo, nunca pessoa.** "A resposta fora do horário demora", não "fulano demora".
- **Venda só com evidência.** Sem certeza: "provável", e explicar.
- **Dizer o recorte:** período, canais, o que ficou de fora.
- **Contatos que não são do anúncio** (número pessoal de um sócio, recepção)
  podem distorcer o funil: confirmar no briefing quais caixas recebem leads
  de campanha.
- A pasta `dados/crm-*` tem conversas de clientes finais: fica fora do Git
  (já está no `.gitignore`).

## Passo 10 — Gravar o perfil (só na linha de base)

Criar `clientes/<cliente>/memoria/crm.md` a partir de `references/perfil-crm.md`, preenchido com o
que foi confirmado no briefing e o que a extração mostrou (etapas reais, assinaturas que
funcionaram, caixas que recebem lead, leads de teste). Acrescentar a primeira linha em
`dados/crm-historico.csv`. Sem isso, a próxima auditoria volta a ser linha de base.
Mostrar o perfil ao usuário antes de salvar.

## Fechar

- Caminho dos arquivos
- Dúvidas acumuladas durante a execução, em lista
- Oferecer: linha no `historico.md`, plano de ação em "Pendências abertas" de
  `estrategia.md`, e usar o diagnóstico no próximo `/planejamento-mensal`
