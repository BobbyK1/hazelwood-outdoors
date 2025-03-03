import { playfair } from "@/app/fonts/playfair-display";
import { Box, Container, GridItem, Heading, Separator, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";


export default function Maintenance() {
    return (
        <>
            <Box py="20" fontWeight="medium" bg="linear-gradient(180deg, #e9efe5 0%, #fffbf9 2%, #fff 100%)">
                 <Container>
                    <SimpleGrid columns={[1, 1, 1, 2]} gap="10">
                        <GridItem alignContent="center">
                            <Heading as="h2" fontSize="5xl" fontWeight="bold" mb="5" className={playfair.className}>Maintenance</Heading>
    
                            <Box>
                                <Stack id="about" display={["flex"]} direction="row" gap="5" alignItems="center" mb="10">
                                    <Text fontSize="2xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Our Service</Text>
                                    <Separator borderColor="#8cc342" maxW="32" minW="32" />
                                </Stack>
                            </Box>
    
                            <Text lineHeight="1.8">Landscape Design is a creative process that brings to life the dreams of homeowners. Each homeowner has a unique vision for their property and with the help of an expert landscape designer, this vision can be brought to life. The first step in the process is an on-site assessment to understand the client’s vision, lifestyle and requirements that will give you a clear idea of what is needed.</Text>
                        </GridItem>
    
                        <Image width="600" height="300" src="/drawing.jpg" shadow="sm" />
                    </SimpleGrid>
                </Container>

                <Stack id="about" mt="32" display={["none", "none", "flex"]} direction="row" gap="5" alignItems="center" mb="10" mx="auto" w="fit-content">
                    <Separator borderColor="#8cc342" maxW="32" minW="32" />
                    <Text fontSize="2xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Upkeep</Text>
                    <Separator borderColor="#8cc342" maxW="32" minW="32" />
                </Stack>

                <Text textAlign="center" fontWeight="bold" fontSize="4xl" color="black" mt="12">Your Lawn Cared For By Experts</Text>

                <Text textAlign="center" mt="7">From 30 acres, to just a fenced in yard, we ensure the quality of your lawn stays intact <br /> with our commercial-grade process.</Text>
            
                <Text textAlign="center" mt="32" fontWeight="bold" color="black" fontSize="2xl">OUR THREE STEP PROCESS</Text>

                <Text textAlign="center" mt="7">Our process is the same for every client. It all starts with a discovery <br /> consultation to get an understanding of what you are looking for.</Text>

                <Container maxW="4xl" mt="14">
                    <Box p="5" borderWidth="thin" borderRadius="10px">
                        <Text textAlign="center" fontWeight="bold" color="black" fontSize="xl">STEP 1 - DISCOVERY CALL</Text>

                        <Text textAlign="center" color="blackAlpha.700" mt="5" fontWeight="normal">First, we will schedule an on-site meeting to discuss your <br /> property and listen to your needs, requirements, and budget for your <br /> lawncare.</Text>
                    </Box>

                    <Box mt="5" p="5" borderWidth="thin" borderRadius="10px" bgColor="blackAlpha.50">
                        <Text textAlign="center" fontWeight="bold" color="black" fontSize="xl">STEP 2 - PROPOSAL & DEPOSIT</Text>

                        <Text textAlign="center" color="blackAlpha.700" mt="5" fontWeight="normal">After the consultation, we will send you a proposal based on your needs, <br /> along with a deposit amount to secure our working with you.</Text>
                    </Box>

                    <Box mt="5" p="5" borderWidth="thin" borderRadius="10px">
                        <Text textAlign="center" fontWeight="bold" color="black" fontSize="xl">STEP 3 - MAINTENANCE BEGINS</Text>

                        <Text textAlign="center" color="blackAlpha.700" mt="5" fontWeight="normal">After you submit your deposit, we will begin our recurring maintenance.</Text>
                    </Box>
                </Container>
            </Box>
        </>
    )
}