# Iniciando projeto com NextJs
- yarn create next-app ignews

# Instalando typescript
- yarn add typescript @types/react @types/node -D

# Instalando SASS
- yarn add sass

# Trabalhando com pacote react-icons
- yarn add react-icons
  
# Trabalhando com plataforma da stripe
- https://dashboard.stripe.com/test/developers
- yarn add stripe

    # Passo a passo stripe
    - Entrar no modo desenvolvedor
    - Criar um produto ficticio
    - Aba Developers -> Api keys -> Copiar Secret Key

# Trabalhando com next-auth
- yarn add next-auth
- https://next-auth.js.org/getting-started/example

# Trabalhando com FaunaDB
- yarn add faunadb
- https://dashboard.fauna.com/?first_session=true
- Criando um banco de dados
- Configurar API Key em Security
- Criar collections
- Criar indexes para select no banco
- Acessando o fauna db com sdk do fauna no arquivo fauna.ts

# Trabalhando com axios
- yarn add axios

# Trabalhando com lib do stripe para operações feitas no front
- yarn add @stripe/stripe-js
  
# Configurando stripe-cli
- https://stripe.com/docs/stripe-cli#install
- Adicionar ao package.json:
```json
"stripe": "stripe-cli/stripe listen  --forward-to localhost:3000/api/webhooks"
 ```
- yarn stripe

# JAM STACK

# CMS (Content Management System)

- Wordpress
x Drupal
x Joomla
x Magento (E-commerce)
  
# Headless CMS (Painel de administração + API HTTP, GraphQL, SDK)

- Strapi
- Ghost  (Blog)
- Keystone

- GraphCMS
- Prismic CMS
- Contentful

(E-commerce)
- Shopfy 
- Saleor

# Trabalhando com Prismic
- https://prismic.io
- https://prismic.io/docs
- yarn add @prismicio/client