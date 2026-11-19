---
name: copy-lp
description: >
  Gera copy de landing page reaproveitando a estrutura de uma LP de referência
  (de um concorrente, de outro cliente da agência ou de uma página que o
  usuário admira), adaptando texto, prova social e mix de serviços ao cliente
  ativo. Sempre mostra o plano de estrutura para aprovação antes da copy final.
  Exporta em .md e, se pedido, .docx. Use quando o usuário disser "copy de LP
  baseada nessa", "copy pro site do cliente X", "adapta essa página", "/copy-lp"
  ou mandar um link de LP como modelo. Para LP do zero com protótipo, usar
  /lp-alta-conversao.
---

# /copy-lp — copy de LP a partir de uma referência

Gera o texto de uma LP para o time de design, usando a estrutura de blocos de
uma página de referência já pronta, com o conteúdo real do cliente ativo.

**Quando não usar:** sem referência de estrutura, ou quando também precisa do
protótipo e da especificação de design → `/lp-alta-conversao`.

## Passo 1 — Inputs

Perguntar o que faltar:
- **Link(s) da LP de referência** (uma ou mais)
- **Site atual do cliente**, se existir
- **Mix de comunicação** entre serviços (ex.: 80/20), se não estiver em
  `memoria/estrategia.md`
- Um briefing de copy que a agência já passou para o design em outro projeto,
  como padrão de seções (opcional)

## Passo 2 — Contexto

Do cliente ativo: `memoria/empresa.md`, `memoria/voz.md`,
`memoria/estrategia.md`, `identidade/design-guide.md`.

## Passo 3 — Ler as referências

- **Cada LP de referência:** estrutura completa seção a seção (headline,
  sub-headline, CTAs com o texto exato, corpo, listas de serviço, prova social,
  FAQ, rodapé).
- **Site atual do cliente:** headlines e slogans já usados, serviços, diferenciais
  técnicos, selos, prova social existente (ou confirmar que não existe),
  contato e área de atendimento.

## Passo 4 — Plano de estrutura (checkpoint)

Antes de escrever a copy final, apresentar:
- **Qual referência usar como base** (se houver mais de uma) e por quê. Critério
  principal: qual estrutura comporta o mix de serviços do cliente
- **Estrutura seção a seção** já adaptada, com o conteúdo real de cada bloco
- **Lacunas:** sem depoimentos, sem FAQ, paleta em aberto. Propor alternativa
  (ex.: trocar depoimentos por bloco de credencial técnica), nunca inventar

**Parar e esperar aprovação.**

## Passo 5 — Copy final

- Copy completa dentro da estrutura aprovada
- **Nunca copiar frase da referência.** Inspiração de estrutura e tom;
  texto próprio
- **Sem travessão (—)** e sem marcas que soam geradas por IA. Pontuação comum,
  revisar a fluidez
- Tom de `memoria/voz.md`. Voz pendente → avisar que o tom é provisório
- Revisão de ortografia antes de entregar

## Passo 6 — Salvar

`marketing/landing-pages/<tema>/AAAA-MM-DD_copy.md`

## Passo 7 — .docx (se quiser)

Perguntar se quer em Word/Google Docs. Se sim:

```
node .claude/skills/copy-lp/scripts/md-to-docx.js <arquivo.md> <arquivo.docx>
```

Converte títulos (`#`, `##`), **negrito**, *itálico*, listas (`- `) e `---`.
Precisa de Node e PowerShell (Windows); não precisa de Word nem pandoc. Fora do
Windows, se o `pandoc` estiver instalado, usar `pandoc <md> -o <docx>`.

## Regras

- Nunca inventar prova social (depoimento, avaliação, selo)
- Sempre parar no plano antes da copy final
- Reescrever, nunca copiar, a referência
- Sem travessão na copy final
- Nome de arquivo com data, para não sobrescrever versões
