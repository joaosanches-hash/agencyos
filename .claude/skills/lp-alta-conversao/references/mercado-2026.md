# Mercado 2026 — landing page de conversão

Atualizado em 18/11/2026 a partir de pesquisa na web. As fontes são em maioria
blogs de ferramenta; os números de benchmark divergem entre si (a mediana de
conversão de LP aparece de ~4% a ~6,6%, conforme a metodologia). **Nunca prometer taxa
de conversão ao cliente.** Medir a própria página e comparar com ela mesma.

## O que a literatura converge

1. **Desempenho no celular é o primeiro filtro.** Metas do Google (Core Web
   Vitals): LCP até 2,5 s, INP até 200 ms, CLS até 0,1. INP substituiu o FID em
   2024. Medir no PageSpeed Insights (dado real de usuários quando houver)
2. **Estabilidade visual importa para o botão:** layout que "pula" faz o dedo
   tocar no lugar errado justo no CTA. Reservar espaço para imagem e vídeo
3. **Formulário curto.** Cada campo extra custa conversão no celular. Pedir o
   mínimo para qualificar; o resto vira conversa depois. WhatsApp costuma ser o
   destino de menor fricção
4. **Uma página, uma ação.** Sem menu de site completo, sem links que levam para
   fora, um CTA repetido ao longo da página
5. **Coerência anúncio → página** (message match): a promessa do anúncio ou do
   termo buscado aparece no título da página, sem o visitante ter que procurar
6. **Prova real e específica** perto do CTA: avaliações com nome/fonte, número
   verificável, foto de trabalho real, selos que existem de fato
7. **A IA entra na jornada:** parte do tráfego chega por resposta de IA e por
   Modo IA do Google. Página com resposta direta no topo, dados concretos, FAQ
   e dados estruturados é mais fácil de ser entendida e citada

## Como a skill aplica

- **Acima da dobra no celular:** título que repete a promessa do anúncio/termo, 1
  linha de apoio, CTA único e visível, 1 prova (nota, número, selo real)
- **CTA do WhatsApp:** mensagem pré-preenchida que diz de onde veio ("Vim pelo
  Google, queria orçamento de [produto]"). Ajuda o comercial e a auditoria de CRM
  a identificar a origem. Botão fixo no rodapé do celular, sem cobrir conteúdo
- **Formulário (quando existir):** nome, telefone e 1 pergunta de qualificação; campos extras só com motivo
- **Rapidez como requisito do protótipo:** imagens em WebP/AVIF com largura e altura
  definidas, fontes limitadas (1 família, 2 pesos), sem biblioteca pesada, vídeo só
  quando carrega sob demanda
- **Seção de perguntas frequentes** com as dúvidas reais do WhatsApp + marcação
  FAQPage; dados da empresa (endereço, telefone, horário) em LocalBusiness
- **Rastreamento:** cada CTA dispara um evento de conversão distinto (clique no
  WhatsApp, envio de formulário, ligação). Sem isso, `/anuncio-google` não ativa
- **Acessibilidade mínima:** contraste adequado, toque com alvo de pelo menos 44 px,
  texto legível sem zoom

## Checklist extra de QA (somar ao do SKILL.md)

- [ ] LCP, INP e CLS dentro das metas no PageSpeed (móvel)
- [ ] Título repete a promessa do anúncio
- [ ] CTA único, visível sem rolar, repetido a cada 2 ou 3 seções
- [ ] Mensagem do WhatsApp identifica a origem
- [ ] Nenhuma prova, número ou depoimento sem fonte do cliente
- [ ] Eventos de conversão testados em modo de visualização
- [ ] FAQ real + dados estruturados

## Fontes consultadas (3ª parte, opinião)

- Landerlab, "Landing page best practices: complete 2026 guide"
- Enrich Labs, "Landing page optimization: complete guide 2026"
- Unbounce 2026 Conversion Benchmark Report (citado por terceiros; conferir na fonte)
- web.dev (Google), documentação de Core Web Vitals, para os limites oficiais
