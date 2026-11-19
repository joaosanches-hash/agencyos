---
name: nova-skill
description: >
  Transforma tarefas repetitivas da agência em skills novas do sistema. Dois
  modos: MAPEAR (entrevista curta sobre a rotina da semana e propõe as skills
  que valem a pena) ou CRIAR (o usuário já sabe qual skill quer). Use quando o
  usuário disser "nova skill", "criar skill", "/nova-skill", "mapear rotinas",
  "o que dá para automatizar", ou aceitar a sugestão de transformar uma tarefa
  em skill.
---

# /nova-skill — transformar rotina em skill

## Qual modo

- O usuário já disse o que quer ("cria uma skill de proposta comercial") ou
  veio da sugestão "isso pode virar uma skill" → **CRIAR**.
- Pediu ideias, "mapear", "o que dá para automatizar" → **MAPEAR**, depois
  CRIAR as aprovadas.

## MAPEAR

Ler `_agencia/agencia.md` (serviços e rituais) e a lista de skills que já
existem em `.claude/skills/`. Perguntar em um bloco:

- O que você faz toda semana para cada cliente?
- O que faz todo mês?
- Qual tarefa você mais adia ou mais demora?
- O que a equipe pede para você revisar ou refazer com frequência?

Com as respostas, propor **até 5 skills**, cada uma em 3 linhas: nome, o que
faz, quanto tempo economiza por semana (estimativa honesta). Descartar o que
uma skill existente já cobre (dizer qual). Perguntar quais criar.

## CRIAR

### 1. Entender a tarefa

Perguntar só o que faltar:

- **Entrada:** o que a skill recebe (transcript, planilha, link, briefing)?
- **Saída:** o que entrega, em que formato, salvo onde?
- **Exemplo bom:** existe uma versão já feita à mão que ficou boa? É a
  referência mais valiosa. Pedir o arquivo.
- **Regras:** o que nunca pode acontecer? O que o cliente ou o revisor sempre
  cobra?
- **Gatilho:** como o usuário vai pedir isso no dia a dia?

### 2. Decidir o alcance

- **Serve para qualquer cliente** (quase sempre) → `.claude/skills/<nome>/`.
  A skill trabalha no cliente ativo e lê a memória dele.
- **Só faz sentido para um cliente** → mesmo lugar, mas o nome e a descrição
  deixam isso claro. Preferir uma skill genérica com um parâmetro a uma skill
  por cliente.

### 3. Escrever

Criar `.claude/skills/<nome>/SKILL.md` seguindo o padrão das skills do sistema:

```markdown
---
name: <nome-em-kebab-case>
description: >
  <O que faz, em 1-2 frases.> <Formato da entrega.> Use quando o usuário
  disser "<gatilho 1>", "<gatilho 2>", "/<nome>" ou <situação>.
---

# /<nome> — <título curto>

## Contexto
<o que ler do cliente ativo e de _agencia/ antes de começar>

## Passos
<numerados; com checkpoint de aprovação antes de produzir peça grande>

## Formato da entrega
<estrutura exata; onde salvar; convenção de nome>

## Regras
<o que nunca fazer; nunca inventar dado>
```

Boas práticas:
- A **description** decide quando a skill é acionada: incluir as frases que o
  usuário realmente fala
- Salvar na pasta certa do cliente, com a convenção de nomes do `CLAUDE.md`
- Material de apoio (modelo, exemplo, checklist longo) vai em
  `.claude/skills/<nome>/references/` e o SKILL.md aponta para ele
- Exemplo real anexado vira referência **sem dados do cliente**: trocar nomes
  e números por fictícios antes de salvar dentro da skill
- SKILL.md curto e direto; detalhe vai para `references/`

### 4. Registrar

Adicionar a skill na lista "Skills do sistema" do `CLAUDE.md` da raiz, na
categoria certa, com uma linha de descrição. Mostrar a linha antes de salvar.

### 5. Testar

Sugerir rodar a skill uma vez num cliente real e ajustar com o que sair
errado. Correção que surgir nesse teste vai direto para o SKILL.md.
