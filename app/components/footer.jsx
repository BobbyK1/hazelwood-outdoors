import { Box, Center, Container, Flex, Input, SimpleGrid, Stack, Text, Textarea } from "@chakra-ui/react";
import Link from "next/link";
import { Book, Email, Phone, Schedule } from "./icons";
import { Button } from "./ui/button";
import { playfair } from "../fonts/playfair-display";


export default function Footer() {

    return (
        <>
            <Box h="fit-content" zIndex="-99">
                <Box h="fit-content" w="full" bgImage="url('https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" bgSize="cover" bgPos="center">
                    <Box h="full" w="full" px="5" py="5" background="linear-gradient(to bottom right, rgba(0,0,0,0.9), rgba(0,0,0,0.5))">
                        <Box w="full" borderWidth="2px" borderColor="#8cc342" h="fit-content">
                            <Flex px="2" direction="column" h="full" justifyContent="center" alignItems="center">
                                <Container maxW="7xl" pb="7" pt="32">
                                    <SimpleGrid columns={[1, 1, 2]} gap="10">
                                        <Box color="whitesmoke">
                                            <Text fontSize="2xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Hazelwood Outdoors</Text>
                                            <Text fontSize="6xl" className={playfair.className} my="7">Our <Text as="span" color="#8cc342">Promise</Text></Text>

                                            <Text fontSize="lg">Hazelwood Outdoors will help your family plan, design, & install the project of your dreams. We are professionals at staying on budget, and completing projects on time.</Text>
                                        
                                            <Text fontSize="2xl" mt="5" className={playfair.className}>Michael Hazelwood</Text>
                                            <Text fontSize="lg" fontWeight="medium" mb="14">Owner</Text>

                                            <Text as={Link} href="/" fontSize="2xl" fontWeight="bold"><Phone fontSize="3xl" mr="2" color="#8cc342" /> (219) 555-5555</Text>

                                            <Box my="5" />
                                            <Text as={Link} href="/" fontSize="xl"><Email fontSize="3xl" mr="2" color="#8cc342" /> contact@hazelwoodoutdoors.com</Text>
                                        </Box>
                                        <Box alignContent="end">
                                            <Box h="fit-content" maxW="sm" mx="auto" padding="5" bgColor="white" borderRadius="5px">
                                                <Text fontSize="3xl" color="black" fontWeight="extrabold">Get a quote</Text>
        
                                                <Textarea w="full" h="24" resize="none" placeholder="Message" mt="3" />
        
                                                <Stack direction={["column", "column", "column", "row"]} gap="3" mt="3">
                                                    <Input variant="outline" outline="none" _focus={{ borderColor: "#8cc342", borderWidth: "1px" }} placeholder="First Name" />
                                                    <Input variant="outline" outline="none" _focus={{ borderColor: "#8cc342", borderWidth: "1px" }} placeholder="Last Name" />
                                                </Stack>
                                                <Stack mb="6" direction={["column", "column", "column", "row"]} gap="3" mt="3">
                                                    <Input variant="outline" outline="none" _focus={{ borderColor: "#8cc342", borderWidth: "1px" }} placeholder="Phone" />
                                                    <Input type="email" variant="outline" outline="none" _focus={{ borderColor: "#8cc342", borderWidth: "1px" }} placeholder="Email" />
                                                </Stack>
                                            </Box>
                                            <Center mt="-1.3em">
                                                <Button maxW="20em" minW="14em" size="xl" color="white" bgColor="rgba(140,195,66,1)" _hover={{ transform: 'scale(1.02)' }}>Send Message</Button>
                                            </Center>
                                        </Box>
                                    </SimpleGrid>

                                    <Stack direction={["column", "", "", "row"]} justify="space-between" alignItems={["start", "", "", "center"]} color="whitesmoke" mt="32" gap="5">
                                        <Text as={Link} href="/" fontSize="lg"><Schedule fontSize="2xl" mr="2" color="#8cc342" /> Book a free call</Text>
                                        <Text as={Link} href="/" fontSize="lg"><Book fontSize="2xl" mr="2" color="#8cc342" /> Book a site visit</Text>
                                        <Box>
                                            <Text fontSize="lg" textAlign={["left", "", "", "right"]}>Hazelwood Outdoors &copy; 2025</Text>
                                        </Box>
                                    </Stack>
                                </Container>
                            </Flex>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}