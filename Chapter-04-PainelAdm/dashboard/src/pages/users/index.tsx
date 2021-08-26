import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link"

export default function Users() {

    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Link href="/users/create">
                            <Button as="a" size="sm" cursor="pointer" fontSize="sm" colorScheme="blackAlpha" leftIcon={<Icon as={RiAddLine} />}>
                                Criar novo usuário
                            </Button>
                        </Link>
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
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}