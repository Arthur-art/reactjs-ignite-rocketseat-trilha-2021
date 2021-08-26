import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {

    const searchInputRef = useRef<HTMLInputElement>(null)


    return (
        <>
            {/**Adicionando como label para incluir icones no input e ao clicar no icone, o input também receba o foco */}
            <Flex as="label" flex="1" py="4" px="8" ml="6" maxW={400} alignSelf="center" color="gray.200"
                position="relative" bg="gray.800" borderRadius="full">
                <Input ref={searchInputRef} variant="unstyled" color="gray.50" placeholder="Buscar na plataforma"
                    _placeholder={{ color: "gray.400" }} mr="4" px="4" />
                <Icon cursor="pointer" as={RiSearchLine} fontSize="20" />
            </Flex>
        </>
    )
}