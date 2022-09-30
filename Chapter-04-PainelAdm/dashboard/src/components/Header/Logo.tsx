import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    // Cada valor dentro do array de fontsize representa uma resolução
    <Text
      fontSize={['2xl', '3xl', '4xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      Dashboard
      <Text as="span" color="red.400">
        .
      </Text>
    </Text>
  )
}
