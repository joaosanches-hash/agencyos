---
name: atualizar
description: >
  Reconcilia a memória de um cliente com o que existe de fato na pasta dele:
  processa transcripts novos, move pendências concluídas para o histórico,
  tira narrativa de empresa.md e estrategia.md, confere design-guide e
  carteira. Mostra as mudanças antes de salvar. Use quando o usuário disser
  "atualizar", "/atualizar", "atualiza a memória", "processa a reunião",
  "varre a pasta" ou quando o /abrir apontar memória desatualizada.
---

# /atualizar — reconciliar a memória de um cliente

Trabalha no **cliente ativo**. Sem cliente ativo, perguntar qual. Com
"atualizar tudo", rodar cliente por cliente da carteira, um de cada vez, com
aprovação em cada um.

## Passo 1 — Levantar

Ler a memória inteira do cliente (`CLAUDE.md`, os quatro arquivos de
`memoria/`, `identidade/design-guide.md`) e listar os arquivos de todas as
pastas com data de modificação.

## Passo 2 — Comparar

Procurar estas diferenças:

| Sinal | O que fazer |
|---|---|
| Transcript sem linha correspondente no `historico.md` | Ler e extrair: decisões, pendências novas, fatos novos, correções |
| Entrega em `entregas/` ou `marketing/` sem registro no histórico | Registrar como `entrega` |
| Pendência em `estrategia.md` que um transcript ou entrega mostra como feita | Tirar da lista e registrar no histórico |
| Narrativa datada dentro de `empresa.md` ou `estrategia.md` | Mover para o histórico, deixar só o estado atual |
| Fato em `empresa.md` contradito por fonte mais nova | Corrigir e registrar como `correção` |
| Material de marca em `identidade/` com `design-guide.md` pendente | Sugerir processar |
| Fase ou status do cliente mudou | Atualizar `estrategia.md` e `_agencia/carteira.md` |
| Correção ou regra do cliente num transcript que vale como regra | Propor em `voz.md` ou no `CLAUDE.md` da conta |

Fonte mais recente vence. Transcript vence resumo.

## Passo 3 — Mostrar antes de salvar

Apresentar as mudanças agrupadas por arquivo, com o texto exato:

```
memoria/estrategia.md
  − [ ] [Agência] Publicar LP              → concluída, vai para o histórico
  + [ ] [Cliente] Enviar fotos da obra X    (reunião de 2026-03-10)

memoria/historico.md
  + 2026-03-10 · reunião · Alinhamento de criativos: ... (transcripts/2026-03-10_criativos.md)
```

Perguntar: "Salvo tudo, só parte, ou quer ajustar algo?"

## Passo 4 — Salvar

Aplicar só o que foi aprovado. Editar linha a linha, sem reescrever os
arquivos inteiros. Linhas novas do histórico entram no topo.

## Passo 5 — Fechar

Uma linha com o que foi atualizado. Se algo ficou para o usuário decidir
(fato divergente sem fonte clara, por exemplo), listar.

Se a pasta tiver Git, sugerir `/salvar`.
