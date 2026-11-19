---
name: instalar
description: >
  Configura o AgencyOS para uma agência nova: entrevista curta sobre a agência
  (posicionamento, serviços, método, equipe, rituais, ferramentas, tom e visual
  das entregas) e preenche a pasta _agencia/. Roda uma vez, logo depois de
  copiar o sistema. Use quando o usuário disser "instalar", "/instalar",
  "configurar o sistema", "primeiro setup" ou abrir o sistema pela primeira vez
  com _agencia/ ainda em branco.
---

# /instalar — configurar a agência

Deixa o sistema com a cara da agência. Depois disso, cada cliente entra pelo
`/novo-cliente`.

## Antes de começar

Ler `_agencia/agencia.md`. Se já estiver preenchido (sem `[preencher]` nas
seções principais), avisar:

> "A agência já está configurada. Quer revisar alguma parte específica ou
> refazer do zero?"

E seguir só com o que o usuário pedir.

## Passo 0 — Conferir o ambiente (30 segundos)

Antes da entrevista, rodar estas checagens (Bash/PowerShell) e dizer o resultado em
uma linha cada, sem travar nada:

- `node --version` (necessário para renderizar carrosséis e exportar .docx)
- `python --version` e, se faltar, `pip install pandas pypdf` (planilhas e PDFs de orçamento)
- `git --version` (opcional, para o `/salvar`)

Falta algo: dizer onde baixar (nodejs.org, python.org, git-scm.com) e **seguir mesmo
assim**; só as skills que dependem daquilo ficam limitadas.

Confirmar também que a pasta aberta é a **raiz** do AgencyOS (tem `.claude/skills/`
e `_agencia/`). Se foi aberta a pasta de um cliente, avisar para reabrir na raiz.

### Pasta dentro de pasta: tornar o AgencyOS a pasta principal

Caso comum: a pessoa abriu uma pasta vazia (ex.: `teste-agencia`) e o `git clone`
criou o AgencyOS **dentro** dela (`teste-agencia/agencyos`). Detectar assim: a
pasta aberta **não** tem `_agencia/` e `.claude/skills/`, mas uma subpasta tem.

Perguntar uma vez, em uma mensagem:

> "O AgencyOS ficou dentro de `<pasta-aberta>/<subpasta>`. Quer que eu torne
> `<subpasta>` a pasta principal? Eu movo ela para fora, apago `<pasta-aberta>`
> (só se sobrar vazia) e você reabre o VS Code na pasta nova. Que nome quer
> para a pasta? (padrão: `agencyos`)"

Com o "sim":

1. Mover a subpasta para o nível acima da pasta aberta, com o nome escolhido
   (se já existir uma pasta com esse nome ali, parar e perguntar outro)
2. Apagar a pasta aberta **somente se estiver vazia** (`rmdir`, sem `-r` nem
   `-Force`). Se sobrar qualquer arquivo, não apagar e avisar
3. Dizer o caminho novo e orientar: *File → Open Folder* nessa pasta, abrir o
   Claude Code e rodar `/instalar` de novo. A entrevista ainda não começou, então
   nada se perde
4. Se o Windows recusar o movimento por a pasta estar em uso, não insistir:
   passar os passos manuais (fechar o VS Code, mover a pasta pelo Explorer,
   abrir a pasta nova)

Com o "não": seguir normalmente, mas avisar que o VS Code deve abrir a pasta
interna (a que tem `_agencia/`) para o sistema funcionar direito. Pasta já
correta (clone feito dentro da própria pasta vazia): não perguntar nada.

## Como conduzir

- **Blocos, não interrogatório.** Cinco blocos de perguntas, um por mensagem.
  Cada bloco pergunta tudo de uma vez; o usuário responde livre, do jeito que
  quiser.
- **Aceitar material pronto.** Se o usuário colar um site, uma apresentação,
  um PDF ou um link, extrair as respostas dali e perguntar só o que faltou.
- **"Não sei" é resposta válida.** Marcar `[preencher]` e seguir. Nada trava.
- **Não inventar.** Método ou equipe que o usuário não deu não entram.

## Os cinco blocos

**1. A agência**
- Nome da agência. Site e Instagram são **opcionais**: oferecer uma vez, em
  uma linha ("se quiser colocar site ou Instagram, ajuda a calibrar; pode pular"),
  nunca pedir de novo. Se não vierem, **não** deixar `[preencher]` nem listar como
  pendência: retirar o campo
- O que a agência faz, para quem e qual o foco. Resposta livre, não precisa
  caber em uma frase
- Métodos, metodologias e pilares, e os segmentos que atende. Se o usuário
  passar o site ou uma apresentação, **pesquisar ali** antes de perguntar

**2. Equipe**
- Quem está na equipe e qual o papel de cada um (estrategista, tráfego, CS,
  head...). Serve para o sistema saber quem faz o quê quando uma demanda
  surgir
- Alguém revisa as entregas antes de irem para o cliente? Quem?
- Não perguntar o que costuma entrar no contrato: o escopo é registrado por
  cliente, no `/novo-cliente`

**3. Rotina com o cliente**
- Como é o onboarding: quanto tempo até a campanha ir ao ar e quais os marcos
  (se não souber, mostrar o padrão D0–D15 de `_agencia/agencia.md` e perguntar
  se serve)
- Frequência de relatório, planejamento e reuniões
- Canal de comunicação com o cliente (grupo de WhatsApp, e-mail, Slack)

**4. Ferramentas**
- CRM que os clientes usam, construtor de LP, gestão de tarefas
- Onde pesquisa mercado (Gemini/ChatGPT Deep Research, Perplexity...)
- Como grava e transcreve reuniões

**5. Voz e visual das entregas**
- Como a agência escreve para os clientes: tom, tratamento, o que nunca usa.
  Pedir 2 ou 3 textos reais já enviados (uma ata, uma mensagem de grupo): é o
  que mais calibra
- Visual das entregas em HTML: tema claro ou escuro, cor da marca, fontes,
  o que vai no rodapé. Se tiver logo, pedir para salvar em `_agencia/`

## Salvar

Ao final dos cinco blocos, montar os arquivos e **mostrar um resumo** do que
vai ser gravado antes de salvar:

- `_agencia/agencia.md` — blocos 1 a 4
- `_agencia/voz.md` — bloco 5 (tom); textos reais em "Exemplos reais"
- `_agencia/identidade.md` — bloco 5 (visual)
- `CLAUDE.md`, seção "Regras desta agência" — regras gerais que surgiram na
  conversa e não cabem nos outros arquivos

Editar os arquivos existentes mantendo a estrutura. Onde não houve resposta,
deixar o `[preencher]` original.

Se o usuário tiver cor de marca mas não souber fontes, sugerir um par do Google
Fonts coerente com o clima descrito e marcar como sugestão.

## Git (opcional)

Perguntar:

> "Quer versionar o sistema com Git? Dá para ter histórico de tudo e salvar no
> GitHub com `/salvar`."

Se sim e a pasta ainda não for um repositório: `git init`, primeiro commit
"Instalação do AgencyOS". O remoto do GitHub é configurado depois, no primeiro
`/salvar`.

## Fechar

Mostrar em poucas linhas:

1. O que ficou configurado e o que ficou `[preencher]`
2. Próximo passo: `/novo-cliente` para cadastrar o primeiro cliente
3. Onde ajustar depois: os arquivos de `_agencia/` podem ser editados à mão a
   qualquer momento
