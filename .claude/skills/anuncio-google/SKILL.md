---
name: anuncio-google
description: >
  Monta a campanha de Google Ads Search de um cliente, do briefing a um
  PAINEL HTML organizado: cada elemento (nome, configurações, palavras-chave,
  títulos e descrições do RSA com contador de caracteres, extensões, lista
  extensa de negativas) é copiado com um clique e colado na interface do
  Google Ads. Inclui conversão e objetivo alinhados, estrutura por intenção,
  plano dos primeiros 30 dias e checklist de ativação. Use quando o usuário
  pedir "criar campanha de Google Ads", "anúncio no Google", "campanha de
  pesquisa", "montar os anúncios" ou "/anuncio-google".
---

# /anuncio-google — campanha de Search, do briefing ao painel de copiar e colar

Sai do briefing para um **painel HTML** com tudo o que o estrategista cola na
interface do Google Ads, na ordem em que a tela pede. **Não gera CSV nem fala
de Google Ads Editor**: a criação é feita direto na plataforma, item a item,
copiando do painel. A skill **monta e entrega pausado**: quem ativa é o
estrategista, depois de conferir.

## Contexto que lê antes de perguntar

Do cliente ativo: `memoria/empresa.md` (produto, público, praça, diferenciais,
telefone), `memoria/estrategia.md` (meta, verba, destino do clique, modelo de
conversão), `memoria/voz.md` (tom). Se existir `marketing/seo/01-pesquisa-demanda.md`
e `06-google-ads.md` (da skill `/seo`), usar como base e pular o que já foi respondido.

## Passo 1 — Briefing (só o que faltar, de uma vez)

1. O que anunciar (1 a 3 produtos/serviços, prioridade entre eles)
2. Quem compra e qual dor resolve
3. Praça: cidade e raio, ou estados. Atende fora disso?
4. Verba diária e prazo do teste
5. Objetivo da conversão: WhatsApp, ligação, formulário ou visita à loja
6. Destino: URL da LP/site. Se não existe, avisar que a campanha depende de uma página (`/lp-alta-conversao`)
7. Há histórico de campanha anterior? Termos que já converteram ou queimaram verba

## Passo 2 — Objetivo e conversão primeiro (bloqueia a ativação)

**Objetivo alinhado:** escrever uma frase única que liga negócio, ação e
medição: "gerar [ação: orçamento no WhatsApp / ligação / formulário] de
[público] em [praça], medido por [conversão principal], a até R$ [CPA aceitável,
se o cliente souber]". Tudo na campanha (palavras, anúncios, LP, lance) tem de
servir a essa frase. Na campanha, escolher o objetivo **Leads** (ou **Vendas**
se a compra acontece no site), sem orientação de meta que o Google sugerir
para "tráfego do site". Se o cliente vende por WhatsApp, o objetivo não é clique
no anúncio: é lead com qualidade.

Sem conversão medindo o resultado real, o Google otimiza para clique. Antes
de qualquer estrutura, listar o que precisa estar configurado e **quem** faz:

- Clique no botão de WhatsApp, envio de formulário e ligação pelo anúncio, cada um como ação de conversão
- Marcar como **principal** só o que representa lead de verdade; o resto fica secundário (observação)
- Se a venda acontece fora do site (WhatsApp/CRM), combinar com o cliente como devolver a qualidade do lead (conversão offline ou importação), porque lead barato e ruim é o erro mais comum
- Tag/GTM validado em modo de visualização antes de ativar

Se isto não estiver pronto, a campanha é entregue, mas o guia diz **"não ativar"**
até o item fechar.

## Passo 3 — Pesquisa de termos

Partir do `01-pesquisa-demanda.md`. Sem ele: 30 a 50 termos-semente do
briefing, ampliados por buscas reais (WebSearch: sugestões, "pesquisas
relacionadas", o que aparece em anúncio e Maps). Classificar por intenção:

- **Transacional/comercial** ("comprar", "orçamento", "preço", produto + cidade): entra
- **Informacional** ("como fazer", "o que é"): fica para SEO, não para Ads
- **Navegacional de concorrente**: só em campanha à parte e com decisão do cliente

Volume e CPC só como faixa e com a fonte. Sem fonte, escrever "a validar no Planejador de Palavras-chave".

## Passo 4 — Estrutura

Princípio atual: **menos campanhas, mais dados por campanha.** O Smart Bidding
aprende com volume; fatiar demais deixa cada campanha sem dado.

```
Campanha Search — <Negócio> | <Produto principal>
├── Grupo por tema/intenção (3 a 6 grupos, não 20)
│   ├── Palavras-chave temáticas, poucas e fortes
│   ├── 1 RSA completo (2º RSA só para testar um ângulo diferente)
│   └── Negativas do grupo
Campanha de marca (opcional, verba pequena, exata)
Lista de negativas compartilhada (obrigatória)
```

**Correspondência de palavras-chave:**
- Conta nova ou menos de ~30 conversões/mês na campanha: **frase e exata** nos termos de intenção alta, estratégia de lance *Maximizar conversões* sem meta
- Com volume de conversão consistente: testar **ampla com Smart Bidding** em um grupo/campanha separado, sempre com negativas fortes e olhando o relatório de termos de pesquisa toda semana
- Exata para marca e para os poucos termos de maior valor

**AI Max para Search:** recurso do Google que expande a busca por correspondência
ampla, ativos e conteúdo da LP. Só sugerir quando houver conversão confiável,
negativas e **controle de URL final**; e lembrar que, com expansão de URL
ligada, o fixar (pin) de ativos do RSA não é respeitado. Se o estrategista
quiser testar, é um experimento com verba separada, nunca o padrão da conta nova.

## Passo 5 — Anúncios responsivos (RSA)

Por grupo, 1 RSA com **15 títulos e 4 descrições**. Limites: título 30
caracteres, descrição 90, contar de verdade.

- 4 a 5 títulos com a palavra-chave do grupo (fala do que a pessoa buscou)
- 3 a 4 de diferencial concreto (prazo, garantia, mínimo, material, atendimento direto)
- 3 de ação ("Peça orçamento no WhatsApp")
- 2 de prova real (anos de mercado, só se confirmado)
- 1 a 2 de oferta ou condição

Títulos devem funcionar **em qualquer combinação** e não repetir a mesma ideia. Fixar (pin) só
o que é obrigatório (ex.: nome da marca em uma posição), e o mínimo possível.
Sem superlativo sem prova, sem emoji, sem CAIXA ALTA, sem pontuação decorativa.
Tom de `memoria/voz.md`. Dado que não está na memória: `[confirmar]`.

## Passo 6 — Extensões (ativos) e limites de caracteres

Sitelinks (4 a 6, texto 25 e duas descrições de 35 caracteres), frases de
destaque (4 a 8, 25 caracteres), snippets estruturados (cabeçalho + 3 a 10
valores de 25 caracteres), chamada, local (se tem endereço, vincular o Perfil
da Empresa), preço e promoção apenas se confirmados. Imagem e logotipo quando
a conta permitir. Nome da empresa: 25 caracteres.

Limites que o painel confere: título do RSA 30 · descrição 90 · caminho de
exibição 15 (dois campos) · sitelink 25 / 35 / 35 · frase de destaque 25 ·
valor de snippet 25 · nome da empresa 25. Contar os caracteres de verdade
(espaço conta) e reescrever o que estourar, nunca cortar no meio da palavra.

## Passo 6b — Negativas (extensas, por categoria)

Ler `references/negativas-base.md`. Montar a lista do cliente com **no mínimo
250 termos**, por categoria: partir da base, **remover** o que colide com a
oferta do cliente e **acrescentar** o específico do nicho (concorrentes e
marcas que não trabalha, cidades fora da praça, serviços vizinhos, termos
informacionais do `01-pesquisa-demanda.md`, termos queimados do histórico).
Dizer no painel/plano o que foi removido e por quê. Negativas específicas de
um grupo ficam no grupo; as gerais vão na lista da campanha.

## Passo 7 — Configurações recomendadas

Rede: só Pesquisa (desmarcar parceiros de pesquisa e Display no começo).
Localização: "presença ou interesse regular" só se o negócio atende quem
viaja; senão, "presença". Programação: horário em que o cliente atende
(WhatsApp sem resposta à noite queima verba). Idioma: português. Lance
inicial e verba conforme briefing.

## Passo 8 — Arquivos

`clientes/<cliente>/marketing/campanhas/google-ads-AAAA-MM-DD/`

```
painel-campanha.html   o painel de copiar e colar (arquivo principal)
plano-google-ads.md    estrutura, lógica de cada grupo, hipóteses, objetivo
```

**Como gerar o painel:** copiar `references/modelo-painel.html` para
`painel-campanha.html` e substituir o bloco entre `/*DADOS-INICIO*/` e
`/*DADOS-FIM*/` pelo objeto `CAMPANHA` do cliente (mesma estrutura do modelo:
cliente, nome, objetivo, conversoes, config, grupos com palavras/titulos/
descricoes/caminho/fixar, sitelinks, frases, snippets, chamada, nomeEmpresa,
negativas por categoria, checklist). Não mexer no resto do arquivo. Palavra-chave
entra como `{"t": "termo", "c": "frase|exata|ampla"}`; o painel formata
`"frase"`, `[exata]` e ampla sem símbolo.

O painel tem abas na ordem de criação na plataforma: Visão geral, Conversão,
Configurações, um grupo por aba (palavras-chave, títulos, descrições,
caminhos), Extensões, Negativas, Checklist. Clicar em um item copia o texto; cada
bloco tem "Copiar todos". Contador `n/limite` em cada texto, vermelho se
passar, e um aviso no topo com o total de itens estourados.

**Conferir antes de entregar:** abrir o painel no navegador (ou rodar o
script por Node) e garantir que o aviso do topo diz que está tudo dentro dos
limites. Se houver item em vermelho, reescrever e gerar de novo.

Campanha criada na plataforma sempre **pausada**. Checklist de ativação:
conversão validada, LP no ar e rápida no celular, WhatsApp/telefone atendidos
no horário, verba confirmada, negativas aplicadas.

## Passo 9 — Os primeiros 30 dias (vai no plano)

- **Dias 1 a 7:** não mexer em lance. Ler termos de pesquisa a cada 2 ou 3 dias, negativar o que não é cliente
- **Semana 2:** pausar o que gastou sem lead; subir o que gerou
- **Dia 30:** com volume, avaliar meta de CPA e teste de correspondência ampla
- Leitura de resultado sempre por **custo por lead qualificado**, não por clique ou CTR

## Regras

- Nunca inventar CPC, volume ou prazo de resultado. Faixa com fonte ou "a validar"
- Sempre entregar pausado
- Nada de CSV nem menção ao Google Ads Editor: a entrega é o painel HTML
- Lista de negativas curta (menos de 250 termos) é entrega incompleta
- Sem conversão validada, o guia manda não ativar
- Termo informacional não entra em Ads
- Nada de concorrente, depoimento ou número que não veio do cliente
- Alterar campanha já no ar não é desta skill: é com o estrategista, olhando os dados da conta
