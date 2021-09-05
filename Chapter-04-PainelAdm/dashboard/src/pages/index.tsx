import { Button, Flex, Stack } from "@chakra-ui/react"
import { InputComponent } from "../components/Form/InputComponent"
import { SubmitHandler, useForm } from "react-hook-form"

type SignInFormData = {
  email: string;
  password: string;
}


export default function SigIn() {

  /**O metodo handleSubmit recebe os valores do register e esses valores podem ser recuperados
   * atraves de um parametro value dentro da function que o handleSubmit do useForm está envolvendo.
   * 
   * Atraves do metodo formState:{errors} é possivel recuperar um booleano se houve algum erro envolvendo o register
   */
  const { register, handleSubmit, formState:{errors}, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (value) => {
    await new Promise((resolve, reject) => {
      return setTimeout(() => {
        resolve(true)
      }, 2000)
    })
    console.log(value)
  }

  return (
    // Utilizando component Flex do chakra, que funciona como uma div com display:flex por default
    <Flex w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
      {/**Todo component Flex por padrão é uma div, basta passar por props as="form" para transformalo em forms */}
      <Flex onSubmit={handleSubmit(handleSignIn)} as="form" flexDirection={"column"} maxWidth={360} width={"100%"} bg={"gray.800"} p={"8"} borderRadius={"8"}>
        {/**Component Stack para adicionar espaçamentos nos elementos */}
        <Stack spacing="4">

          <InputComponent {...register("email", {required:true})} name={"email"} type="email" label={"E-mail"} />
          {errors.email && <small>Digite um email!</small>}
          <InputComponent {...register("password", {required:true})} name={"password"} type="password" label={"Password"} />
          {errors.password && <small>Digite uma senha!</small>}
        </Stack>
        {/**formState.isSubmitting observa o estado do forms e retorna um booleano */}
        <Button isLoading={formState.isSubmitting} type="submit" mt="6" colorScheme="blackAlpha">Entrar</Button>
      </Flex>
    </Flex>
  )
}
