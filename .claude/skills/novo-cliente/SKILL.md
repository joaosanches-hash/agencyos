---
name: novo-cliente
description: >
  Cadastra um cliente novo na agência: copia o molde clientes/_modelo/ para
  clientes/<cliente>/, preenche a memória (empresa, estratégia, voz, ficha da
  conta) a partir do que existir (transcripts de vendas e kickoff, handoff,
  site, Instagram) e de uma entrevista curta, e registra na carteira. Use
  quando o usuário disser "novo cliente", "cadastrar cliente", "entrou um
  cliente", "/novo-cliente" ou mandar material de um cliente que ainda não
  tem pasta.
---

# /novo-cliente — cadastrar uma conta

## Passo 1 — Nome e pasta

Perguntar o nome do cliente, se não veio no pedido. Criar o nome da pasta em
minúsculas, sem acento, com hífen: "Acme Pisos & Cia" → `acme-pisos`.

Se `clientes/<pasta>/` já existir, parar e avisar. Não sobrescrever.

## Passo 2 — Criar a pasta

Copiar `clientes/_modelo/` inteiro para `clientes/<pasta>/`, mantendo todas as
subpastas (inclusive as vazias).

## Passo 3 — Juntar o que já existe

Antes de perguntar qualquer coisa, procurar material:

- Arquivos que o usuário mandou junto com o pedido
- Transcripts de reunião de vendas, kickoff ou handoff: mover ou copiar para
  `clientes/<pasta>/transcripts/` com o nome `AAAA-MM-DD_descricao.md`
- Site e Instagram do cliente, se o usuário passar os links (ler com WebFetch
  quando disponível)

Ler tudo e extrair o que for fato. Transcript vence resumo quando houver
divergência.

## Passo 4 — Entrevista do que faltou

Com o material lido, montar a lista do que ainda está em branco e perguntar
**em um bloco só**, agrupado:

- **Negócio:** o que faz, produtos (e o carro-chefe), tempo de mercado, sede
- **Público:** quem compra, ticket médio, ciclo de decisão, região atendida
- **Diferenciais e prova:** o que é comprovado, depoimentos, números divulgáveis
- **Concorrentes:** 2 a 4 nomes
- **Conta:** escopo contratado, verba de mídia e divisão, meta e prazo,
  responsável na agência, contato no cliente
- **Conversão:** lead gen ou venda direta, para onde vai o clique (WhatsApp,
  formulário, LP, loja), SLA de resposta
- **Marca:** tem manual de marca? Tom de voz definido? Drive de fotos?

Pular o que o material já respondeu. "Não sei" vira `[preencher]`.

## Passo 5 — Preencher

- `CLAUDE.md` da conta — ficha, escopo, ferramentas, regras
- `memoria/empresa.md` — fatos estáveis
- `memoria/estrategia.md` — fase (normalmente `onboarding`), meta, verba,
  modelo de conversão, foco, pendências
- `memoria/voz.md` — só se houver material real do cliente. Sem material,
  deixar status `pendente`
- `identidade/design-guide.md` — só se houver manual ou material visual. Sem
  isso, status `pendente`
- `memoria/historico.md` — primeira linha: `AAAA-MM-DD · marco · Cliente cadastrado no sistema`
  e uma linha por reunião cujo transcript foi lido

Seguir a regra de ouro: `empresa.md` e `estrategia.md` descrevem o agora, sem
narrativa. Datas e acontecimentos vão para o `historico.md`.

## Passo 6 — Carteira

Adicionar uma linha em `_agencia/carteira.md`:

`| <Nome> | clientes/<pasta> | <segmento> | <AAAA-MM> | onboarding | <responsável> | <próximo marco> |`

## Passo 7 — Fechar

Mostrar:

1. A pasta criada e o que foi preenchido
2. O que ficou `[preencher]`, em lista curta, para o usuário completar
3. Próximos passos sugeridos, conforme o que existe:
   - Com transcripts de vendas e kickoff → `/planejamento`
   - Com manual de marca a processar → pedir o arquivo e preencher o design-guide
   - Sem transcripts → "Quando tiver a gravação do kickoff, salva em `transcripts/`"
