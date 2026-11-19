---
name: planejamento
description: >
  Gera o planejamento estratégico de ONBOARDING de um cliente novo em HTML de
  apresentação, com 14 seções: capa, missão e método da agência, market
  sizing, jobs to be done, benchmarking, SWOT, personas, processo decisório,
  objetivo SMART e OKRs, canais, plano de execução com RACI, investimento,
  funil e cronograma. Parte dos transcripts de vendas e kickoff, do handoff e
  da memória do cliente, com uma etapa de pesquisa de mercado no meio. Use
  quando o usuário disser "planejamento", "planejamento de onboarding",
  "planejamento estratégico", "planejamento do cliente X", "/planejamento".
  Não é o planejamento recorrente do mês (esse é o /planejamento-mensal).
---

# /planejamento — planejamento estratégico de onboarding

Você é o estrategista sênior da agência. Não preenche template: constrói um
diagnóstico. O planejamento precisa ser tão específico que seria impossível
confundir com o de outro cliente.

**Não confundir:** este é o documento de **entrada** do cliente, feito uma vez.
O planejamento recorrente do começo de cada mês é o `/planejamento-mensal`.

## Princípios

- **O cliente comprou um diagnóstico, não um documento.** O HTML é o veículo;
  o valor é a inteligência dentro dele. Um número inventado de mercado vale
  menos que nenhum número.
- **Confirmado > calculado > genérico.** Se a reunião disse "ticket de
  R$ 8.000", use. Se dá para calcular, calcule e mostre a conta. Se não tem
  base, admita a incerteza.
- **Especificidade é credibilidade.** Concorrente com nome real. Região citada
  na reunião. Objeção que o cliente verbalizou. Frase que caberia no
  planejamento de outro cliente precisa ser reescrita.

## Passo 0 — Contexto e modo

Ler em silêncio:

1. `_agencia/agencia.md` — método, missão, equipe e papéis, onboarding padrão, escopo padrão
2. `_agencia/identidade.md` — visual da entrega
3. `clientes/<cliente>/CLAUDE.md` — escopo contratado (vence o padrão da agência)
4. `clientes/<cliente>/memoria/empresa.md`, `estrategia.md`, `voz.md`
5. **Todos** os arquivos de `clientes/<cliente>/transcripts/`, qualquer que
   seja o nome. Classificar pelo conteúdo: reunião de vendas, kickoff,
   handoff, outro.

Decidir o modo, sem anunciar:

| Modo | Condição | O que muda |
|---|---|---|
| **COMPLETO** | Memória preenchida + transcripts | Síntese + falas literais do cliente |
| **MEMÓRIA** | Memória preenchida, sem transcripts | Seguir, mas avisar que JTBD e processo decisório ficam menos ricos |
| **VAZIO** | Memória em branco e sem transcripts | Parar: pedir os transcripts de vendas e kickoff ou sugerir `/novo-cliente` |

Aviso do modo MEMÓRIA, ao final do Passo 1:

> "Não encontrei transcripts em `transcripts/`. Vou usar a memória do cliente.
> O planejamento fica completo, mas Jobs to Be Done e Processo Decisório saem
> com menos linguagem do próprio cliente. Se tiver as gravações, salve lá e
> rode de novo."

## Passo 1 — Briefing interno

Cruzar memória e transcripts. **Transcript vence resumo** quando divergirem.
Incorporar qualquer arquivo extra que o usuário mandou na conversa.

Montar internamente:
- Empresa · segmento · produto principal · ticket médio
- Situação atual: leads, faturamento, CRM, histórico de mídia
- Meta declarada + prazo + verba de mídia confirmada
- Concorrentes citados
- Perfil do comprador: quem compra, quem influencia, como decide, ciclo

## Passo 2 — Pesquisa de mercado

**Parar aqui antes de escrever o HTML.**

Gerar o prompt abaixo com as variáveis preenchidas e mostrar num bloco de
código. A ferramenta de pesquisa é a que estiver em `_agencia/agencia.md`
(padrão: um modo de pesquisa profunda como Gemini Deep Research, ChatGPT Deep
Research ou Perplexity).

```
Você é um analista de mercado sênior. Preciso de uma pesquisa aprofundada sobre o mercado de [SEGMENTO] no Brasil, com foco em [REGIÃO]. O objetivo é embasar o planejamento de marketing digital de [EMPRESA], que oferece [PRODUTO/SERVIÇO] com ticket médio de [TICKET].

## 1. Market sizing (TAM, SAM, SOM)
- TAM: tamanho do mercado de [SEGMENTO] no Brasil (faturamento anual ou número de empresas/consumidores), crescimento nos últimos 3 a 5 anos. Fontes: IBGE, Sebrae, associações do setor, consultorias.
- SAM: fatia acessível para uma empresa de [PORTE] atuando em [REGIÃO]. Potenciais clientes no raio de atuação. Sazonalidade.
- SOM: com R$ [VERBA] por mês em mídia paga, que fatia é capturável em 6 a 12 meses? Referências de participação para empresas nessa fase.

## 2. Concorrentes digitais
Para [CONCORRENTES CITADOS] e para os 3 maiores do segmento em [REGIÃO]:
- Anunciam no Meta Ads? Volume e tipo de criativo.
- Anunciam no Google Ads? Em quais buscas?
- Ranqueiam no orgânico para as buscas principais?
- Presença e engajamento nas redes.
- Proposta de valor que comunicam.
- O que nenhum deles faz bem.

## 3. Comportamento do consumidor
- Como o consumidor de [PRODUTO] busca esse serviço (Google, indicação, Instagram, feira...)?
- Principais objeções e dúvidas antes da compra.
- Ciclo médio de decisão.
- Gatilhos de compra do setor.
- Volume de busca mensal para [TERMOS PRINCIPAIS] no Google Brasil.
- Em quais redes esse público está.

## 4. Tendências e oportunidades
- 3 a 5 tendências que mudam o mercado de [SEGMENTO] nos próximos 2 a 3 anos.
- Nichos com crescimento e pouca concorrência digital.
- Ângulos de comunicação que nenhum concorrente explora.

## 5. Dados regionais
- Como o mercado de [SEGMENTO] se comporta em [CIDADE/ESTADO].
- Indicadores econômicos da região relevantes para o setor.

## Formato
- Siga as seções 1 a 5.
- Cite fonte e ano de cada número.
- Sem dado preciso, dê a estimativa e o método de cálculo.
- Termine com os 5 insights mais relevantes para a estratégia de marketing desta empresa.
```

Depois do prompt:

> "Rode esse prompt na sua ferramenta de pesquisa profunda e cole o resultado
> aqui. Com ele eu fecho o planejamento com dados reais de mercado."

**Esperar o resultado antes de seguir.** Se o usuário pedir para seguir sem
pesquisa, seguir, mas marcar market sizing e benchmarking como "a validar".

## Passo 3 — Integrar e filtrar

- Dado com fonte da pesquisa **substitui** estimativa genérica
- Concorrentes da pesquisa **somam** aos citados na reunião
- Tendências alimentam SWOT (oportunidades e ameaças) e canais

Antes de escrever, eliminar:
- Market sizing sem base de cálculo
- Concorrente sem evidência de presença digital
- Persona com dado demográfico que não veio da reunião nem do nicho
- Qualquer frase que poderia ir para o planejamento de outro cliente

## O que não fazer

- **Nunca inventar dado de concorrente.** Sem certeza, "a verificar".
- **Nunca usar percentual de mercado sem origem.**
- **Nunca usar persona genérica.** "Maria, 35 anos, classe B, busca qualidade"
  é template, não persona.
- **Nunca mudar a verba acordada.** Se o cliente disse R$ 5.000, é R$ 5.000.
- **Canal fora do escopo contratado não entra no grid de canais nem na verba.**
  Pode aparecer como oportunidade no SWOT.
- **Sem lista de palavras-chave nos cards de canal.** É configuração de
  campanha, não estratégia.
- **Sem KPI numérico no objetivo SMART** (leads, CPL, taxa de MQL, faturamento
  intermediário). Só a meta de negócio.
- **Sem projeção na seção de investimento.** Só a distribuição da verba.
- **Sem data de calendário no cronograma.** Só marcos relativos (D0, D1, D2–D3).

## As 14 seções

Salvar em `clientes/<cliente>/entregas/planejamentos/AAAA-MM_planejamento-onboarding.html`.

**1 · Capa.** Rótulo "Planejamento estratégico · Onboarding". Título do
documento. Subtítulo de 1 a 2 frases: segmento, cidade, proposta de valor, o
que o planejamento sustenta. 4 indicadores confirmados em destaque (ex.:
investimento/mês, ticket médio, prazo, meta do ano). Nenhum número inventado.

**2 · Agência e método.** Dois blocos, com o texto de `_agencia/agencia.md`
sem alterar:
- Missão da agência
- Método: headline contextual para este cliente + um parágrafo de transição
  + uma coluna por pilar com as entregas + frase de fechamento

Sem método cadastrado: a seção mostra só a missão e o que a agência vai
entregar para este cliente, tirado do escopo contratado. Sem missão nem método:
pular a seção e renumerar.

**3 · Market sizing.** TAM → SAM → SOM em cards empilhados em funil (sem
círculos concêntricos). TAM e SAM com números, fonte e base de cálculo. SOM
como frase de território a conquistar, sem métrica de funil: *"O território que
[cliente] vai ocupar: [nicho] em [região]."* Nota de mercado regional abaixo.
Estimativa sempre sinalizada.

**4 · Jobs to be done.** O que o cliente final compra de verdade (resultado,
não produto), em headline de destaque. Um bloco por perfil identificado nas
reuniões (2 a 3): o que não quer, o que quer, e o job principal na voz do
cliente: *"Quero [resultado] sem [obstáculo]."*

**5 · Benchmarking.** 2 a 4 concorrentes reais. Por concorrente: nome, card
visual (placeholder se não houver imagem) e **botões clicáveis** para a
Biblioteca de Anúncios do Meta e o Centro de Transparência do Google Ads
(`<a href target="_blank">`). Depois, separador "Referência nacional" com uma
empresa de referência do segmento no mesmo formato. Fechar com o vácuo que o
cliente pode ocupar.

**6 · SWOT.** Grid 2×2 com borda colorida por quadrante (forças verde,
fraquezas vermelho, oportunidades cor de destaque, ameaças neutro). Todo bullet
específico deste cliente.

**7 · Personas.** Normalmente 2, só perfis vistos nas reuniões. Três colunas
por persona: avatar placeholder + nome fictício + demografia do nicho real ·
psicografia, como decide, ciclo · medos, frustrações e objeções citadas.

**8 · Processo decisório.** Subtítulo sobre o perfil de compra. 5 etapas:
gatilho, pesquisa, validação, orçamento, fechamento, cada uma específica do
nicho. Faixa de alerta com o ciclo médio e a consequência para o CRM (ex.:
"ciclo de 30 a 90 dias: lead sem nutrição no CRM se perde").

**9 · Objetivo SMART e OKRs.** Objetivo de 90 dias em parágrafo, ancorado na
meta de negócio. Checklist SMART ao lado. 4 OKRs sem métrica que gere
expectativa:
- Estrutura técnica instalada e campanhas no ar até o fim do onboarding
- Gerar leads qualificados: descrever o **perfil** do lead qualificado deste nicho
- Documentar e validar as métricas-chave (CPA, CAC, conversão por etapa)
- Descobrir o criativo e o gancho de menor custo por lead no ciclo

**10 · Canais.** Só os canais do escopo contratado que fazem sentido para este
perfil, cada um com ícone, título e justificativa ligada ao benchmarking e ao
processo decisório. Referências de papel de cada canal:
- Google Ads: fundo de funil, intenção ativa
- Meta Ads: topo e meio, desejo, prova, remarketing
- WhatsApp + CRM: qualificação, follow-up, nutrição de ciclo longo
- LinkedIn: B2B e decisores
- Parcerias: específicas do nicho (ex.: especificadores, indicadores)
- Orgânico, SEO, Google Meu Negócio: só se contratados

**11 · Plano de execução e RACI.** Legenda R, A, C, I e RA (responsável e dono,
em destaque). Uma coluna por papel de `_agencia/agencia.md` + coluna
"Cliente". Nunca juntar a agência numa coluna só. Tabela com `overflow-x:auto`.
Atividades de referência (ajustar ao escopo):

| Atividade | Quem costuma ser R |
|---|---|
| Planejamento estratégico mensal | Estrategista |
| Aprovação do planejamento | Cliente (A) |
| Criação e otimização de campanhas | Tráfego |
| Landing page e criativos | Tráfego / criação |
| Envio de fotos, vídeos e materiais | Cliente |
| Gravação dos vídeos | Cliente |
| Aprovação de criativos e campanhas | Cliente (A) |
| Atendimento e velocidade de resposta aos leads | Cliente |
| Uso do CRM e atualização de status | Cliente |
| Qualificação, proposta e follow-up comercial | Cliente |
| Análise de resultados e diagnóstico | Estrategista |
| Reuniões de acompanhamento | CS |

**12 · Investimento.** Árvore em CSS com a verba exata no topo e a divisão por
plataforma, com sub-divisão por objetivo ou tipo de campanha. Barras animadas.
Sem justificativa em card, sem projeção, sem CPL estimado.

**13 · Funil.** Visual em etapas decrescentes: lead → MQL → SQL → proposta →
negociação → venda, com marcação de onde é marketing e onde é vendas. Bloco MQL:
definição para este nicho, campos do formulário, "vira MQL se", "não vira MQL
se", "vira SQL se". Bloco SQL: necessidade + orçamento + prazo, regras de
passagem para o vendedor e registro no CRM.

**14 · Cronograma.** Headline sem prazo em dias ("Marcos e entregas"). Duas
linhas do tempo lado a lado, **agência** e **cliente**, com os marcos de
`_agencia/agencia.md` ajustados ao escopo deste cliente. Só marcos relativos.

## Design

**Constantes:** cores, fontes e assinatura de `_agencia/identidade.md`.
Sem identidade cadastrada, usar base neutra escura (fundo `#0E0E10`, texto
`#F2EFEA`, um acento discreto) e avisar no fim que a identidade da agência
está pendente.

**Direção estética: escolher uma por cliente**, pelo perfil do negócio e o tom
da reunião. Nunca repetir o último planejamento.

- **Editorial** — tipografia enorme, muito espaço, grid assimétrico. Alto
  ticket, arquitetura, serviços premium.
- **Técnico** — grid denso, rótulos em mono, linhas estruturais, cara de
  painel. Indústria, B2B, construção.
- **Cinético** — entradas com movimento marcado, energia alta. Varejo,
  lifestyle, público jovem.
- **Minimal luxury** — 2 a 3 elementos por seção, fontes finas e grandes.
  Exclusividade, imobiliário premium.
- **Data-driven** — números enormes como decoração, gráficos protagonistas.
  Cliente que pergunta de ROI e CPL.
- **Regional bold** — tipografia expressiva, contraste alto. Comércio local,
  produto de massa.

Pode combinar duas. Não pode copiar o anterior.

**Cada seção:** rótulo pequeno com número e tema + headline contextual de 2 a
3 linhas que só funciona para este cliente. Ruim: "Market sizing". Bom: *"Do
varejo nacional ao polo que mais cresce no interior do estado."*

**Camadas de interação** (implementação livre, reescrever do zero a cada
cliente): barra de progresso de leitura · navegação lateral gerada por JS com
item ativo via IntersectionObserver · entrada dos elementos no scroll, com
escalonamento · algo vivo na capa (gradiente, partículas, texto se revelando) ·
barras de verba crescendo na seção 12 · contador de seção e marca d'água da
agência fixos. Cursor personalizado é opcional.

**Layout:** hierarquia rótulo → headline → texto → conteúdo; `clamp()` nas
fontes; mobile funcional obrigatório; alternar seções densas e arejadas;
número da seção em marca d'água grande e quase transparente.

## Checklist antes de salvar

- [ ] Nenhuma seção genérica: todas específicas deste cliente
- [ ] Market sizing com fonte ou base de cálculo; SOM sem métrica de funil
- [ ] JTBD na voz do cliente final
- [ ] Concorrentes reais, com botões para as bibliotecas de anúncios
- [ ] SWOT e personas tirados das reuniões
- [ ] Objetivo SMART sem KPI numérico
- [ ] Verba exata, sem projeção
- [ ] Canais só do escopo contratado
- [ ] RACI com uma coluna por papel da agência + cliente
- [ ] Cronograma com marcos relativos, sem data de calendário
- [ ] Visual da `_agencia/identidade.md`

## Fechar

Informar o caminho do arquivo. Oferecer registrar no histórico:
`AAAA-MM-DD · entrega · Planejamento de onboarding (entregas/planejamentos/...)`.
