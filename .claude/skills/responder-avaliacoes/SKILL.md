---
name: responder-avaliacoes
description: >
  Escreve respostas para avaliações do Google (Perfil da Empresa / Google Meu
  Negócio) em nome de um cliente: curtas, humanas, específicas ao que a pessoa
  escreveu, no tom da marca, e com cuidado redobrado nas negativas. Use quando
  o usuário disser "responder avaliação", "resposta pro Google", "tem avaliação
  nova", "review", "/responder-avaliacoes" ou colar texto ou print de
  avaliação.
---

# /responder-avaliacoes — respostas para avaliações do Google

## Contexto

Cliente ativo: `memoria/voz.md` (tom da marca), `memoria/empresa.md` (produtos,
diferenciais, contato). Sem voz definida, usar tom cordial e simples e avisar
que é provisório.

## Uma resposta por avaliação

Ler cada avaliação e identificar: nota, nome, o que a pessoa citou de
concreto (produto, atendente, prazo, problema).

**Positivas (4 e 5 estrelas):**
- Nome da pessoa
- Agradecimento que varia de uma resposta para outra (nunca o mesmo texto
  em série: o Google e os leitores percebem)
- Uma frase que devolve **o que ela citou** ("que bom que a entrega chegou
  antes da data que vocês precisavam")
- Fechamento curto. Emoji opcional, se combinar com a marca
- 2 a 4 linhas

**Neutras (3 estrelas):** agradecer, reconhecer o ponto que ficou abaixo,
dizer em uma frase o que a empresa faz sobre isso.

**Negativas (1 e 2 estrelas):**
- Calma e sem defensiva. Quem lê a resposta é o próximo cliente, não só quem
  reclamou
- Reconhecer o ponto concreto; pedir desculpas pelo que for procedente
- Nunca discutir fatos em público, nunca expor dado do cliente (pedido, valor,
  endereço)
- Levar para um canal privado: contato de `memoria/empresa.md`
- Se a avaliação parece falsa ou de quem não é cliente: resposta curta e
  neutra, e avisar o usuário sobre a opção de denunciar a avaliação no Google
- **Antes de entregar, avisar o usuário** para confirmar os fatos com o
  cliente se a resposta admitir algo

## Não fazer

- Texto de empresa grande ("Agradecemos seu feedback, ele é muito importante
  para nós")
- Palavra-chave enfiada para SEO ("melhor loja de ... em ...")
- Oferecer desconto ou brinde em troca de avaliação (viola a política do Google)
- Inventar detalhe que a pessoa não escreveu

## Entrega

Na resposta, uma resposta por avaliação, identificada pelo nome e nota,
prontas para copiar. Várias negativas seguidas sobre o mesmo tema → apontar
o padrão ao usuário: é assunto para o cliente, não só para a resposta.
