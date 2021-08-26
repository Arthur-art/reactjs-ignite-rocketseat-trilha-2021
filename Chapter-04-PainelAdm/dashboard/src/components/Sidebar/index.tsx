import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { SidebarNav } from "./SidebarNav";

export function Sidebar() {

    const isFloatingSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    /**Se o tamanho da tela for menor que lg o component Sidebar ira retornar um Drawer com opção de abrir ou fechar
     * a SidebarNav
     */
    if (isFloatingSidebar) {
        return (
            <Drawer isOpen={true} placement="left" onClose={() => { }}>
                <DrawerOverlay>
                    <DrawerContent bg={"gray.800"}>
                        <DrawerCloseButton />
                        <DrawerHeader></DrawerHeader>
                        <DrawerBody>
                            <SidebarNav />
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return (
        <Box as="aside" w="64" mr="8">
            <SidebarNav />
        </Box>
    )
}