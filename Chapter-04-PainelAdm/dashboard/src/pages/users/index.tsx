import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Users() {

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Button as="a" size="sm" fontSize="sm" colorScheme="blackAlpha" leftIcon={<Icon as={RiAddLine} />}>
                            Criar novo usuário
                        </Button>
                    </Flex>
                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th><Checkbox colorScheme="blackAlpha" /></Th>
                                <Th>Usuário</Th>
                                <Th>Data de cadastro</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td><Checkbox colorScheme="blackAlpha" /></Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Arthur Teixeira S. Silva</Text>
                                        <Text as="small">arthurteixeira.guts@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>24 de Agosto, 2021</Td>
                                <Td>
                                    <Button as="a" size="sm" fontSize="sm" colorScheme="blackAlpha" leftIcon={<Icon as={RiPencilLine} />}>
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>
            </Flex>
        </Box>
    )
}