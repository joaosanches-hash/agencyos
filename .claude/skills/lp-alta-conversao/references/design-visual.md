# Design Visual — Tokens, Hierarquia, Mobile, Performance e Construtor de LP

## Derivar o design da identidade do cliente (nunca de template genérico)

1. **Fonte da verdade:** `identidade/design-guide.md` do projeto (paleta, fontes, mundo visual).
   Sem design-guide → derive do logo/Instagram do cliente e declare a suposição.
2. **Tokens da LP** (especificar no blueprint, sempre em valores exatos):
   - **Cores:** base neutra (fundo/texto) da identidade + **1 cor de acento EXCLUSIVA do CTA**,
     que não aparece em nenhum outro elemento da página. Contraste do texto ≥ 4.5:1 (WCAG);
     testar botão com "squint test" — apertando os olhos, o CTA deve ser o elemento mais óbvio.
   - **Tipografia:** 2 famílias no máximo (display pra headlines + texto pra corpo), Google Fonts
     (compatível com qualquer construtor de LP). Escala clara: H1 forte (mobile ~32-40px), corpo ≥16px.
   - **Espaçamento:** generoso e consistente (seções respiram; whitespace é hierarquia, não
     desperdício).
3. **O clima visual segue o nicho e o posicionamento:** premium = mais espaço, menos elementos,
   paleta contida; popular/varejo = mais densidade, cor mais quente, urgência visível. Dissonância
   entre clima da página e posicionamento do cliente queima a oferta.

## Hierarquia e direção do olhar

- O olho escaneia em **F** (páginas com texto) ou **Z** (páginas visuais): headline no topo,
  pontos-chave na margem esquerda, CTA nos pontos de descanso do olhar.
- **Pistas direcionais:** pessoa da foto olhando PARA o CTA/formulário (eye-tracking mostra que o
  leitor segue o olhar do modelo), setas sutis, fluxo vertical natural. No mobile tudo empilha —
  a ordem das seções É a hierarquia.
- Cada seção tem UM elemento dominante (headline OU imagem OU número), nunca três brigando.

## Imagens

- **Foto real do cliente > stock.** Obra, produto, equipe, showroom — autenticidade converte;
  stock clichê (aperto de mãos, call center sorrindo) queima confiança. Buscar no Drive de
  assets/pastas do projeto; sem foto boa, prompt de IA (regras da skill copy-estaticos-meta:
  inglês, sem texto na imagem, negative space pra headline, cena brasileira quando aparecer
  gente/arquitetura).
- Hero: imagem que mostra o RESULTADO/contexto do avatar, com área limpa pra headline.
- Comprimir tudo (WebP/JPEG otimizado); lazy-load abaixo da dobra; nada de vídeo de fundo pesado.

## O que parece ATUAL vs DATADO (2026)

**Atual:** tipografia grande e intencional, whitespace generoso, foto real com luz natural,
cores da marca com acento único, seções limpas com um propósito cada, microinterações sutis.
**Datado (evitar):** sombras duras em botões, parallax gratuito, carrossel automático, stock
genérico, degradês arco-íris, excesso de ícones ilustrativos iguais, seção "nossos valores"
institucional em página de conversão.

## Mobile-first (a maioria do tráfego pago é mobile)

- ~80%+ do tráfego de LP chega por mobile e converte pior que desktop — a versão mobile É a
  página principal; desktop é a adaptação.
- CTA visível sem rolar · alvos de toque ≥44×44px · corpo ≥16px sem zoom · formulário sem scroll
  horizontal · em página longa, barra sticky de CTA (testar; nunca cobrir conteúdo).
- Especificar no blueprint o comportamento mobile de cada seção (o que empilha, o que some,
  tamanho da headline).

## Performance = conversão (checklist do protótipo)

- Alvo: **carregar < 2s em 4G** (cada segundo extra custa conversão; 1s vs 5s ≈ 3x na taxa —
  direcional, mas o consenso é forte e o Google pontua CWV).
- Arquivo único, CSS embutido, sem framework, sem biblioteca JS além do essencial.
- Imagens: dimensão certa (não redimensionar no browser), WebP, `loading="lazy"` abaixo da dobra,
  `width/height` declarados (zero layout shift).
- Fontes: 2 famílias, pesos mínimos, `display=swap`.

## Compatibilidade com o construtor de LP (o blueprint precisa ser reconstruível)

O construtor usado pela agência está em `_agencia/agencia.md` (ex.: GreatPages, Elementor,
Webflow, RD Station). Quase todos são builders de blocos, com formulário nativo, integração com
WhatsApp/CRM e, em alguns planos, A/B test. Implicações:

- **Blueprint em blocos simples:** cada seção descrita como um bloco autocontido (fundo, colunas,
  elementos) que existe em qualquer builder — nada de layout que só funciona com CSS exótico.
- **Especificar em valores absolutos:** hex das cores, nome exato das Google Fonts, tamanhos em
  px, espaçamentos — o webdesigner replica sem adivinhar.
- **Efeitos:** o protótipo pode ter microinterações leves, mas o blueprint marca o que é
  ESSENCIAL preservar (hierarquia, cores, copy, ordem) vs o que é opcional (animações).
- Formulário e botão de WhatsApp usam os componentes nativos do builder (integrações e pixel já
  resolvidos lá) — o blueprint especifica campos, rótulos e a mensagem pré-preenchida.
- A/B test nativo: sugerir ao usuário a 1ª variação a testar (normalmente headline do hero).
