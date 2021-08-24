# Iniciando projeto com nextJs
- yarn create next-app 
- yarn add typescript @types/react @types/node -D

# Trabalhando com Chakra 
- yarn add @chakra-ui/react @chakra-ui/core @emotion/react@^11 @emotion/styled@^11 framer-motion@^4
- Importações no chakra para react sempre from @chakra-ui/react

# Configurando fonts no next com _document.tsx

# Trabalhando com lib react-icons
- yarn add react-icons

# Trabalhando com lib apexcharts para geração de gráficos
- https://apexcharts.com/
- yarn add apexcharts react-apexcharts

# Resolvendo erro de window is not defined gerado pelo next ao tentar reenderizar o apex-charts
- Esse erro ocorre pois o primeiro carregamento do next é feito no servidor back-end que roda dentro de um processo Node, e nesse processo não existe o window que é utilizado pelo apex-charts

para resolver é bem simples, é só importar o Dynamic 

```js
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
});
```