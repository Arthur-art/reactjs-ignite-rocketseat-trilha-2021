import { Button, Flex, FormLabel, Input, Stack } from "@chakra-ui/react"


export default function Home() {
  return (
    // Utilizando component Flex do chakra, que funciona como uma div com display:flex por default
    <Flex w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
      {/**Todo component Flex por padrão é uma div, basta passar por props as="form" para transformalo em forms */}
      <Flex as="form" flexDirection={"column"} maxWidth={360} width={"100%"} bg={"gray.800"} p={"8"} borderRadius={"8"}>
        {/**Component Stack para adicionar espaçamentos nos elementos */}
        <Stack spacing="4">

          <div>
            {/**Adicionando Label para referenciar os inputs */}
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input name="email" id="email" type="email" />
          </div>

          <div>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input name="password" id="password" type="password" />
          </div>

        </Stack>
        <Button type="submit" mt="6" colorScheme="blackAlpha">Entrar</Button>
      </Flex>
    </Flex>
  )
}
