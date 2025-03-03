import { playfair } from "@/app/fonts/playfair-display";
import { Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Layout({ children }) {


    return (
        <>
            <Box h="96" w="full" bgImage="url('https://images.unsplash.com/photo-1603298108410-e6f28ad2708d?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" bgSize="cover" bgPos="center">
				<Flex alignItems="center" h="full" w="full" px={{ base: "3", md: "5" }} py={{ base: "3", md: "5" }} background="linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0.7))">  
                    <Container color="whitesmoke">
                        <Heading className={playfair.className} as="h1" fontSize={["5xl", "6xl"]} fontWeight="bold">Maintenance</Heading>
                        <Stack fontSize="sm" mt="7" direction="row" gap="2">
                            <Text as={Link} href="/" color="#8cc342" _hover={{ textDecor: "underline" }}>Home</Text>
                            <Text>{`>`}</Text>
                            <Text>Maintenance</Text>
                        </Stack>
                    </Container>
                </Flex>
            </Box>
            {children}
        </>
    )
}