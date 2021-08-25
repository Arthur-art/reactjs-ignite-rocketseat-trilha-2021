import { Flex, Input, Text, Icon, Stack, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"
import { Logo } from "./Header/Logo";
import { Notification } from "./Header/Notification";
import { Profile } from "./Header/Profile";
import { SearchBox } from "./Header/SearchBox";

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