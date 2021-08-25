import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <>
            {/**Dados do perfil */}
            <Flex align="center" >
                {showProfileData && <Box mr="4" textAlign="right">
                    <Text>Arthur Teixeira S. Silva</Text>
                    <Text color="gray.300" as="small">arthurteixeira.guts@gmail.com</Text>
                </Box>}
                <Avatar bgColor="gray.300" size="md" name="Arthur Teixeira S. Silva"
                    src="https://avatars.githubusercontent.com/u/54858003?v=4" />
            </Flex >
        </>
    )
}