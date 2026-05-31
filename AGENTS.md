# AGENTS.md – FARMA FRIZEN

Site de e-commerce para farmácia online, construído com TanStack Start (React SSR) e Tailwind CSS v4, hospedado na Netlify.

## Estrutura de Diretórios

```
src/
  components/
    BuyButton.tsx       # Botão de compra via Stripe; fallback para WhatsApp
  data/
    products.ts         # Catálogo de produtos (preços em centavos)
  lib/
    stripe.ts           # Server function para checkout session
  routes/
    __root.tsx          # Layout global: Header (logo, nav, contato) + Footer
    index.tsx           # Homepage: hero, grid de produtos, CTA
    products/
      $productId.tsx    # Página de detalhe do produto
    checkout/
      success.tsx       # Confirmação de pedido
      cancel.tsx        # Cancelamento de pagamento
  styles.css            # Tailwind v4 com @theme (paleta azul/branco/vermelho)
public/
  logo.jpeg             # Logo da FARMA FRIZEN
netlify/
  functions/            # Funções serverless Netlify
```

## Convenções

- **Cores**: azul primário `#1a56db`, vermelho accent `#dc2626`, fundo `#f8fafc`
- **Preços**: armazenados em centavos (inteiros) em `products.ts`; formatados como `R$ X,XX` no display
- **Idioma**: todo texto visível ao usuário em português do Brasil
- **Checkout**: via Stripe. Sem `STRIPE_SECRET_KEY`, `BuyButton` exibe link para WhatsApp
- **Contato**: número e Instagram estão em `src/routes/__root.tsx` nas funções `Header` e `Footer`

## Adicionando Produtos

Edite `src/data/products.ts`. Campos obrigatórios: `id`, `name`, `image`, `description`, `shortDescription`, `price` (centavos), `category`. Opcional: `badge` (ex: "Mais Vendido").

## Atualizando Contato

Busque `5554999990000` e `farmafrizen` em `src/routes/__root.tsx` para atualizar telefone e Instagram.

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Estilo | Tailwind CSS 4 |
| Pagamentos | Stripe |
| Deploy | Netlify |
