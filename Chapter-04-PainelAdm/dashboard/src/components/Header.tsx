import { Flex, Input, Text, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri"

export function Header() {

    return (
        <Flex as="header" w="100%" maxW={1480} h="20" mx="4" px="6" align="center" >
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
                Dashboard
                <Text as="span" color="red.400">.</Text>
            </Text>
            {/**Adicionando como label para incluir icones no input e ao clicar no icone, o input também receba o foco */}
            <Flex as="label" flex="1" py="4" px="8" ml="6" maxW={400} alignSelf="center" color="gray.200"
                position="relative" bg="gray.800" borderRadius="full">
                <Input variant="unstyled" color="gray.50" placeholder="Buscar na plataforma"
                    _placeholder={{ color: "gray.400" }} mr="4" px="4" />
                <Icon as={RiSearchLine} fontSize="20"/>
            </Flex>
        </Flex>
    )
}