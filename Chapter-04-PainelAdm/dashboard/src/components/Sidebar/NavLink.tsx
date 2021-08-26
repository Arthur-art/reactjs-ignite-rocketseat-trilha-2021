import { Icon, Link as ChakraLink, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends LinkProps {
    title: string;
    icon: ElementType;
    href: string;
}


export function NavLink({ href, title, icon, ...rest }: NavLinkProps) {
    return (
        //Acessando rotas atravez do component Link do next/link
        <ActiveLink href={href} passHref >
            <ChakraLink {...rest} display="flex" alignItems="center">
                <Icon as={icon} />
                <Text ml="4" fontWeight="medium" >{title}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}