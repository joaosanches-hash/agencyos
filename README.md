# AgencyOS

O sistema operacional da sua agência dentro do Claude Code.

Uma pasta para a agência inteira. O Claude passa a conhecer a sua agência
(método, equipe, tom, visual) e cada cliente (negócio, metas, tom da marca,
histórico). Ele produz as entregas do dia a dia nesse contexto: planejamento,
ata, relatório de ads, auditoria de CRM, landing page, criativos e roteiros.

Quanto mais você usa, melhor fica. Toda correção que você faz vira regra, e a
memória de cada cliente se mantém atualizada.

---

## O que você precisa

- **Claude Code**: extensão do VS Code, aba *Code* do app Claude Desktop, ou terminal
- **Node.js** (nodejs.org, versão LTS): para a MCP do Chrome e a exportação em .docx
- **Python** (python.org) com `pip install pandas pypdf`: para análise de
  planilhas e leitura dos orçamentos em PDF na auditoria de CRM
- **Git** (opcional): para versionar e salvar no GitHub

---

## Começar

1. **Baixe o sistema.** Pelo terminal, na pasta onde você guarda seus projetos:
   `git clone https://github.com/joaosanches-hash/agencyos.git minha-agencia-os` (troque pelo nome da
   sua agência). Sem Git: baixe o ZIP do repositório e extraia na pasta. Depois
   de clonar, desligue a ligação com o repositório original se for guardar
   dados de clientes: `git remote remove origin`.
   Também dá para abrir uma pasta vazia e pedir ao Claude para clonar. Nesse
   caso, **recarregue a janela do VS Code** (`Ctrl+Shift+P` → *Developer:
   Reload Window*) ou feche e abra de novo depois do clone: as skills só
   carregam quando a sessão começa dentro da pasta do projeto.
2. **Abra a pasta no Claude Code.** No VS Code: *File → Open Folder*. No app
   Claude Desktop: aba *Code* → escolha a pasta.
3. **Rode `/instalar`.** Uma entrevista de 5 blocos sobre a sua agência:
   posicionamento, serviços, equipe, rotina, ferramentas, tom e visual. Leva
   de 10 a 15 minutos. Pode colar o seu site ou uma apresentação para ir mais
   rápido.
4. **Rode `/novo-cliente`** para cada cliente. Se tiver as gravações da
   reunião de vendas e do kickoff, mande junto: o Claude preenche a memória
   do cliente sozinho e pergunta só o que faltou.

Pronto. A partir daqui, é trabalhar.

> **Sempre abra a pasta raiz** (a da agência), nunca a pasta de um cliente
> sozinha. É na raiz que ficam as skills e as regras do sistema.

---

## O dia a dia

```
/abrir acme
```
Carrega a conta e mostra onde ela está: fase, foco, pendências, o que mudou.
Daí em diante, tudo que você pedir é para esse cliente.

```
faz a ata da reunião de hoje          → /ata-reuniao
roda o relatório da semana            → /relatorio-ads
preciso de 3 criativos pro produto X  → /copy-estaticos-meta
roteiro de reels pra campanha de Y    → /roteiros-video-meta
monta o planejamento de abril         → /planejamento-mensal
faz uma vistoria no CRM               → /auditoria-crm
```

Não precisa decorar os comandos: pedir em linguagem normal funciona. O Claude
reconhece a skill certa.

**Terminou uma reunião?** Salve a transcrição em
`clientes/<cliente>/transcripts/` e rode `/ata-reuniao`. Ele escreve a ata e
propõe atualizar a memória com o que foi decidido.

**A memória ficou para trás?** `/atualizar` compara o que está na pasta do
cliente com a memória e propõe as correções.

---

## Como está organizado

```
_agencia/        a sua agência: método, equipe, voz, visual, aprendizados, carteira
clientes/
  _modelo/       molde de cliente novo (não mexer)
  <cliente>/
    CLAUDE.md    ficha da conta e regras dela
    memoria/     empresa · voz · estrategia · historico
    identidade/  design-guide da marca, logo, referências
    entrada/     pasta de distribuição: solte os documentos do cliente novo aqui
    transcripts/ reuniões
    dados/       exports e planilhas
    marketing/   landing pages, criativos, roteiros
    entregas/    planejamentos, relatórios, atas, auditorias
.claude/skills/  as skills
ferramentas/     como conectar Chrome, Drive e outras integrações
CLAUDE.md        as regras do sistema
```

**Por que a memória do cliente tem 4 arquivos:**

| Arquivo | Guarda | Muda |
|---|---|---|
| `empresa.md` | O que é verdade sobre o negócio: produtos, público, praça, diferenciais | Raramente |
| `voz.md` | Como a marca fala | Quando o cliente corrige |
| `estrategia.md` | O momento: fase, meta, foco, pendências abertas | Toda semana |
| `historico.md` | Tudo que aconteceu, com data | Só cresce |

Separar o **agora** do **passado** é o que impede a memória de virar um
diário de 300 linhas que ninguém lê.

---

## Skills

**Núcleo**

| Skill | O que faz |
|---|---|
| `/instalar` | Configura a agência (uma vez) |
| `/novo-cliente` | Cadastra um cliente e preenche a memória |
| `/abrir` | Abre a sessão de um cliente com um resumo da conta |
| `/atualizar` | Reconcilia a memória com o que existe na pasta |
| `/salvar` | Commit e push no GitHub |
| `/nova-skill` | Transforma uma tarefa repetitiva em skill nova |

**Estratégia e gestão de conta**

| Skill | O que faz |
|---|---|
| `/planejamento` | Planejamento estratégico de onboarding (HTML, 14 seções) |
| `/planejamento-mensal` | Planejamento do mês, formato completo ou enxuto |
| `/ata-reuniao` | Ata pronta para o grupo do cliente |
| `/auditoria-crm` | Vistoria do comercial no CRM. 1ª vez: cria o perfil do cliente. Depois: roda só pelo comando e compara com a anterior |
| `/seo` | SEO local, Perfil da Empresa no Google e GEO (respostas de IA) |
| `/relatorio-ads` | Relatório de Google Ads e Meta Ads |
| `/analisar-dados` | Resumo executivo de qualquer planilha |

**Criação**

| Skill | O que faz |
|---|---|
| `/lp-alta-conversao` | Landing page: blueprint para o webdesigner + protótipo HTML |
| `/copy-lp` | Copy de LP a partir de uma página de referência |
| `/copy-estaticos-meta` | Copy de criativo estático + imagem para o designer |
| `/roteiros-video-meta` | Roteiros de vídeo curto para anúncio |
| `/anuncio-google` | Campanha de Google Ads Search em painel HTML de copiar e colar |
| `/carrossel` | Carrossel e post visual, orgânico ou anúncio, com legenda |
| `/publicar-tema` | Artigo + carrossel + legendas a partir de um tema |
| `/email-cliente` | E-mail ou mensagem para cliente |
| `/responder-avaliacoes` | Respostas para avaliações do Google |

---

## Para o sistema ficar melhor com o tempo

- **Corrija o Claude em voz alta.** "Não usa essa palavra", "o planejamento
  tem no máximo 5 ações". Ele pergunta se deve salvar e onde: só para esse
  cliente ou para todos.
- **Alimente a base de roteiros.** Vídeo que performou bem vai para
  `.claude/skills/roteiros-video-meta/references/roteiros-validados.md`. É o
  que mais melhora os roteiros novos.
- **Cole exemplos reais em `_agencia/voz.md`.** Duas ou três mensagens que
  você mandou para clientes calibram mais que qualquer descrição.
- **Transforme o que você repete em skill** com `/nova-skill`.

---

## Privacidade

A pasta guarda dados dos seus clientes. Se for para o GitHub, **o repositório
tem que ser privado**. O `/salvar` lembra disso.

Para repassar o sistema a outra agência, entregue uma cópia **limpa**:
só a estrutura, sem `clientes/` preenchidos e sem os arquivos de `_agencia/`
com os seus dados. Guarde uma cópia intocada desta pasta para isso.
