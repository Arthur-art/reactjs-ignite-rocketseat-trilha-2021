import { Button, HStack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {

    return (
        <HStack mt="8" justifyContent={["normal", "space-between"]} direction={["column", "row"]} align="center" spacing="6">
            <Text><strong>0</strong> - <strong>10</strong> de <strong>100</strong></Text>
            <HStack spacing="2">
                <PaginationItem number={1} isCurrent={true} />
                <PaginationItem number={2} />
                <PaginationItem number={3} />
                <PaginationItem number={4} />
                <PaginationItem number={5} />
                <PaginationItem number={6} />
            </HStack>
        </HStack>
    )
}