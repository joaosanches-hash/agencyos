---
name: novo-cliente
description: >
  Cadastra um cliente novo na agência: copia o molde clientes/_modelo/ para
  clientes/<cliente>/, preenche a memória (empresa, estratégia, voz, ficha da
  conta) a partir dos documentos que o usuário colocar na pasta de entrada
  (transcripts de vendas e kickoff, handoff, resumo, site, Instagram) e de uma
  entrevista curta, e registra na carteira. Use
  quando o usuário disser "novo cliente", "cadastrar cliente", "entrou um
  cliente", "/novo-cliente" ou mandar material de um cliente que ainda não
  tem pasta.
---

# /novo-cliente — cadastrar uma conta

## Passo 1 — Nome e pasta

Perguntar o nome do cliente, se não veio no pedido. Criar o nome da pasta em
minúsculas, sem acento, com hífen: "Acme Pisos & Cia" → `acme-pisos`.

Se `clientes/<pasta>/` já existir, parar e avisar. Não sobrescrever.

Copiar `clientes/_modelo/` inteiro para `clientes/<pasta>/`, mantendo todas as
subpastas (inclusive as vazias). A pasta `entrada/` vem junto: é a **pasta de
distribuição**.

## Passo 2 — Pedir os documentos e a pasta de entrada

Com a pasta criada, perguntar, em uma mensagem só:

> "Criei `clientes/<pasta>/`. Você tem documentação sobre esse cliente? Por
> exemplo:
> - gravação ou resumo da **reunião de vendas**
> - gravação ou resumo do **kickoff**
> - **handoff** (a passagem do comercial para o time)
> - um **resumo completo** ou briefing do cliente
> - contrato ou proposta, manual de marca, logo, fotos, criativos que já rodaram
> - planilhas e exports de anúncio ou de CRM
> - **site e Instagram** do cliente (cole os links aqui)
>
> Coloque os **arquivos** na pasta `clientes/<pasta>/entrada/`. Se já tiver
> alguma informação digitada, pode escrever aqui na conversa. Quando terminar,
> me avise com 'pode continuar'. Se não tiver nada, diga 'não tenho' e eu
> sigo com perguntas."

Esperar a resposta. Não ler nada nem seguir antes do "pode continuar" ou do
"não tenho". Se o usuário disser que o material vem depois, seguir só com o
que existir e avisar no fim que a pasta `entrada/` pode ser usada depois,
chamando o `/atualizar`.

## Passo 3 — Ler e distribuir

1. Listar tudo o que está em `entrada/` e ler cada arquivo (e o que o usuário
   digitou na conversa).
2. **Distribuir cada arquivo para a pasta certa**, movendo-o de `entrada/` e
   renomeando no padrão `AAAA-MM-DD_descricao.ext` (data do documento; sem
   data conhecida, a de hoje):

| O que é | Vai para |
|---|---|
| Reunião de vendas, kickoff, handoff, resumo completo do cliente | `transcripts/` |
| Export de anúncio ou CRM, planilha, print de dado, contrato, proposta | `dados/` |
| Logo | `identidade/logo/` |
| Manual de marca, guia visual, paleta | `identidade/` |
| Anúncio, LP ou vídeo de outra marca para inspirar | `identidade/referencias/<estaticos\|lp\|videos>/` |
| Fotos e criativos do próprio cliente | `marketing/criativos/` |

   Arquivo que não se encaixa em nenhuma linha: **deixar em `entrada/`** e
   perguntar ao usuário onde guardar. Nunca apagar nem sobrescrever nada.
3. **Site e Instagram:** se os links vieram, ler (WebFetch quando
   disponível). Se não vieram, perguntar uma vez: "Tem site ou Instagram do
   cliente? Se tiver, cole aqui; se não, sigo sem." Sem resposta, seguir.
4. Extrair o que for fato. Transcript vence resumo quando houver divergência.
5. Mostrar uma lista curta do que foi para onde ("3 arquivos para
   `transcripts/`, 1 para `dados/`, 1 ficou em `entrada/`") e seguir.

Contrato, proposta e números do cliente são dado sensível: vão para `dados/` e
**nunca** entram em entrega que o cliente repassa a terceiros.

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
