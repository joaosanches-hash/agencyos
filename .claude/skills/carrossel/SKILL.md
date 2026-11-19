---
name: carrossel
description: >
  Cria carrosséis e posts únicos para Instagram, Facebook e LinkedIn na
  identidade visual do cliente: texto aprovado primeiro, depois HTML de um
  arquivo só, PNGs 1080x1350 renderizados e legenda pronta. Serve para
  conteúdo orgânico e também para carrossel como anúncio no Meta Ads. Use
  quando o usuário pedir "carrossel", "post", "conteúdo para Instagram",
  "post educativo", "criar a arte do post" ou "/carrossel".
---

# /carrossel — carrossel e post visual

Tema → texto aprovado → HTML → PNGs → legenda. Nesta ordem, com aprovação do
texto antes de desenhar.

## Contexto que lê

`identidade/design-guide.md` (cores, fontes, logo; **ler antes de qualquer
visual**), `memoria/empresa.md`, `memoria/voz.md`. Sem design-guide
preenchido, usar o visual-base abaixo e avisar que é provisório.

## Orgânico ou anúncio?

Perguntar se não estiver claro. A diferença muda o texto:

| | Orgânico | Anúncio (Meta Ads) |
|---|---|---|
| Objetivo | Salvar, compartilhar, confiar | Gerar o contato |
| Capa | Promessa de valor ou curiosidade | Produto/oferta e para quem é |
| Último slide | Pedir salvar/enviar a alguém + CTA | CTA direto (WhatsApp, orçamento) |
| Legenda | Hook + contexto + CTA | Uma por anúncio, primeira linha forte (~125 caracteres antes do "ver mais") |
| Salva em | `marketing/conteudo/` | `marketing/criativos/` |

## O que faz um carrossel funcionar hoje

Não há peso oficial publicado para os sinais do Instagram; o que a plataforma
confirma é que curtidas, **salvamentos e compartilhamentos** pesam na
recomendação. Na prática:

- **Slide 1 vale mais que o resto.** Tem que fazer a pessoa parar e entender a promessa em 2 segundos. Quem não passa do slide 1 não vê nada
- **Cada slide pede o próximo:** uma ideia por slide, e o fim do slide aponta para o seguinte
- **Conteúdo que vale guardar:** passo a passo, checklist, comparação, erro comum, material de consulta. Se ninguém salvaria, falta valor
- **Tamanho:** 5 a 8 slides cobrem a maioria; só passar disso se cada slide sustentar o interesse
- **Último slide com um pedido só:** salvar, enviar para alguém que precisa ou chamar no WhatsApp
- Medir por **salvamentos e compartilhamentos por alcance**, não por curtida

## Tipos

1. **Carrossel de texto** (educativo, lista, explicação): sem foto, tipografia forte
2. **Carrossel com foto** (produto, bastidor, aspiracional): foto real do cliente é o padrão. Foto de IA só com aprovação e nunca com rosto de pessoa identificável
3. **Post único** (dado, frase, depoimento real): uma ideia, uma imagem

Formato **1080x1350 (4:5)**. 9:16 só se pedirem Stories/Reels.

## Passo 1 — Ângulo

Tema + ângulo + público + o que a pessoa faz depois. Se vier de um tema do
`/seo`, usar a palavra-chave. Considerar o **ritmo do feed**: a capa nova não
repete o estilo da última publicada (claro → foto/escuro → cor da marca).

## Passo 2 — Texto (checkpoint)

- Capa: até 8 palavras, **3 opções** para escolher
- Slides internos: uma ideia, frase natural, como o público fala. Sem jargão de agência
- Só fatos confirmados em `empresa.md` ou trazidos pelo usuário. Número, prazo e depoimento sem fonte: `[confirmar]`
- Último slide: um pedido

Mostrar o texto completo e **esperar o OK** antes do visual.

## Passo 3 — Foto (só se o tipo pedir)

Preferir fotos reais do cliente (`identidade/referencias/`, Drive). Se for IA, prompt em inglês, mostrar antes de usar:

```
Professional [tipo] photography of [assunto], [detalhes], [ambiente],
[luz] lighting, shallow depth of field, shot from [ângulo], editorial quality
```

## Passo 4 — Visual

Um único `carrossel.html` com todos os slides (`<div class="slide">`, CSS
inline, Google Fonts como única dependência externa) e um `render.js` com
Playwright que fotografa cada slide em 1080x1350. Reaproveitar `node_modules`
de outra pasta com `NODE_PATH`; não instalar de novo a cada carrossel.

**Visual-base (quando o design-guide é vago):**
- Fonte Inter. Título de capa 90–100 px, peso 900, espaçamento **−0,04em**; H2 60–72 px, peso 800; corpo 22–26 px (legível no celular); eyebrow 14–16 px em MAIÚSCULAS com espaçamento **+0,25em**
- Fundo escuro `#0E1116` ou claro `#FAFAF7`, texto no contraste oposto, **uma só cor de destaque**. Nunca quatro cores brigando
- Logo no canto superior esquerdo e contador de página no direito, em todos os slides
- Margens laterais de 70 a 100 px. Texto nunca encostando na borda
- Alternar fundo entre slides (escuro, claro, destaque); nunca dois iguais seguidos

**Layouts** (variar, no mínimo dois por carrossel): CAPA, SOLO (foto 50% + texto), DUO (texto + duas fotos), NÚMERO (numeral gigante como elemento gráfico), CITAÇÃO, CTA FINAL (fundo na cor de destaque).

Mostrar capa, slide 2 e CTA renderizados; aprovados, mostrar o resto.

## Passo 5 — Legenda (sempre, sem pedir)

Salvar `legenda.md` ao lado dos PNGs.

- **Orgânico:** hook na primeira linha → contexto em 2 a 3 frases → pedido (arrastar, salvar, enviar) → bloco da empresa e contato → 3 a 8 hashtags relevantes (nicho + local; mais não ajuda)
- **Anúncio:** uma legenda por anúncio, nunca todas no mesmo; a primeira linha precisa funcionar sozinha; só dado confirmado
- **LinkedIn** (se pedido): mais analítica, sem "arraste", até 3 hashtags

## Pasta de entrega

```
clientes/<cliente>/marketing/conteudo/<tipo>-<tema>-AAAA-MM-DD/   (orgânico)
clientes/<cliente>/marketing/criativos/carrossel-<tema>-AAAA-MM-DD/ (anúncio)
  texto.md · carrossel.html · render.js · instagram/slide-01.png … · legenda.md
```

## Fechar

Dizer onde ficou, listar o que o usuário precisa postar e oferecer: "Esse tema
dá um artigo no blog. Quer o `/publicar-tema`?"

## Regras

- Ler o design-guide antes de desenhar; texto aprovado antes do visual
- 1080x1350, um HTML + um render.js, sem repetir layout em slides seguidos
- Legenda sempre junto; foto de IA só aprovada, prompt em inglês, sem rosto identificável
- Nada de conteúdo "de internet" sem passar pelo usuário (regra do sistema)
