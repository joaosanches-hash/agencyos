---
name: abrir
description: >
  Abre a sessão de trabalho de um cliente: define o cliente ativo, carrega a
  memória dele e devolve um resumo curto de onde a conta está (fase, foco,
  pendências, última movimentação). Sem nome de cliente, mostra a carteira e
  pergunta qual abrir. Use quando o usuário disser "abrir", "/abrir",
  "/abrir <cliente>", "vamos trabalhar na <cliente>", "bom dia" ou "começar o
  dia".
---

# /abrir — abrir a sessão de um cliente

## Sem cliente no pedido

Ler `_agencia/carteira.md` e mostrar os clientes ativos (status diferente de
`encerrado`) numa lista curta: nome, status, próximo marco. Perguntar qual
abrir.

Se a carteira estiver vazia: "Ainda não tem cliente cadastrado. Quer rodar o
`/novo-cliente`?"

Se `_agencia/agencia.md` ainda estiver com `[preencher]` nas seções
principais: sugerir o `/instalar` antes.

## Com cliente

1. **Achar a pasta.** Casar o nome pedido com as pastas de `clientes/`
   (aceitar nome parcial, sem acento, apelido que esteja na carteira). Se der
   mais de uma opção, perguntar. Se não existir, oferecer o `/novo-cliente`.

2. **Carregar em silêncio:**
   - `clientes/<cliente>/CLAUDE.md`
   - `memoria/empresa.md`, `memoria/estrategia.md`, `memoria/voz.md`
   - As 5 primeiras linhas de `memoria/historico.md`
   - A lista de arquivos de `transcripts/`, `dados/` e `entregas/` modificados
     nos últimos 30 dias (só os nomes)

3. **Resumir em até 10 linhas**, neste formato:

```
**<Cliente>** · <fase> · desde <AAAA-MM>

**Foco agora:** <1-2 itens de estrategia.md>
**Meta:** <curto prazo, com prazo>
**Última movimentação:** <linha mais recente do histórico>

**Pendências abertas**
- [Agência] ...
- [Cliente] ...

**Atenção:** <só se houver: memória desatualizada, voz/identidade pendente,
transcript novo ainda não processado, pendência vencida>
```

4. **Terminar com uma pergunta curta:** "Por onde começamos?"

## O que observar para o "Atenção"

- Transcript em `transcripts/` mais novo que a última linha do histórico →
  "Tem reunião de <data> que ainda não entrou na memória. Quer que eu processe?"
- `estrategia.md` com pendência marcada como concluída ou com história
  narrada dentro → sugerir `/atualizar`
- `voz.md` ou `design-guide.md` pendentes, se a sessão provavelmente vai
  produzir peça da marca
- Arquivo em `dados/` novo, sem relatório correspondente em `entregas/`

Não inventar alerta. Sem nada disso, omitir a linha "Atenção".

## A partir daqui

O cliente aberto passa a ser o **cliente ativo** da sessão (regra nº 1 do
`CLAUDE.md`). Todas as skills usam a pasta dele até o usuário abrir outro.
