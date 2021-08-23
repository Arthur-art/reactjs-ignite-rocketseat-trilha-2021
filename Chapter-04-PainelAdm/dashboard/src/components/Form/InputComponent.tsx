import { FormControl, FormLabel, Input, InputProps as ChakraInputProps } from "@chakra-ui/react"

//Herdando todas as propriedades de um input por default com InputProps
interface Props extends ChakraInputProps {
    name: string;
    label?: string;
}

export function InputComponent({ name, label, ...res }: Props) {

    return (
        <>
            <FormControl>
                {/**Adicionando Label para referenciar os inputs */}
                {label && < FormLabel htmlFor={name} >{label}</ FormLabel >}
                <Input name={name} {...res} id={name} />
            </FormControl>
        </>
    )
}