import { Button, Flex, Stack } from "@chakra-ui/react"
import { InputComponent } from "../components/Form/InputComponent"
import { useForm } from "react-hook-form"


export default function SigIn() {

  const { register, handleSubmit } = useForm()

  function handleSignIn() {

  }

  return (
    // Utilizando component Flex do chakra, que funciona como uma div com display:flex por default
    <Flex w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
      {/**Todo component Flex por padrão é uma div, basta passar por props as="form" para transformalo em forms */}
      <Flex as="form" flexDirection={"column"} maxWidth={360} width={"100%"} bg={"gray.800"} p={"8"} borderRadius={"8"}>
        {/**Component Stack para adicionar espaçamentos nos elementos */}
        <Stack spacing="4">

          <InputComponent {...register("email")} name={"email"} type="email" label={"E-mail"} />

          <InputComponent {...register("password")} name={"password"} type="password" label={"Password"} />

        </Stack>
        <Button type="submit" mt="6" colorScheme="blackAlpha">Entrar</Button>
      </Flex>
    </Flex>
  )
}
