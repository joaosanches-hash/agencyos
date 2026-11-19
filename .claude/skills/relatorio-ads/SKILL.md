---
name: relatorio-ads
description: >
  Relatório de performance de Google Ads e Meta Ads de um cliente a partir de
  exports (CSV/XLSX) ou prints das plataformas: KPIs do período contra o
  período anterior, leitura por campanha e por criativo, alertas (verba
  queimando sem resultado, CTR caindo, fadiga, custo subindo) e 3 a 5 ajustes
  para a semana. Gera a versão interna e a mensagem pronta para o grupo do
  cliente. Use quando o usuário disser "relatório de ads", "relatório da
  semana", "como foram as campanhas", "performance", "/relatorio-ads" ou mandar
  export de campanha.
---

# /relatorio-ads — performance de mídia paga

## Passo 1 — Dados

Procurar no cliente ativo, em `dados/`, os exports mais recentes de Google Ads
e Meta Ads. Se não houver, pedir:

> "Me manda o export do período (CSV ou XLSX) do Gerenciador do Meta e do
> Google Ads, no nível de campanha e, se der, de anúncio. Print também serve."

Arquivos recebidos na conversa vão para `dados/AAAA-MM-DD_<plataforma>-<periodo>.ext`.

Ler também: `memoria/estrategia.md` (verba, divisão, modelo de conversão,
meta), o último relatório em `entregas/relatorios/` (para comparar) e o
`historico.md` recente (mudanças de campanha que explicam variação).

**Período:** o que o arquivo cobre. Comparar com o período anterior de mesma
duração, se houver dado. Sem dado anterior, dizer isso e não inventar base.

## Passo 2 — Métricas por objetivo

Usar a métrica certa para o objetivo real da campanha:

| Objetivo | Métrica principal | Apoio |
|---|---|---|
| Conversa no WhatsApp / mensagem | Custo por conversa iniciada | Conversas, CTR, frequência |
| Lead (formulário, LP) | CPL | Taxa de conversão da LP, CTR |
| Venda (e-commerce) | ROAS, CPA | Ticket, taxa de conversão |
| Tráfego / alcance | CPM, CPC | Frequência, alcance |
| Google Pesquisa | Custo por conversão | Parcela de impressões, CTR, termos de pesquisa |

Não comparar CPL de campanha de mensagem com CPL de campanha de formulário
como se fossem a mesma coisa.

## Passo 3 — Leitura

1. **Consolidado:** investimento, resultados, custo por resultado, contra o
   período anterior (variação com sinal)
2. **Por plataforma e por campanha:** o que puxou, o que pesou
3. **Criativos (Meta):** os 3 melhores e os piores por custo por resultado,
   com volume mínimo para ser justo (sem julgar anúncio com R$ 20 gastos)
4. **Alertas**, só os que existirem nos dados:
   - Campanha ou anúncio gastando sem resultado (acima de ~2× o custo médio
     por resultado, sem nenhuma conversão)
   - CTR caindo e frequência subindo no mesmo criativo: fadiga
   - Custo por resultado subindo mais de 30% contra o período anterior
   - Verba não sendo entregue (orçamento sobrando)
   - Google em aprendizado: não mexer, e dizer isso
5. **Ligação com o comercial**, se houver dado do CRM: resultados das
   plataformas × leads que de fato chegaram. Diferença grande é achado.

## Passo 4 — Recomendações

3 a 5 ajustes concretos para a próxima semana, cada um com o porquê em uma
linha. Específicos: *"pausar o anúncio 'Oferta-V2' (R$ 180 sem conversa)"*,
não *"otimizar criativos"*.

Respeitar o que o projeto já decidiu (ex.: campanha em aprendizado que não
deve ser tocada, registrado no histórico).

## Passo 5 — Entregas

**Relatório interno** em `entregas/relatorios/AAAA-MM-DD_relatorio-ads.md`:

```markdown
# Relatório de ads · <Cliente> · <período>

## Resumo
<3 linhas: o veredito, o número principal, o que muda na semana>

## Consolidado
| Indicador | Período anterior | Este período | Variação |

## Meta Ads
<tabela por campanha + melhores e piores criativos>

## Google Ads
<tabela por campanha + termos relevantes, se houver>

## Alertas
- ...

## Ajustes da semana
1. ...

## Observações
<limitações dos dados, o que não deu para avaliar>
```

**Mensagem para o grupo do cliente**, colada na resposta, no tom de
`_agencia/voz.md`: 5 a 8 linhas, os números que importam para o dono (quanto
investiu, quantos contatos, custo por contato, destaque da semana, próximo
passo). Sem jargão (CPM, CTR, frequência ficam no interno).

## Regras

- Número só dos arquivos. Métrica ausente no export → "sem dado", nunca estimar.
- Conferir se o período do Meta e do Google é o mesmo antes de somar.
- Se a coluna de moeda ou separador decimal parecer errada, confirmar antes de
  calcular.

## Fechar

Oferecer registrar no histórico:
`AAAA-MM-DD · resultado · <período>: <investimento>, <resultados>, <custo por resultado> (entregas/relatorios/...)`
