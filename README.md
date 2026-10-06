# mrcoin — site institucional

Next.js 14 App Router, TypeScript, Tailwind, Framer Motion e Resend.

## Desenvolvimento

```sh
npm install
cp .env.example .env.local
npm run dev
```

## Configuração para produção

Configure no ambiente da Vercel:

- `RESEND_API_KEY`: chave privada do Resend, nunca prefixar com NEXT_PUBLIC.
- `LEAD_FROM_EMAIL`: remetente no domínio verificado mrmuu.com.br.
- `LEAD_TO_EMAIL`: endereço que receberá os leads.
- `NEXT_PUBLIC_SITE_URL`: URL pública definitiva, com https, para canonical, Open Graph e sitemap.

Importe este repositório na Vercel usando o preset Next.js. Sem as variáveis de e-mail, o formulário retorna uma mensagem de indisponibilidade; não simula sucesso. Nenhum e-mail é enviado no build. O honeypot é uma proteção básica, não substitui rate limiting persistente caso haja abuso.

Antes de publicar: confirmar dados institucionais e adequar a página de privacidade às práticas reais da empresa, confirmar remetente/destinatário e testar uma entrega real. Next.js 14 foi mantido conforme o pedido; está fora de suporte e a migração deve ser considerada antes da produção.

## Validação

```sh
npm run test
npm run lint
npm run build
```

## Assets e conteúdo

`public/images/mascot.png` é o mascote original do coins-app. `public/images/app-wallet.jpeg` é a captura fornecida. Carteira mostra a tela real; as demais telas são mockups identificados como ilustrativos em `src/components/showcase.tsx`. Valores são demonstrativos e não representam resultados comerciais.

Conteúdo principal em `src/app/page.tsx`, estilos/tokens em `src/app/globals.css`, formulário em `src/components/lead-form.tsx`, schema compartilhado em `src/lib/lead-schema.ts` e envio em `src/app/api/leads/route.ts`.

Movimento respeita prefers-reduced-motion, possui pausa manual para o loop do mascote e interrompe esse loop fora da viewport. As moedas decorativas usam movimento lento e também respeitam pausa, viewport e redução de movimento.
