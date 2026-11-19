# Ferramentas e integrações

O que conectar ao Claude Code para o sistema render mais, e para que serve
cada coisa. Nada aqui é obrigatório para começar.

---

## Chrome DevTools (MCP) — já configurado

Deixa o Claude abrir e usar um navegador Chrome: navegar no CRM para a
`/auditoria-crm`, ler landing pages de referência, conferir uma LP publicada,
tirar prints.

**Já vem configurado** no arquivo `.mcp.json` da raiz. Na primeira sessão, o
Claude Code pergunta se você aprova o servidor: aprove.

**Requisito:** Node.js instalado (teste com `node -v` no terminal).

**Se não funcionar no Windows**, troque o conteúdo de `.mcp.json` por:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "cmd",
      "args": ["/c", "npx", "-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```

**Login em sistemas:** o Chrome que a MCP abre tem perfil próprio. Na
primeira vez, faça o login no CRM (ou em qualquer sistema) nessa janela. O
login fica salvo. O Claude nunca deve digitar senha: se ele pedir, recuse e
faça você mesmo o login.

**Instalar em todas as pastas** (não só nesta), peça ao Claude:

```
Instala a MCP do Chrome DevTools no escopo de usuário:
claude mcp add chrome-devtools --scope user -- npx -y chrome-devtools-mcp@latest
```

Depois, abra uma sessão nova.

---

## Google Drive — conector do claude.ai

Para o Claude achar fotos dos clientes no Drive (criativos, LP) e ler
documentos compartilhados.

Ative em **claude.ai → Configurações → Conectores → Google Drive**. Com a
mesma conta logada no Claude Code, o conector fica disponível nas sessões.

Coloque o link da pasta de fotos de cada cliente em
`clientes/<cliente>/memoria/empresa.md`, seção "Assets".

---

## GitHub CLI (opcional)

Deixa o `/salvar` criar o repositório privado sem você sair do Claude.

Instale em cli.github.com e rode uma vez no terminal:

```
gh auth login
```

---

## Outros conectores úteis

No mesmo lugar do Google Drive (claude.ai → Conectores):

- **Google Calendar** — o Claude vê a agenda da semana ao abrir o dia
- **ClickUp / Notion / Asana** — registrar as ações do planejamento como tarefas

Conector novo que dá para usar numa skill? Ajuste a skill ou crie uma nova com
`/nova-skill`.
