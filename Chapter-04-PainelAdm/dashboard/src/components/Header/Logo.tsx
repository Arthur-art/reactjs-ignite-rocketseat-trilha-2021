import { Text } from "@chakra-ui/react";

export function Logo() {
    return (
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
            Dashboard
            <Text as="span" color="red.400">.</Text>
        </Text>
    )
}