import { Button, HStack, Stack, Text } from "@chakra-ui/react";

export function Pagination() {

    return (
        <HStack mt="8" justifyContent="space-between" align="center" spacing="6">
            <Text><strong>0</strong> - <strong>10</strong> de <strong>100</strong></Text>
            <HStack spacing="2">
                <Button size="sm" fontSize="xs" width="4" colorScheme="blackAlpha" disabled _disabled={{
                    cursor: "default"
                }}>1</Button>
                <Button size="sm" fontSize="xs" width="4" colorScheme="blackAlpha" _hover={{
                    bg: "gray.500"
                }}>
                    2
                </Button> <Button size="sm" fontSize="xs" width="4" colorScheme="blackAlpha" _hover={{
                    bg: "gray.500"
                }}>
                    3
                </Button> <Button size="sm" fontSize="xs" width="4" colorScheme="blackAlpha" _hover={{
                    bg: "gray.500"
                }}>
                    4
                </Button>
            </HStack>
        </HStack>
    )
}