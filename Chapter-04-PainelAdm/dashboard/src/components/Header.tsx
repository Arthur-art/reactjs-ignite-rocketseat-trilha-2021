import { Flex, Input, Text, Icon, Stack, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"

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
                <Icon cursor="pointer" as={RiSearchLine} fontSize="20" />
            </Flex>

            <Flex align="center" marginLeft="auto">
                <HStack spacing="8" mx="8" pr="8" py="1" color="gray.300" borderRightWidth={1} borderColor="gray.700">
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserAddLine} fontSize="20" />
                </HStack>
            </Flex>

            {/**Dados do perfil */}
            <Flex align="center">
                <Box mr="4" textAlign="right">
                    <Text>Arthur Teixeira S. Silva</Text>
                    <Text color="gray.300" as="small">arthurteixeira.guts@gmail.com</Text>
                </Box>
                <Avatar bgColor="gray.300" size="md" name="Arthur Teixeira S. Silva"
                    src="https://avatars.githubusercontent.com/u/54858003?v=4" />
            </Flex>
        </Flex>
    )
}