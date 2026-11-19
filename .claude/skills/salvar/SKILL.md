---
name: salvar
description: >
  Salva o trabalho no GitHub: commit com mensagem descritiva e push. Na
  primeira vez, configura o repositório remoto. Use quando o usuário disser
  "salvar", "/salvar", "commit", "push", "sobe pro GitHub" ou "faz backup".
---

# /salvar — commit e push

## Passo 1 — Repositório

- Se a pasta não for repositório Git: perguntar se quer criar. Se sim,
  `git init` e seguir.
- Conferir que existe `.gitignore` na raiz. Se não existir, avisar antes de
  qualquer commit.

## Passo 2 — O que mudou

Rodar `git status` e `git diff --stat`. Resumir para o usuário em linguagem de
negócio, agrupando por cliente:

> "Mudou: **Acme** — ata da reunião de 10/03 e memória atualizada. **Agência** —
> um aprendizado novo."

**Antes de adicionar, conferir:**
- Arquivo com senha, token, `.env` ou chave de API → não adicionar, avisar
- Arquivo muito grande (vídeo, zip, PSD acima de ~50 MB) → perguntar se entra
- Arquivos fora de `clientes/`, `_agencia/`, `.claude/`, `ferramentas/` e da
  raiz → perguntar

## Passo 3 — Commit

Mensagem em português, no imperativo, dizendo o quê e de qual cliente:

```
Acme: ata da reunião de alinhamento (10/03) e atualização da memória
```

Com vários clientes, uma linha de resumo e o detalhe por cliente no corpo.
Adicionar os arquivos pelo nome (evitar `git add -A` quando houver algo
suspeito no passo 2).

## Passo 4 — Push

**Trava de privacidade (antes de qualquer push).** Descobrir a visibilidade do
remoto (`gh repo view --json isPrivate,url`; sem o `gh`, perguntar). Se o
repositório for **público** e existir alguma pasta em `clientes/` além de
`_modelo/`, ou algum dado real em `_agencia/`: **parar**, dizer que o push
publicaria dados de cliente e orientar a trocar o remoto para um repositório
privado próprio (`git remote set-url origin <url-privada>`). Só seguir se o
usuário confirmar, por escrito, que aquilo pode ser público.

- **Remoto configurado:** `git push`.
- **Sem remoto:** explicar em duas linhas e perguntar a URL:
  > "Para salvar no GitHub, crie um repositório **privado** vazio em
  > github.com/new e me passe o link."

  Com a URL: `git remote add origin <url>`, `git branch -M main`,
  `git push -u origin main`.
  Se o `gh` (GitHub CLI) estiver instalado e autenticado, oferecer criar o
  repositório privado direto: `gh repo create <nome> --private --source . --push`.

**O repositório com dados de clientes é sempre privado.** Exceção: o
repositório-molde distribuído ao time, que fica público e **sem nenhum cliente
real**. Quem clona o molde e cadastra clientes deve trocar o remoto para um
repositório privado próprio antes do primeiro `/salvar`.

## Se der erro

- Rejeitado por histórico divergente → `git pull --rebase` e tentar de novo.
  Conflito → mostrar os arquivos e perguntar, sem resolver sozinho.
- Autenticação → orientar `gh auth login` ou configurar o Git Credential Manager.

## Fechar

Uma linha: o que foi salvo e o link do repositório.
