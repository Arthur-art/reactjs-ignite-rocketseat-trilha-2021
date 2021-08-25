import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {

    return (
        <Flex as="header" w="100%" maxW={1480} h="20" mx="4" px="6" align="center" >

            <Logo />

            <SearchBox />

            <Notification />

            <Profile />

        </Flex>
    )
}