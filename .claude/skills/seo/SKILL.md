---
name: seo
description: >
  SEO local, Google Meu Negócio e GEO (aparecer em respostas de IA como
  Google AI Overviews, ChatGPT, Gemini e Perplexity) para um cliente, em 8
  passos: demanda, concorrência, perfil do Google, on-page, estratégia de
  conteúdo, base para Google Ads, monitoramento e GEO. Pesquisa de verdade na
  web e entrega arquivos prontos para executar. Use quando o usuário pedir
  "seo", "geo", "palavras-chave", "aparecer no Google", "aparecer no ChatGPT",
  "Google Meu Negócio", "analisar concorrência", "pesquisa de nicho" ou "/seo".
---

# /seo — SEO local + GEO

Entrega arquivos em `clientes/<cliente>/marketing/seo/`, numerados na ordem
dos passos. Cada passo mostra um resumo antes de seguir. Para rodar só um:
`/seo gmb`, `/seo geo`, `/seo passo 4`.

## Contexto que lê

`memoria/empresa.md` (produtos, praça, público, diferenciais), `memoria/estrategia.md`
(meta, foco), `memoria/voz.md` (tom). Site do cliente, se existir.

## Regras que valem para tudo

- **Pesquisa real.** WebSearch e WebFetch. Nunca inventar volume, posição ou concorrente. Sem fonte: "estimativa" e a lógica
- **Mostrar a pesquisa antes de usar** em entrega: o que achou, de onde, e esperar o OK (regra do sistema)
- Termos como o público brasileiro digita, com cidade/região
- Prioridade para **intenção comercial/transacional**; informacional serve ao conteúdo
- Dados estruturados em JSON-LD
- O Google disse que AI Overviews e o Modo IA usam os mesmos sistemas de ranqueamento da Busca, sem um "índice de IA" à parte: **bom SEO é a base do GEO**, não o contrário

## Passo 1 — Demanda → `01-pesquisa-demanda.md`

30 a 50 termos-semente (produto, intenção, cidade/região, uso). Ampliar com
buscas reais: sugestões, "pesquisas relacionadas", Google Trends para
sazonalidade, o que aparece em orgânico, anúncio e Maps. Classificar cada
termo: volume (alto/médio/baixo/micro, como estimativa), intenção
(informacional/comercial/transacional/navegacional), dificuldade e relevância.
Entregar tabela, **top 10 prioritários**, termos sazonais e descartados com motivo.
Se o cliente tem Search Console, os termos reais dele vencem a estimativa.

## Passo 2 — Concorrência → `02-analise-concorrencia.md`

Para os top 10 termos: quem ocupa o top 5 orgânico (e que tipo de página:
institucional, marketplace, blog, diretório), quem está no pacote local do
Maps (avaliações e nota), quem anuncia e com qual mensagem. Abrir 5 a 8
concorrentes relevantes (WebFetch): estrutura, títulos, profundidade do
conteúdo, dados estruturados, perfil do Google. Fechar com gaps, oportunidades,
quem é forte demais para atacar de frente e o **padrão mínimo** que o cliente precisa atingir.

## Passo 3 — Perfil da Empresa no Google → `03-google-meu-negocio.md`

O resultado mais rápido do SEO local. Documento com tudo para preencher:
nome idêntico ao registrado, categoria principal e secundárias, endereço ou
área de atendimento, horário, telefone/WhatsApp, descrição (até 750
caracteres, natural), serviços e produtos cadastrados, atributos, fotos
(checklist: fachada, interior, produto, equipe, processo), 4 postagens
iniciais e rotina semanal, **estratégia de avaliações** (como pedir, link
direto, resposta padrão via `/responder-avaliacoes`) e citações em
diretórios com NAP (nome, endereço, telefone) idêntico em todo lugar.

## Passo 4 — On-page → `04-otimizacao-on-page.md`

Tabela página → palavra-chave → title (até ~60 caracteres, termo no começo)
→ meta description (até ~160, com ação) → H1/H2. Dados estruturados prontos
(LocalBusiness, Product, FAQPage quando houver perguntas reais, Article no blog).
Checklist técnico com status: URLs limpas, alt das imagens, sitemap, robots,
canonical, Open Graph, mobile e **Core Web Vitals** (LCP até 2,5 s, INP até
200 ms, CLS até 0,1; medir no PageSpeed Insights, que mostra dado real de
usuários). Mapa de links internos.

## Passo 5 — Conteúdo → `05-estrategia-conteudo.md`

Do conjunto de termos informacionais: 5 a 10 temas evergreen que respondem
dúvida real de quem compra, cada um com título, palavra-chave, estrutura de
H2 e tamanho. Organizar em **cluster**: uma página pilar e satélites que
linkam para ela. Calendário (prioridade e frequência realista) e conteúdo
local quando fizer sentido. Cada item vira artigo + carrossel + legendas pelo
`/publicar-tema`.

Critério de qualidade: conteúdo escrito por quem **vive** o assunto, com
detalhe que só o cliente sabe (processo, prazo, erro comum, número real).
Texto genérico de IA não rankeia nem é citado.

## Passo 6 — Base para Google Ads → `06-google-ads.md`

Objetivo, grupos por intenção, termos transacionais, negativas iniciais,
ideias de anúncio e a avaliação da LP. É o insumo do `/anuncio-google`.

## Passo 7 — Monitoramento → `07-checklist-monitoramento.md`

- **Semanal:** responder avaliações, 1 postagem no perfil, olhar o Search Console
- **Mensal:** posição dos top 10, tráfego orgânico e leads vindos do orgânico/perfil, 1 a 2 conteúdos publicados, citações
- **Trimestral:** refazer a concorrência resumida, atualizar fotos, rever a estratégia de conteúdo

## Passo 8 — GEO → `08-geo-otimizacao-ia.md`

Objetivo: ser **citado ou recomendado** quando alguém pergunta a uma IA "qual
o melhor X em Y".

1. **Auditoria:** fazer as 10 perguntas que o comprador faria em ChatGPT, Gemini, Perplexity e no Modo IA/AI Overviews do Google. Registrar: o cliente apareceu? quem apareceu? que fontes foram citadas? Anotar a data (as respostas mudam)
2. **Onde as IAs buscam:** as citações tendem a vir muito de **fontes de terceiros** (matérias, listas, diretórios, avaliações, fóruns), não só do site da marca. Mapear quais fontes dominam o nicho e como o cliente entra nelas (avaliações, diretórios do setor, imprensa local, parcerias, guest post)
3. **Conteúdo extraível:** resposta direta nas primeiras linhas, perguntas como H2/H3, dados concretos e verificáveis (números, prazos, certificações, endereço), tabelas e listas, autoria e data. Páginas com mais dado específico tendem a ser mais citadas; vago é descartado
4. **Marca consistente:** mesmo nome, descrição, endereço e categoria em site, perfil do Google, redes e diretórios
5. **FAQ real** com FAQPage em JSON-LD (5 a 10 perguntas que o cliente realmente recebe no WhatsApp)
6. **Acesso dos rastreadores:** conferir que o robots.txt não bloqueia, sem querer, os bots de busca de IA
7. **Monitoramento mensal:** repetir as 10 perguntas, medir presença por motor (citado, mencionado, ausente), comparar com o mês anterior

Os estudos de GEO que circulam são, na maioria, de fornecedores de ferramenta:
usar como direção, não como promessa ao cliente. Nunca prometer "aparecer no ChatGPT".

## Fechar

Resumo executivo: top 5 oportunidades, o que fazer primeiro, estimativa de
verba de Ads (com faixa e fonte) e próximos passos. Propor linha para
`estrategia.md` e `historico.md`.
