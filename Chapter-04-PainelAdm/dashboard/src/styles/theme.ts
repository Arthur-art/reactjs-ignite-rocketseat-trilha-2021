import { extendTheme } from "@chakra-ui/react"

//Extendendo o tema padrão do chakra, reaproveitando o tema que o chakra ja tem para substituit o necessário no css
export const theme = extendTheme({
    //Customizando fonts no chakra
    fonts: {
        heading: "Roboto",
        body: "Roboto"
    },
    //Substituindo estilos globais do chakra
    styles: {
        global: {
            body: {
                bg: "gray.900",
                color: "gray.50"
            }
        }
    }
})