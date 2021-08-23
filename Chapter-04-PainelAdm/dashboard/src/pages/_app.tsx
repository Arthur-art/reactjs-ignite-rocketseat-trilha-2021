import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles/theme"

// Utilizando ChakraProvider para que todos os components tenham acesso aos components do chakra
function MyApp({ Component, pageProps }: AppProps) {
  //Passando um novo theme para o chakra component - theme=theme
  //Usando propriedade resetCSS para previnir estilização default do html
  return <ChakraProvider resetCSS theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp
