import { Stack } from "@chakra-ui/react";
import { Star } from "../icons";


export default function StarGroup({ fontSize, color }) {
    return (
        <>
            <Stack direction="row" gap="1" alignItems="center" fontSize={fontSize} color={color}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </Stack>
        </>
    )
}