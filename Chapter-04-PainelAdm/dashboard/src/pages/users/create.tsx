import { Box, Button, Divider, Flex, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import { RiSave2Fill } from "react-icons/ri";
import { InputComponent } from "../../components/Form/InputComponent";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import Link from "next/link"

export default function Create() {

    return (
        <Box>
            <Header />
            <Flex w="100%"  my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p={["2", "8"]}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <InputComponent name="name" label="Name completed" />
                            <InputComponent name="email" type="email" label="E-mail" />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" w="100%" spacing="8">
                            <InputComponent name="password" label="Password" />
                            <InputComponent name="password_confirmation" type="password" label="Confirm password" />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href={"/users"}><Button cursor="pointer" colorScheme="blackAlpha">Cancelar</Button></Link>
                            <Button colorScheme="blackAlpha" leftIcon={<Icon as={RiSave2Fill} />}>Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}