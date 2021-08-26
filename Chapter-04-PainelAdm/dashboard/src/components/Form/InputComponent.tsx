import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"
import { forwardRef, ForwardRefRenderFunction } from "react"

//Herdando todas as propriedades de um input por default com InputProps
interface Props extends ChakraInputProps {
    name: string;
    label?: string;
}

/**Encaminhamento de refs feito no react da seguinte forma:
 * O metodo forwarRef realiza o encaminhamento da ref que está vindo por props para a function InputComponentBase
 */
const InputComponentBase: ForwardRefRenderFunction<HTMLInputElement, Props> = ({ name, label, ...res }, ref) => {

    return (
        <>
            <FormControl>
                {/**Adicionando Label para referenciar os inputs */}
                {label && < FormLabel htmlFor={name} >{label}</ FormLabel >}
                {/**Cores no padrão do chakra Exe.: gray.900 */}
                <ChakraInput ref={ref} focusBorderColor={"gray.900"} bg={"gray.900"} name={name} {...res} id={name} />
            </FormControl>
        </>
    )
}

export const InputComponent = forwardRef(InputComponentBase)