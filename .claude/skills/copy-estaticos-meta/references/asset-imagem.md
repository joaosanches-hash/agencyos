# Asset da Imagem — Buscar no Acervo ou Gerar por IA

O designer recebe a copy + direção visual + **a imagem** (ou o prompt pra gerá-la). Este arquivo
define como escolher entre acervo e IA, e como escrever o prompt.

## 1. Ordem de busca no acervo do cliente

1. **Pastas locais do projeto:** `identidade/` (logo, fotos de marca), `dados/` e `marketing/`
   (fotos de produto/obra enviadas pelo cliente). Liste o que existe antes de decidir.
2. **Google Drive do cliente:** se `memoria/empresa.md` do cliente declarar a pasta, ou se houver acesso
   via ferramentas de Drive, busque lá (fotos de obras, produtos, showroom, equipe).
3. Se o usuário colou links/fotos no pedido, eles têm prioridade.

**Regra de honestidade:** só entregue link/caminho de imagem que você **verificou existir**. Sem
acesso ao acervo → diga isso e entregue o prompt de IA como caminho.

## 2. O que faz uma foto ser "boa" para estático de anúncio

- **Encaixa no arquétipo do conceito** (antes/depois pede a obra real; autoridade pede o dono/equipe;
  produto-herói pede close limpo do produto).
- **Ponto focal claro** + **área "limpa"** (céu, parede, fundo desfocado) onde a headline entra
  sem brigar com a foto.
- Resolução suficiente pra 1080×1350 (4:5) sem esticar; foto vertical/quadrada > horizontal.
- Real > perfeita: foto autêntica de obra/cliente performa melhor que stock genérico. Prefira o
  acervo mesmo imperfeito, se a imperfeição não comprometer (tremida/escura demais = descartar).
- **Nunca** foto com marca d'água de terceiros, rosto de cliente sem autorização, ou imagem de
  concorrente.

Ao entregar, aponte também **onde na foto** a headline entra (ex.: "headline no céu, canto superior").

## 3. Prompt de IA (quando não há foto boa)

Formato: **inglês**, descritivo, pronto pra colar no **ChatGPT (geração de imagem)** — funciona
também em outras ferramentas. Sempre acompanhado de 1 linha em PT dizendo o que gera.

**Esqueleto do prompt:**

```
[Photorealistic photo | Clean 3D render | Flat illustration] of [cena/objeto principal],
[ambiente/contexto], [iluminação: soft natural light / golden hour / studio softbox],
[ângulo/enquadramento: close-up / wide shot / eye level], [paleta ou clima, alinhado ao
design-guide do cliente se existir], vertical 4:5 composition, [área limpa: com "negative
space at the top for text overlay" ou similar], no text, no words, no logos, no watermarks,
high resolution, professional advertising photography style
```

**Regras fixas do prompt:**
- **`no text, no words, no logos`** — SEMPRE. A copy é diagramada pelo designer; texto gerado
  por IA sai errado e engessa a arte.
- **Formato declarado** (vertical 4:5; 9:16 se Stories/Reels).
- **Negative space** pedido explicitamente onde a headline vai entrar.
- Cena **coerente com o Brasil/realidade do cliente** quando aparecer gente/arquitetura (evitar
  casa americana pra cliente de construção regional, por ex. "Brazilian residential architecture").
- Nada de pessoas reais identificáveis, celebridades ou marcas de terceiros.
- Se o cliente tem `identidade/design-guide.md`, puxe a paleta pro clima da imagem.

**Exemplo completo:**

```
Photorealistic photo of a bright modern Brazilian apartment kitchen with light wood cabinets
and a quartz countertop, soft natural morning light from a side window, eye-level wide shot,
warm neutral palette with sage green accents, vertical 4:5 composition, clean empty wall in
the top third for text overlay, no text, no words, no logos, no watermarks, high resolution,
professional advertising photography
```
*(PT: cozinha de apartamento brasileiro, luz natural da manhã, parede limpa no terço superior
pra headline.)*

## 4. Compliance do asset

- Imagem de IA **fotorrealista** → lembrar o usuário da **sinalização de IA** no Meta.
- Vale tudo do `compliance.md`: sem antes/depois corporal, sem zoom em imperfeição física, e a
  imagem não pode "dizer" o que a copy não pode (ex.: retrato de pessoa endividada/sofrendo +
  headline de dívida = mesmo bloqueio de atributos pessoais).
