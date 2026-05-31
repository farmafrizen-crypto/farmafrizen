# FARMA FRIZEN – Farmácia Online

Site de e-commerce para a **FARMA FRIZEN**, farmácia online com venda de medicamentos, vitaminas, dermocosméticos e suplementos.

## Tecnologias

- **TanStack Start** (React 19, file-based routing, SSR)
- **Tailwind CSS v4** (design system azul/branco/vermelho)
- **Stripe** (checkout online)
- **Netlify** (deploy, funções serverless)

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para habilitar o checkout Stripe, configure as variáveis de ambiente:

```
STRIPE_SECRET_KEY=sk_...
STRIPE_PUBLISHABLE_KEY=pk_...
```

Sem Stripe configurado, o botão de compra exibe a opção de pedido via WhatsApp.
