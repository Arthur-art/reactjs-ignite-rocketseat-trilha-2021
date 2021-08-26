import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router";
import { createContext, ReactNode, useContext, useEffect } from "react"

interface SidebarDrawerProvider {
    children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

//Criando context, e tipando seu valor inicial
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

//Exportando context provider para envolver varios components que terão acesso aos valores desse contexto
export function SidebarDrawerProvider({ children }: SidebarDrawerProvider) {

    //useDisclosure, hook do chakra.ui para trabalhar com Drawer dinâmico
    const disclosure = useDisclosure()

    const router = useRouter();

    /**o useEffect ira chamar a function onClose sempre que a rota mudar,
     *  fechando o Drawer sempre que uma nova rota for acessada */
    useEffect(() => {
        disclosure.onClose()
    }, [router.asPath])
    
    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

//Criando hook para acessar o valor do contexto de qualquer component
export function useSidebarDrawer() {
    return useContext(SidebarDrawerContext)
}