# Template do Blueprint — o documento que o webdesigner recebe

O blueprint é a entrega 1. Formato abaixo, seção por seção, sem pular campos. Salvar em
`clientes/<cliente>/marketing/landing-pages/<tema>/blueprint.md`.

---

```markdown
# Blueprint LP — [Cliente] · [Tema/Campanha] · [data]

## Resumo estratégico
- **Oferta da página:** [a única oferta]
- **Tráfego de origem:** [anúncio/canal + promessa que o anúncio faz]
- **Avatar & consciência:** [quem + nível] → **página [curta/média/longa]**
- **Conversão:** [WhatsApp com mensagem pré-preenchida / formulário X campos] · qualificação [leve/média/forte]
- **Jornada em 1 linha:** [ex.: dor da obra parada → método de aplicação própria → prova regional → orçamento em 24h]

## Tokens de design (do design-guide do cliente)
- **Cores:** fundo [#hex] · texto [#hex] · apoio [#hex] · **CTA (exclusiva): [#hex]**
- **Tipografia:** headlines [Fonte, peso] · corpo [Fonte, peso] — Google Fonts
- **Clima:** [2-3 palavras: ex. premium mineral, quente e direto...]

---

## Seção 1 — HERO
**Função:** [1 linha — ex.: visitante do anúncio X se reconhece e vê o resultado]
**Copy:**
- Headline: ...
- Sub-headline: ...
- Sinal de confiança: [prova real curta]
- CTA: "[rótulo]" → [wa.me/...?text=... | âncora do formulário]
**Design:** [layout do bloco, imagem de fundo/lado, posição do texto]
**Asset:** 📁 [link Drive/caminho + porquê] — ou — 🎨 prompt IA: "..."
**Mobile:** [o que muda: tamanho da headline, empilhamento, CTA visível]

## Seção 2 — [NOME] 
**Função:** ... | **Objeção que vence:** ...
**Copy:** ...
**Design:** ...
**Asset:** ...
**Mobile:** ...

[... repetir para cada seção da jornada ...]

## Seção final — AÇÃO + REFORÇO
**Copy:** [CTA final + FAQ enxuto (3-5 perguntas na voz do cliente) + garantia/risco reverso]
**Formulário (se houver):** campos exatos, rótulos, microcopy do botão, mensagem de sucesso
**WhatsApp (se houver):** número, mensagem pré-preenchida exata

---

## Handoff pro webdesigner ([construtor de LP])
- **Preservar obrigatoriamente:** ordem das seções, copy na íntegra, cor exclusiva do CTA,
  hierarquia (1 elemento dominante por seção), versão mobile descrita.
- **Flexível:** [animações, detalhes decorativos...]
- **Integrações a configurar no builder:** [pixel, formulário→CRM, botão WhatsApp]
- **1º teste A/B sugerido:** [normalmente headline do hero — variação pronta: "..."]
- **Pós-conversão:** [mensagem/tela de obrigado + SLA de resposta combinado]
```

---

Regras do documento:
- **Toda seção tem os 5 campos** (função, copy, design, asset, mobile). Campo vazio = decisão
  não tomada = retrabalho no design.
- Copy vai FINAL no blueprint (não "sugestão de texto") — o webdesigner diagrama, não escreve.
- O porquê estratégico de cada seção em 1 linha: designer que entende a função executa melhor.
- Sem travessão "—" na copy final das seções (pontuação limpa pra colar no builder).
