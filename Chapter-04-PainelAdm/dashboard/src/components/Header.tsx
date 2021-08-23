import { Flex, Text } from "@chakra-ui/react";

export function Header() {

    return (
        <Flex as="header" w="100%" maxW={1480} h="20" mx="4" px="6" align="center" >
            <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
                Dashboard
                <Text as="span" color="red.400">.</Text>  
            </Text>

        </Flex>
    )
}