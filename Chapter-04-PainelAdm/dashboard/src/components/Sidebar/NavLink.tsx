import { Icon, Link, Text, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends LinkProps {
    title: string;
    icon: ElementType;
}

export function NavLink({ title, icon, ...rest }: NavLinkProps) {
    return (
        <Link {...rest} display="flex" alignItems="center">
            <Icon as={icon} />
            <Text ml="4" fontWeight="medium" >{title}</Text>
        </Link>
    )
}