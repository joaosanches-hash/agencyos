---
name: email-cliente
description: >
  Escreve e-mail ou mensagem de WhatsApp da agência para um cliente (ou para
  qualquer pessoa, em nome da agência) a partir de um contexto livre: cobrar
  material, dar má notícia, alinhar expectativa, pedir aprovação, responder
  reclamação, propor mudança de escopo. Calibra pelo tom da agência e pelo
  histórico da conta. Use quando o usuário disser "escreve um e-mail",
  "manda uma mensagem pro cliente", "como eu respondo isso", "preciso cobrar
  X", "/email-cliente".
---

# /email-cliente — e-mail e mensagem para cliente

## Passo 1 — Contexto

- **Para quem:** cliente ativo ou pessoa citada. Se for cliente, ler
  `CLAUDE.md` da conta (contato, canal), `memoria/estrategia.md` (pendências)
  e as últimas linhas do `historico.md`.
- **Tom:** `_agencia/voz.md`.
- **Canal:** e-mail ou WhatsApp? Se não foi dito, usar o canal da conta.
- **Objetivo:** o que precisa acontecer depois que a pessoa ler? (responder,
  aprovar, enviar algo, aceitar uma mudança). Se não estiver claro, perguntar
  numa linha.

Se o usuário colou uma mensagem recebida, ler com atenção o que a pessoa
realmente pediu ou reclamou.

## Passo 2 — Escrever

Regras:
- **A primeira linha diz o assunto.** Nada de "Espero que esteja bem" antes
  do ponto.
- **Um pedido por mensagem**, com prazo quando houver.
- **Má notícia:** o fato primeiro, depois o porquê em uma frase, depois o que
  a agência vai fazer. Sem se esconder em rodeio, sem se desculpar demais.
- **Cobrança ao cliente:** lembrar o impacto no resultado dele, não a
  conveniência da agência ("sem as fotos, os anúncios novos atrasam uma
  semana").
- **Reclamação:** reconhecer o que for procedente, responder o ponto concreto,
  dizer o próximo passo. Não rebater tudo.
- WhatsApp: curto, parágrafos de 1 a 2 linhas, no máximo um emoji se combinar
  com o tom da agência.
- E-mail: assunto específico ("Fotos da obra: preciso até quinta para os
  anúncios de abril"), corpo curto, assinatura de `_agencia/voz.md`.

## Passo 3 — Entregar

Colar o texto pronto para copiar. Para situações delicadas (má notícia,
reclamação, escopo), oferecer **duas versões**: uma mais direta e uma mais
cuidadosa, com uma linha dizendo a diferença.

Não salvar em arquivo, salvo pedido. Se a mensagem registrar uma decisão ou
compromisso novo, oferecer uma linha no `historico.md`.

## Nunca

- Prometer prazo ou resultado que o usuário não deu
- Expor dado interno de outro cliente
- Culpar alguém da equipe do cliente pelo nome
