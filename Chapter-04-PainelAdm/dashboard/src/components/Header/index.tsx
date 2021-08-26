import { Button, Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {

    /**Trabalhando com hook useBreakpointValue do chakra.ui para responder de acordo com o redimensionamento da tela,
     * a constante isWideVersion recebe true se o tamanho da tela for lg ou maior, se a tela diminuir demais abaixo de lg  
     * ela recebe false 
     */
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    const { onOpen } = useSidebarDrawer()

    return (
        <Flex as="header" w="100%" maxW={1480} h="20" mx="4" px="6" align="center" >

            {!isWideVersion && <Button variant={"unstyled"} _focus={{ borderColor: "gray.900" }}
                onClick={onOpen} leftIcon={<Icon as={RiMenuLine} />} />}

            <Logo />

            <SearchBox />

            <Notification />

            <Profile showProfileData={isWideVersion} />

        </Flex>
    )
}