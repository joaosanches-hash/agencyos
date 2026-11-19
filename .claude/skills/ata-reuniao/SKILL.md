---
name: ata-reuniao
description: >
  Gera a ata de uma reunião com cliente a partir do transcript (Anotações do
  Gemini, tl;dv, Fathom, texto colado), no formato padrão para postar no grupo
  do cliente, e oferece atualizar a memória com as decisões e pendências. Use
  quando o usuário pedir "ata", "ata da reunião", "resume a reunião", "/ata-reuniao"
  ou mandar um transcript de reunião.
---

# /ata-reuniao — ata para o grupo do cliente

## Passo 1 — Achar o transcript

- Arquivo mandado na conversa, ou o mais recente de `transcripts/` do cliente
  ativo que ainda não tem ata em `entregas/atas/`.
- Mais de um candidato, ou nenhum: perguntar qual.
- Transcript fora de `transcripts/`: copiar para lá como `AAAA-MM-DD_assunto.md`.
- Sem cliente ativo: descobrir pelo transcript e confirmar.

## Passo 2 — Ler e extrair

Ler o transcript inteiro. Extrair:
- Participantes, com papel (agência e cliente)
- Data, dia da semana, período
- Decisões e definições
- Próximos passos, com responsável
- O que ficou em aberto

## Passo 3 — Escrever

Tom de `_agencia/voz.md`. Resumido, direto, pronto para colar no WhatsApp.
Estrutura fixa:

```markdown
# 📋 Ata · <Assunto> | <Cliente> x <Agência>

**📅 Data:** <DD/MM/AAAA> (<dia da semana>), <manhã/tarde/noite>

**👥 Participantes:**
- **<Agência>:** <nome (papel)>, ...
- **<Cliente>:** <nome (papel)>, ...

## ✅ O que foi alinhado
- <decisões, em bullets curtos>

## 🎯 Onde está o foco agora
1. <prioridade>
2. <prioridade>
3. <prioridade>

## 📌 Próximos passos
**<Cliente>:**
- <tarefa> (<responsável>, <prazo se houver>)

**<Agência>:**
- <tarefa> (<responsável>, <prazo se houver>)

## ⚠️ O que precisa ser resolvido
- <pendências e pontos sem definição>

**Próximo contato:** <data ou "a combinar">
```

Um emoji do segmento do cliente no fim é opcional.

## Cuidados

- **A ata vai para o grupo do cliente.** Omitir dado interno ou sensível:
  faturamento, margem, ticket, condições comerciais, comentários internos da
  agência, recomendações de custo. Meta que o próprio cliente pôs na mesa pode
  ficar.
- **Não inventar** responsável, prazo ou decisão. Ambíguo → "a confirmar".
- **Nomes:** transcrição automática erra grafia. Conferir contra
  `memoria/empresa.md` e `_agencia/agencia.md`. Na dúvida, marcar para o
  usuário.
- Datas relativas ("sexta", "amanhã") viram data absoluta quando o transcript
  permitir.

## Passo 4 — Salvar e entregar

- Salvar em `entregas/atas/AAAA-MM-DD_assunto.md`
- Colar a ata na resposta, pronta para copiar
- Abaixo, em poucas linhas: o que foi omitido de propósito e o que vale conferir

## Passo 5 — Memória

Oferecer, mostrando as linhas:
- `historico.md`: `AAAA-MM-DD · reunião · <assunto>: <decisão principal> (transcripts/...)`
- `estrategia.md`: pendências novas em "Pendências abertas"; pendências
  concluídas na reunião saem de lá
- Fato novo ou correção do cliente → `empresa.md`; regra de tom → `voz.md`
