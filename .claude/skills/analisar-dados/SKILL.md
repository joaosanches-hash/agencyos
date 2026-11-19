---
name: analisar-dados
description: >
  Lê qualquer arquivo de dados (CSV, XLSX, JSON, TXT, PDF com tabela, print) e
  devolve um resumo executivo: o que os números dizem, tendências, pontos fora
  da curva e o que fazer com isso. Use quando o usuário disser "analisa esse
  arquivo", "o que esses dados mostram", "resume essa planilha", "tem algo
  estranho aqui?", "/analisar-dados" ou mandar uma planilha sem pedido
  específico. Para exports de Google/Meta Ads, preferir /relatorio-ads; para
  CRM, /auditoria-crm.
---

# /analisar-dados — resumo executivo de um arquivo

## Passo 1 — Entender a pergunta

Se o usuário disse o que quer saber, essa é a pergunta. Se não disse,
perguntar em uma linha: *"Quer um panorama geral ou tem uma pergunta
específica (ex.: qual produto vende mais, por que caiu em março)?"* Sem
resposta, seguir com panorama geral.

Se o arquivo é export de ads ou de CRM, sugerir a skill específica.

## Passo 2 — Ler e conferir

- Abrir o arquivo. CSV/XLSX grande: usar Python (pandas) em vez de ler linha
  a linha.
- **Descrever a base antes de analisar:** quantas linhas, quais colunas, qual
  período, o que cada linha representa.
- **Checar qualidade:** linhas duplicadas, datas em formato misto, separador
  decimal (vírgula ou ponto), campos vazios, totais embutidos no meio da
  tabela. Problema que afeta o resultado → avisar e dizer como foi tratado.

Arquivo de cliente vai para `dados/` do cliente ativo, se ainda não estiver.

## Passo 3 — Analisar

Conforme o tipo de dado, o que costuma importar:
- **Vendas / faturamento:** evolução no tempo, sazonalidade, concentração
  (quanto os 20% maiores representam), ticket médio e sua variação
- **Leads / funil:** volume por origem, conversão entre etapas, tempo entre etapas
- **Produtos / catálogo:** curva ABC, o que cresce, o que cai
- **Pesquisa / formulário:** distribuição das respostas, cruzamentos
  relevantes, citações que se repetem

Comparar sempre com alguma referência: período anterior, média, meta. Número
sozinho não diz nada.

## Passo 4 — Entregar

Na resposta, neste formato:

```
**A base:** <1 linha: o que é, período, tamanho>

**O que os dados dizem**
1. <achado principal, com o número>
2. <achado>
3. <achado>

**Fora da curva:** <anomalias, se houver>

**O que fazer com isso**
- <recomendação ligada a um achado>

**Limites:** <o que os dados não permitem concluir>
```

Achado é afirmação com número: *"72% do faturamento vem de 3 produtos"*, não
*"alguns produtos se destacam"*.

Se o usuário quiser o resumo em arquivo, salvar em
`entregas/outros/AAAA-MM-DD_analise-<tema>.md`. Gráfico só se pedido ou se
for indispensável para entender.

## Regras

- Correlação não é causa: dizer "coincide com", não "causou", sem evidência.
- Não extrapolar para fora do período dos dados.
- Não arredondar de um jeito que mude a conclusão.
