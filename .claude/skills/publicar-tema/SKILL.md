---
name: publicar-tema
description: >
  Pipeline de conteúdo a partir de um tema: artigo de blog pensado para SEO e
  GEO, carrossel resumo (via /carrossel) e legendas para Instagram, Facebook e
  LinkedIn, tudo amarrado, com o carrossel apontando para o artigo. Tudo
  entregue como rascunho para revisão. Use quando o usuário pedir "publicar
  tema", "gera o conteúdo do tema X", "transforma esse tema em post",
  "artigo + carrossel" ou "/publicar-tema".
---

# /publicar-tema — artigo + carrossel + legendas

O artigo é a peça-mãe. Carrossel e legendas derivam dele e linkam de volta.
Nada é publicado: tudo sai como rascunho.

## Contexto que lê

`marketing/seo/05-estrategia-conteudo.md` (lista de temas), e para o tema:
`01-pesquisa-demanda.md` (palavra-chave e variações), `02-analise-concorrencia.md`
(para não repetir o óbvio), `08-geo-otimizacao-ia.md` (perguntas que as IAs
respondem). Mais `memoria/empresa.md`, `memoria/voz.md` e
`identidade/design-guide.md`. Sem estratégia de SEO, funciona com tema avulso.

## Passo 0 — Tema

Veio no pedido: usar. Não veio: listar os temas da estratégia que ainda não
viraram artigo e perguntar qual (uma pergunta só).

## Passo 1 — Substância antes de texto

O que torna o artigo bom (e citável por IA) é o que **só o cliente sabe**.
Antes de escrever, juntar de `empresa.md` e do usuário: processo real, prazos,
faixas de valor, erro comum que o cliente vê, exemplo de obra/pedido. Faltou
dado específico: perguntar ou deixar `[confirmar]`. Nunca encher de generalidade.

## Passo 2 — Artigo (800 a 1.500 palavras, mais se o tema pedir)

Salvar em `clientes/<cliente>/marketing/conteudo/<slug>/artigo.md` (e, se o
cliente tem site com blog, no formato do site, com `draft: true`).

**Estrutura:**
1. **Resposta direta nas 2 primeiras linhas** (o leitor e a IA pegam a conclusão no começo)
2. Contexto do problema, concreto
3. H2 em forma de **pergunta real** do comprador (o que é, como escolher, quanto custa, erros)
4. Dado específico em cada seção: número, prazo, material, exemplo
5. Comparação ou tabela quando houver opções
6. Onde o cliente se encaixa, sem propaganda
7. FAQ curta (3 a 5 perguntas que chegam no WhatsApp), pronta para FAQPage
8. CTA único: WhatsApp, orçamento ou formulário

**Frontmatter:** título perto da palavra-chave, descrição de 150–160
caracteres com benefício, data, autor (nome real, de `empresa.md`), palavra-chave
principal e variações, `draft: true`. Mais o JSON-LD de Article e FAQPage.

**Escrita:** voz do cliente, frases curtas, parágrafos de 2 a 4 linhas, sem
jargão que o público não usa, links internos para o pilar e satélites.
Texto que parece genérico de IA não serve: reescrever com fato.

## Passo 3 — Carrossel resumo

Sem perguntar, chamar `/carrossel` (orgânico, texto): capa com a promessa do
artigo, 4 a 6 slides com um ponto cada, último slide pedindo salvar e levando
ao artigo. Alternar a capa em relação ao último post do feed. Pasta: a mesma
do artigo.

## Passo 4 — Legendas

- `legenda.md` (Instagram e Facebook): hook, 2–3 frases, pedido (arrastar/salvar), link do artigo, bloco da empresa, 3–8 hashtags
- `legenda-linkedin.md`: tom mais analítico, sem "arraste", link direto, 1 linha sobre a empresa, até 3 hashtags

## Passo 5 — Resumo

```
✓ Artigo (rascunho): <caminho>
✓ Carrossel: <pasta> (rodar render.js para gerar os PNGs)
✓ Legendas: legenda.md · legenda-linkedin.md
Para publicar: revisar o artigo → trocar draft para false → publicar o site →
postar o carrossel com a legenda → postar no LinkedIn
```

Perguntar se a linha entra no calendário de conteúdo em `estrategia.md`.

## Quando não usar

Carrossel sem artigo: `/carrossel`. Atualizar artigo existente: editar direto.

## Princípios

1. Artigo é a peça-mãe; o resto linka para ele
2. Fato do cliente vence texto bonito
3. Rascunho sempre; quem aprova é o estrategista e o cliente
4. Linguagem do público real
