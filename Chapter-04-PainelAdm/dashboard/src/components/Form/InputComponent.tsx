import { FormErrorMessage } from "@chakra-ui/form-control"
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"
import { forwardRef, ForwardRefRenderFunction } from "react"
import { FieldError } from "react-hook-form"

//Herdando todas as propriedades de um input por default com InputProps
interface Props extends ChakraInputProps {
    name: string;
    label?: string;
    errors?: FieldError;
}

/**Encaminhamento de refs feito no react da seguinte forma:
 * O metodo forwarRef realiza o encaminhamento da ref que está vindo por props para a function InputComponentBase
 */
const InputComponentBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({errors, name, label, ...res }, ref) => {

    return (
        <>
        {/**Propriedade isInvalid do chakra que indica se o input tem erro ou não, se sim a borda do input fica vermelha  */}
            <FormControl isInvalid={!!errors}>
                {/**Adicionando Label para referenciar os inputs */}
                {label && < FormLabel htmlFor={name} >{label}</ FormLabel >}
                {/**Cores no padrão do chakra Exe.: gray.900 */}
                <ChakraInput ref={ref} focusBorderColor={"gray.900"} bg={"gray.900"} name={name} {...res} id={name} />
               { !!errors &&  <FormErrorMessage>{errors.message}</FormErrorMessage>}
            </FormControl>
        </>
    )
}

export const InputComponent = forwardRef(InputComponentBase)