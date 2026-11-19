---
name: planejamento-mensal
description: >
  Monta o planejamento recorrente do mês de um cliente, em um de dois formatos:
  COMPLETO (projeto com histórico, meta acordada e CRM confiável: presta contas
  dos indicadores e propõe o mês em cima deles) ou ENXUTO (projeto novo: ações
  executáveis por canal, verba, calendário e os KPIs que passam a ser
  medidos). Entrega markdown de trabalho e HTML de apresentação. Use quando o
  usuário disser "planejamento do mês", "planejamento mensal", "fechamento do
  mês", "fechamento de ciclo", "planejamento pra apresentar", ou
  "/planejamento-mensal". Não é o planejamento de onboarding (/planejamento).
---

# /planejamento-mensal — planejamento recorrente

Apresentado na primeira semana de cada mês. As regras do método estão em
`references/metodo.md` e valem para os dois formatos. Ler antes de começar.

## Passo 1 — Escolher o formato

Antes de qualquer pergunta:

- **COMPLETO** (`references/modelo-completo.md`) — o projeto tem, ao mesmo
  tempo: 2 a 3 meses de histórico comparável, meta **acordada** com o cliente
  e CRM com registro confiável.
- **ENXUTO** (`references/modelo-enxuto.md`) — falta qualquer um dos três.

Na dúvida, enxuto: completo sem base vira tabela vazia, e tabela vazia
denuncia mais do que informa. Dizer qual foi escolhido e por quê, em uma linha.

## Passo 2 — Ler o que já existe

Do cliente ativo:
- `CLAUDE.md` da conta, `memoria/estrategia.md`, `memoria/empresa.md`
- `memoria/historico.md` (os últimos 60 dias)
- Planejamento anterior em `entregas/planejamentos/`
- Exports e relatórios recentes em `dados/` e `entregas/relatorios/`
- Transcripts recentes em `transcripts/`
- Auditoria de CRM recente em `entregas/auditorias/`, se houver

Da agência: `_agencia/agencia.md` (quem revisa, rituais) e `_agencia/aprendizados.md`.

**Não perguntar o que está nesses arquivos.**

## Passo 3 — Pedir só o que falta

Em um bloco só, normalmente:

1. Período coberto e data da apresentação
2. O que trava hoje, ou "está saudável, o plano é de crescimento"
3. Números do período, se ainda não estão em `dados/`
4. Onde precisa chegar: curto prazo (até quando) e longo prazo
5. Alguma ação depende do cliente?

**Nunca preencher lacuna sozinho.** Número, concorrente, meta e resultado só
com fonte. `[preencher]` só quando o usuário disser que não tem o dado agora;
aí marcar e seguir, sem travar o resto.

## Passo 4 — Checkpoint das ações (obrigatório)

**Não montar o documento antes deste passo.** Mostrar, curto:

1. **Todas as ações candidatas** que o contexto sugere, sem filtro
2. **O corte proposto:** as 3 a 5 que entram
3. **Por que cada uma que ficou de fora caiu:** é foguete? Não move o objetivo
   agora? Não cabe na realidade do cliente?

Perguntar: **"Confirma, troca ou corta mais?"**

Por que existe: priorizar é o trabalho do estrategista. Se o corte for
decidido aqui sem ele, o documento sai bom e ele não treina a decisão que vai
ser cobrada na revisão e na frente do cliente. A escolha é do usuário; a
montagem é da skill.

## Passo 5 — Montar

Seguir a estrutura do modelo escolhido e as regras de `references/metodo.md`:

- Poucas ações, as confirmadas no checkpoint. Completo: 2 a 3 frentes com
  itens concretos dentro. Enxuto: até 3 ações por canal
- Ação é **correção** (tira o que trava) ou **evolução** (amplia o que
  funciona). Projeto saudável tem plano de crescimento, e o bloco de gargalos
  fica curto ou diz que não há gargalo crítico
- Número entra **dentro do gargalo**, não em seção própria. Gargalo sem número
  é válido se for concreto
- Completo: construir as ações primeiro, preencher os indicadores por último
- **Título de seção é conclusão**, não rótulo: "Meta batida com menos verba",
  não "Resultado de agosto". Um rótulo pequeno acima situa o bloco
- Toda ação com responsável, prazo e como saberemos que funcionou
- Ação cabe na verba e na estrutura que o cliente tem hoje
- Ação que depende do cliente leva o bloco **"o que eu preciso de você"**, com
  horas por semana e o que trava sem isso

## Passo 6 — Salvar nos dois formatos

Sempre os dois, sem perguntar.

**Markdown de trabalho:** `entregas/planejamentos/AAAA-MM_planejamento-mensal.md`
Documento completo + **backlog** (o que caiu no corte, para voltar depois) +
**controle** (checklist de `references/metodo.md`). É o que vai para revisão
interna.

**HTML de apresentação:** `entregas/planejamentos/AAAA-MM_planejamento-mensal.html`
Para o cliente ver na tela. **Sem backlog e sem controle**: o cliente não vê o
que foi cortado nem o checklist.

Padrão visual do HTML, com cores e fontes de `_agencia/identidade.md`:
- Navegação fixa com âncora por bloco e assinatura da agência
- Rótulo pequeno em caixa alta acima de cada título (`Agosto · meta vs. realizado`)
- Variação sempre com cor e sinal: verde subiu, vermelho caiu, neutro estável
- Completo: tabelas densas com cabeçalho em fonte mono
- Enxuto: menos tabela, mais card; cards de canal com a verba em destaque;
  calendário em 4 blocos de semana
- Número importante vira destaque visual (card, barra de funil, comparativo)
- Arquivo único, responsivo, sem dependência além das fontes

## Passo 7 — Fechar

- Se `_agencia/agencia.md` indica revisor: *"Antes de apresentar, mandar para
  revisão de <revisor>."*
- Oferecer registrar no histórico e mover as ações confirmadas para
  "Pendências abertas" de `estrategia.md`.

## Revisar um planejamento já escrito

Se o usuário trouxer um planejamento pronto para crítica, conferir nesta ordem
e apontar a alternativa, não só o problema:

1. O formato combina com o estágio do projeto?
2. Tem ação demais?
3. Alguma ação é foguete (resolve um problema que o projeto ainda não tem)?
4. Alguma ação não move o objetivo?
5. O objetivo tem prazo? Curto e longo estão separados?
6. Indicadores fechados estão travando o documento?
7. Ação que depende do cliente tem o "o que eu preciso de você"?
