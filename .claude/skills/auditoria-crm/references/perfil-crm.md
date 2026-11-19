# Modelo do perfil do CRM (`clientes/<cliente>/memoria/crm.md`)

Gravado pela primeira auditoria (linha de base). As auditorias seguintes leem este arquivo
em vez de refazer o briefing. Editar quando o CRM do cliente mudar.

```markdown
# CRM — <cliente>

## Acesso
- CRM: [Kommo | RD Station | HubSpot | Pipedrive | outro]
- Endereço: [subdomínio/URL]
- Login: feito pelo usuário na janela do Chrome da MCP (nunca guardar senha aqui)
- Conta restrita (assinatura em atraso, só leitura)? [sim/não]
- Pode escrever no CRM (tags e valor)? [sim/não]. Nunca mover etapa, enviar mensagem ou criar tarefa

## Funil
- Funil auditado: [nome]
- Etapas na ordem: [lista literal, como aparecem no CRM; atenção a nomes repetidos]
- Etapa de orçamento enviado: [nome] · Etapa de venda ganha: [nome]
- Campo do valor: [padrão do lead | campo "Venda"]

## Origem (assinaturas)
| Canal | Como identificar | Tag |
|---|---|---|
| Meta Ads | [mensagens pré-preenchidas dos anúncios; mensagem padrão do Meta; card de anúncio na conversa] | META ADS |
| Google Ads / site | [textos dos botões de WhatsApp da LP (ler os links wa.me); "vim pelo site"] | GOOGLE ADS |
| Orgânico / indicação | [o que sobra] | — |

## Tags de situação
[ORÇAMENTO, PREÇO, QUALIFICADO, CLIENTE POTENCIAL, NÃO RESPONDEU, VENDA... só as que o cliente usa, com a regra de cada uma]

## Regras do comercial
- Horário comercial: [dias e horas]
- SLA combinado de primeira resposta: [minutos]
- Caixas/números que recebem lead de campanha: [lista]. Números pessoais e fornecedores que ficam de fora: [lista]
- Leads de teste a ignorar: [nomes]
- Critério de lead qualificado (MQL): [de estrategia.md]

## Última auditoria
- Data: AAAA-MM-DD · Período: [de – até] · Tipo: [linha de base | recorrente]
- Leads: [n] (Meta [n] · Google [n] · outros [n])
- Resposta: mediana dentro do horário [min] · fora do horário [min] · sem resposta [%]
- Funil: contatos [n] → conversa real [n] → orçamento [n] → negociação [n] → venda [n]
- Valor em aberto na lista de retomada: R$ [valor]
- Relatório: `entregas/auditorias/[arquivo]`

## Reincidências (problemas que se repetem)
- [AAAA-MM] [problema] — apareceu em [n] auditorias
```

## `dados/crm-historico.csv`

Colunas: `data,periodo_ini,periodo_fim,tipo,leads,leads_meta,leads_google,mediana_resp_horario_min,mediana_resp_fora_min,sem_resposta_pct,orcamentos,vendas,valor_orcado,valor_aberto_retomada`

Uma linha por auditoria; nunca editar linhas antigas. É a base do gráfico de tendência
no relatório recorrente.
