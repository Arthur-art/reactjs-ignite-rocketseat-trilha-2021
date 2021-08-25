import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">

                <NavSection title={"GERAL"}>
                    <NavLink icon={RiInputMethodLine} title={"Dashboard"} />
                    <NavLink icon={RiContactsLine} title={"Usuários"} />
                </NavSection>


                <NavSection title={"AUTOMAÇÃO"}>
                    <NavLink icon={RiInputMethodLine} title={"Formularios"} />
                    <NavLink icon={RiGitMergeLine} title={"Automação"} />
                </NavSection>

            </Stack>
        </Box>
    )
}