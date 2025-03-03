import { playfair } from "@/app/fonts/playfair-display";
import { Box, Button, Center, Container, Flex, Grid, GridItem, Heading, Input, Separator, SimpleGrid, Stack, Text, Textarea } from "@chakra-ui/react";
import Image from "next/image";


export default function DesignBuild() {

    return (
        <Box py="20" color="blackAlpha.800" fontWeight="medium" bg="linear-gradient(180deg, #e9efe5 0%, #fffbf9 2%, #fff 100%)">
            <Container>
                <SimpleGrid columns={[1, 1, 1, 2]} gap="10">
                    <GridItem alignContent="center">
                        <Heading as="h2" fontSize="5xl" fontWeight="bold" mb="5" className={playfair.className}>Design • Build</Heading>

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

            <Box mt="32">
                <Stack id="about" display={["none", "none", "flex"]} direction="row" gap="5" alignItems="center" mb="10" mx="auto" w="fit-content">
                    <Separator borderColor="#8cc342" maxW="32" minW="32" />
                    <Text fontSize="2xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Design</Text>
                    <Separator borderColor="#8cc342" maxW="32" minW="32" />
                </Stack>

                <Text textAlign="center" fontWeight="bold" fontSize="4xl" color="black">Your Outdoor Space Reimagined</Text>

                <Text textAlign="center" mt="7">Whether you’ve got 3 acres to work with or an intimate patio space, we’ve crafted our process to make sure our <br /> designs maximize the potential of your space. Scroll below to learn just how easy our process is.</Text>
            
                <Text textAlign="center" mt="32" fontWeight="bold" color="black" fontSize="2xl">OUR SIX STEP DESIGN PROCESS</Text>

                <Text textAlign="center" mt="7">Our process is the same for every client. It all starts with a discovery <br /> consultation to get an understanding of what you are looking for in your new space.</Text>

                <Container maxW="4xl" mt="14">
                    <Box p="5" borderWidth="thin" borderRadius="10px">
                        <Text textAlign="center" fontWeight="bold" color="black" fontSize="xl">STEP 1 - DISCOVERY CALL</Text>

                        <Text textAlign="center" color="blackAlpha.700" mt="5" fontWeight="normal">First, we will schedule an on-site meeting with our design team to discuss your <br /> upcoming project and listen to your needs, requirements, and budget for your <br /> project.</Text>
                    </Box>

                    <Box mt="5" p="5" borderWidth="thin" borderRadius="10px" bgColor="blackAlpha.50">
                        <Text textAlign="center" fontWeight="bold" color="black" fontSize="xl">STEP 2 - PROPOSAL & DEPOSIT</Text>

                        <Text textAlign="center" color="blackAlpha.700" mt="5" fontWeight="normal">After the consultation, we will send you a design proposal based on your new <br /> project along with a deposit amount to secure our working with you.</Text>
                    </Box>

                    <Box mt="5" p="5" borderWidth="thin" borderRadius="10px">
                        <Text textAlign="center" fontWeight="bold" color="black" fontSize="xl">STEP 3 - BASE MODEL</Text>

                        <Text textAlign="center" color="blackAlpha.700" mt="5" fontWeight="normal">After you submit your deposit, we will have our design team build out the base <br /> model of your home and existing exterior space. During this time we will also <br /> schedule a Zoom video call with you to go over early concepts & inspiration for <br /> your new design.</Text>
                    </Box>

                    <Box mt="5" p="5" borderWidth="thin" borderRadius="10px" bgColor="blackAlpha.50">
                        <Text textAlign="center" fontWeight="bold" color="black" fontSize="xl">STEP 4 - DESIGN MAGIC</Text>

                        <Text textAlign="center" color="blackAlpha.700" mt="5" fontWeight="normal">This is where the magic happens and we begin designing your new luxury, <br /> outdoor space. Every conversation we’ve had with you will be taken into <br /> consideration as we create the best design possible for your space.</Text>
                    </Box>

                    <Box mt="5" p="5" borderWidth="thin" borderRadius="10px">
                        <Text textAlign="center" fontWeight="bold" color="black" fontSize="xl">STEP 5 - DESIGN REVEAL</Text>

                        <Text textAlign="center" color="blackAlpha.700" mt="5" fontWeight="normal">Once your initial design is completed we will hop on a zoom call to give you a 3D, <br /> virtual tour of your new outdoor space. During this call we will discuss any <br /> revisions you would like us to make to the design (and we might even make a few changes live).</Text>
                    </Box>

                    <Box mt="5" p="5" borderWidth="thin" borderRadius="10px" bgColor="blackAlpha.50">
                        <Text textAlign="center" fontWeight="bold" color="black" fontSize="xl">STEP 6 - DESIGN FINALIZATION</Text>

                        <Text textAlign="center" color="blackAlpha.700" mt="5" fontWeight="normal">Finally, we will apply any revisions you requested to the design, and create the <br /> proper documents to send over to your construction team. Now the build-out of <br /> your new private resort design can begin!</Text>
                    </Box>
                </Container>
                

                <Box px={[2, 2, 2, 10]} mt="20">
                    <Grid minH="20" templateColumns="repeat(12, 1fr)" gap="5">
                        <GridItem display={["none", "none", "none", "grid"]} colSpan="4" alignContent="center" justifyContent="center">
                            <Image width={600} height={400} src="/drawing.jpg" />
                        </GridItem>

                        <GridItem justifyContent="center" alignItems="center" colSpan={[12, 12, 12, 8]}>
                            <Stack direction="row" gap="5" alignItems="center" mb="6">
                                <Text fontSize="2xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Design Packages</Text>
                                <Separator borderColor="#8cc342" maxW="24" minW="24" />
                            </Stack>

                            <Grid mb="3" _hover={{ bgColor: "rgba(140,195,66,0.2)" }} transition="0.2s ease" w="full" templateColumns="repeat(12, 1fr)" minH="44">
                                <GridItem px="2" bgColor="rgba(0,0,0,0.05)" colSpan="7" textAlign="center" py="2" alignContent="center">
                                    <Text fontSize={["lg", "lg", "lg", "2xl"]} fontWeight="bold">Essentials - 2D</Text>
                                    <Separator maxW="xs" mx="auto" borderColor="#000" my="2" />
                                    <Text fontSize="sm">2D only. What you need to get rolling. <br /> Measurements and property survey <br />Site map, hardscape plan, lighting plan, plant list <br /> 2 revisions</Text>
                                </GridItem>

                                <GridItem colSpan="5" px="1" fontSize={["md", "md", "lg", "2xl"]} fontWeight="bold" textAlign="center" alignContent="center">
                                    <Text>Turnaround: ~4 weeks</Text>
                                    <Text>Front OR Back</Text>
                                    <Text>Full Property</Text>
                                </GridItem>
                            </Grid>

                            <Grid mb="3" _hover={{ bgColor: "rgba(140,195,66,0.2)" }} transition="0.2s ease" w="full" templateColumns="repeat(12, 1fr)" minH="44">
                                <GridItem px="2" bgColor="rgba(0,0,0,0.05)" colSpan="7" textAlign="center" py="2" alignContent="center">
                                    <Text fontSize={["lg", "lg", "lg", "2xl"]} fontWeight="bold">Essentials - 3D</Text>
                                    <Separator maxW="xs" mx="auto" borderColor="#000" my="2" />
                                    <Text fontSize="sm">Most Popular. <br /> 2D & 3D design renderings <br /> Measurements and property survey <br />Site map, hardscape plan, lighting plan, plant list Material selection <br /> 3 revisions</Text>
                                </GridItem>

                                <GridItem colSpan="5" px="1" fontSize={["md", "md", "lg", "2xl"]} fontWeight="bold" textAlign="center" alignContent="center">
                                    <Text>Turnaround: ~6 weeks</Text>
                                    <Text>Front OR Back</Text>
                                    <Text>Full Property</Text>
                                </GridItem>
                            </Grid>

                            <Grid mb="3" _hover={{ bgColor: "rgba(140,195,66,0.2)" }} transition="0.2s ease" w="full" templateColumns="repeat(12, 1fr)" minH="44">
                                <GridItem px="2" bgColor="rgba(0,0,0,0.05)" colSpan="7" textAlign="center" py="2" alignContent="center">
                                    <Text fontSize={["lg", "lg", "lg", "2xl"]} fontWeight="bold">Premium - Outdoor Transformation</Text>
                                    <Separator maxW="xs" mx="auto" borderColor="#000" my="2" />
                                    <Text fontSize="sm">Everything thats included in ‘Essentials 3D’ <br /> + Design new home exterior, paint, windows, doors, roof & more’ <br />+ Custom, shoppable furniture, appliance & decor selections’ <br /> + Contractor build support’ <br />+ 4 revisions</Text>
                                </GridItem>

                                <GridItem px="1" fontSize={["md", "md", "lg", "2xl"]} fontWeight="bold" colSpan="5" textAlign="center" alignContent="center">
                                    <Text>Turnaround: ~6-8 weeks</Text>
                                    <Text>Front OR Back</Text>
                                    <Text>Full Property</Text>
                                </GridItem>
                            </Grid>

                            <Grid _hover={{ bgColor: "rgba(140,195,66,0.2)" }} transition="0.2s ease" w="full" templateColumns="repeat(12, 1fr)" minH="44">
                                <GridItem px="2" bgColor="rgba(0,0,0,0.05)" colSpan="7" textAlign="center" py="2" alignContent="center">
                                    <Text fontSize={["lg", "lg", "lg", "2xl"]} fontWeight="bold">Custom Pricing</Text>
                                    <Separator maxW="xs" mx="auto" borderColor="#000" my="2" />
                                    <Text fontSize="sm">Properties over 1/2 acre <br /> Properties with unusual terrain or steep inclines/hills <br /> Projects needing a brand new pool design (refinishing existing pools can be done with normal package) <br /> Commercial property</Text>
                                </GridItem>

                                <GridItem colSpan="5" px="1" fontSize={["md", "md", "lg", "2xl"]} fontWeight="bold" textAlign="center" alignContent="center">
                                    <Text fontStyle="italic">Schedule Call <br /> with Designer</Text>
                                </GridItem>
                            </Grid>
                        </GridItem>
                    </Grid>
                </Box>
            
                <Box px={[0, 0, 0, 10]} h="fit-content">
                    <Box position="relative" borderRadius="15px" mt="40" maxW="6xl" mx="auto" bgSize="cover" bgImage="url('https://images.unsplash.com/photo-1460533893735-45cea2212645?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
                        <Flex flexDirection="column" justifyItems="center" color="whitesmoke" borderRadius="15px" maxW="full" bgGradient="linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))" px={[10, 10, 10, 24]} py="20">
                        <Stack direction={["column", "", "", "row"]} alignItems="center" gap="5" w="full">
                            <Box w="full">
                                <Text fontSize={["2xl", "2xl", "2xl", "4xl"]} fontWeight="extrabold">Tell us <br /> <Text as="span" color="#8cc342">YOUR</Text> dream...</Text>
                                <Text fontSize="lg" color="#dadada" mt="8">Submit your request for our <br /> Design • Build service! </Text>
                            </Box>

                            <Box w="full" color="black">
                                <Input variant="subtle" w="full" size="lg" outline="none" borderColor="transparent" _focus={{ borderColor: "#8cc342", borderWidth: "1px" }} _placeholder={{ fontWeight: "semibold" }} placeholder="Your Email..." />
                                <SimpleGrid mt="3" columns={[1, 1, 2]} gap="3">
                                    <Input variant="subtle" size="lg" outline="none" borderColor="transparent" _focus={{ borderColor: "#8cc342", borderWidth: "1px" }} _placeholder={{ fontWeight: "semibold" }} placeholder="Name..." />
                                    <Input variant="subtle" size="lg" outline="none" borderColor="transparent" _focus={{ borderColor: "#8cc342", borderWidth: "1px" }} _placeholder={{ fontWeight: "semibold" }} placeholder="Phone..." />
                                </SimpleGrid>
                                <Textarea mt="3" resize="none" variant="subtle" w="full" size="lg" outline="none" borderColor="transparent" _focus={{ borderColor: "#8cc342", borderWidth: "1px" }} _placeholder={{ fontWeight: "semibold" }} placeholder="Message..." />

                                <Button variant="solid" size="lg" mt="3" w="full" bgColor="rgba(140,195,66,0.9)" _hover={{ bgColor: "rgba(140,195,66,1)" }}>Get Your Coupon</Button>
                            </Box>
                        </Stack>
                        </Flex>
                    </Box>
                </Box>

                <Box my="44">
                    <Text fontSize="6xl" textAlign="center" className={playfair.className}>Already Have A Design?</Text>

                    <Text fontSize="lg" textAlign="center" my="10" fontWeight="semibold">We also offer a build-only service as well. <br /> Click the button below to learn more.</Text>

                    <Center>
                        <Button w="fit-content" variant="solid" bgColor="rgba(140,195,66,0.9)" _hover={{ bgColor: "rgba(140,195,66,1)" }} color="whitesmoke" size="2xl">Build-Only Serivce</Button>
                    </Center>
                </Box>
            </Box>
        </Box>
    )
}