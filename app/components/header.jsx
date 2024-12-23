import { Box, Container, DrawerTrigger, Grid, GridItem, IconButton, Separator, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import Link from "next/link";
import { Down, Hamburger } from "./icons";
import { DrawerBackdrop, DrawerBody, DrawerContent, DrawerRoot } from "./ui/drawer";
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "./ui/accordion";

export default function Header() {
    return (
        <Box zIndex="999" position="absolute" left="0" top="10" right="0" w="full">
            <Box h="fit-content" w="full">
                <Grid color="whitesmoke" fontWeight="semibold" px={[6, 6, 10, 12, 20]} w="full" templateColumns={["repeat(10, 1fr)", "repeat(10, 1fr)", "repeat(14, 1fr)", "repeat(20, 1fr)"]} columns="3" alignItems="center">
                    <GridItem colSpan={[6, 6, 7, 4]} display="flex" alignItems="center">
                        <Image src="/logo-transparent.png" height="113" width="200" />
                    </GridItem>
                    <GridItem colSpan={7} display={["none", "none", "none", "flex"]} alignItems="center">
                        <Stack direction="row" alignItems="center" gap="8">
                            <MenuRoot>
                                <MenuTrigger asChild>
                                    <Text display="flex" flexDir="row" alignItems="center" _hover={{ cursor: "pointer" }}>Services <Down fontSize="sm" ml="1" /></Text>
                                </MenuTrigger>
                                <MenuContent size="md">
                                    <MenuItem as={Link} href="/" value="1" _hover={{ cursor: "pointer" }}>Test</MenuItem>
                                    <MenuItem as={Link} href="/" value="2" _hover={{ cursor: "pointer" }}>Test</MenuItem>
                                    <MenuItem as={Link} href="/" value="3" _hover={{ cursor: "pointer" }}>Test</MenuItem>
                                </MenuContent>
                            </MenuRoot>
                            <Text as={Link} href="/">Careers</Text>
                            <Text as={Link} href="/">Contact Us</Text>
                        </Stack>
                    </GridItem>

                    <GridItem colSpan="3" display={["none", "none", "none", "flex"]} alignItems="center">
                        <Text fontSize="lg" color="#8cc342" textDecoration="underline" borderRadius="0px">Get A Free Quote</Text>
                    </GridItem>

                    <GridItem colSpan="3" display={["none", "none", "none", "flex"]} alignItems="center">
                        <Text as={Link} href="/" fontWeight="bold">(219) 779-5752</Text>
                    </GridItem>

                    <GridItem colSpan="3" display={["none", "none", "none", "flex"]} alignItems="center">
                        <Button variant="solid" borderRadius="0px" as={Link} href="/" size="lg" bgColor="#8cc342">Log In</Button>
                    </GridItem>

                    <GridItem colSpan={[4, 4, 7]} p="0" display={["flex", "flex", "flex", "none"]} justifyContent="end" alignItems="center">
                        <Stack direction="row" justifyContent="end">
                            <DrawerRoot>
                                <DrawerBackdrop />
                                <DrawerTrigger asChild>
                                    <IconButton mr="2" bgColor="rgba(140, 195, 66, 0.8)" rounded="full" size="lg" variant="solid">
                                        <Hamburger />
                                    </IconButton>
                                </DrawerTrigger>
                                <DrawerContent>
                                    <DrawerBody>
                                        <Box w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                            <Text fontSize="lg" as={Link} href="/">Why Us</Text>
                                        </Box>
                                        <Separator />
                                        <AccordionRoot collapsible>
                                            <AccordionItem value="1">
                                                <AccordionItemTrigger py="4" px="2" fontSize="lg" fontWeight="normal">Services</AccordionItemTrigger>
                                                <AccordionItemContent>
                                                    <Box w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                                        <Text fontSize="md">Services</Text>
                                                    </Box>
                                                    <Box w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                                        <Text fontSize="md">Services</Text>
                                                    </Box>
                                                    <Box w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                                        <Text fontSize="md">Services</Text>
                                                    </Box>
                                                </AccordionItemContent>
                                            </AccordionItem>
                                        </AccordionRoot>
                                        
                                        <Separator />
                                        <Box w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                            <Text fontSize="lg" as={Link} href="/">Service Area</Text>
                                        </Box>
                                        <Separator />
                                        <Box w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                            <Text fontSize="lg" as={Link} href="/">Careers</Text>
                                        </Box>
                                        <Separator />
                                        <Box w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                            <Text fontSize="lg" as={Link} href="/">Test With More Text</Text>
                                        </Box>

                                        <Button mt="5" w="full" variant="solid" size="md" fontSize="lg" bgColor="#8cc342" borderRadius="0px">Get A Free Quote</Button>

                                    </DrawerBody>
                                </DrawerContent>
                            </DrawerRoot>
                        </Stack>
                    </GridItem>
                </Grid>
                {/* <Box h="14" w="full" bg="#8cc342">
                    <Container h="14" maxW="7xl">
                        <Stack direction="row" alignItems="center" h="14" justifyContent="end" gap="5">
                            <Text fontWeight="bold" color="whitesmoke">Access your portal</Text>
                            <Button variant="solid" bgColor="whitesmoke" color="blackAlpha.700" borderRadius="0px">Login <External fontSize="lg" /></Button>
                        </Stack>
                    </Container>
                </Box> */}
            </Box>
        </Box>
    )
}