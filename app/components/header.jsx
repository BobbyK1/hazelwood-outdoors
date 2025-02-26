import { Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "./ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "./ui/menu";
import Link from "next/link";
import { Down, External, Grass, Wrench } from "./icons";
import HeaderDrawer from "./header-drawer";

export default function Header() {
    return (
        <Stack px="14" direction="row" alignItems="center" justify="space-between" h="28" w="full" bg="white">
                <Link href="/">
                    <Image src="/logo-transparent.png" height="113" width="150" />
                </Link>
                <Stack display={["none", "", "", "flex"]} direction="row" gap="8" alignItems="center">
                    <MenuRoot>
                        <MenuTrigger asChild>
                            <Text display="flex" flexDir="row" alignItems="center" _hover={{ cursor: "pointer" }}>Services <Down fontSize="sm" ml="1" /></Text>
                        </MenuTrigger>
                        <MenuContent>
                            <MenuItem as={Link} href="/maintenance" _hover={{ cursor: "pointer" }}><Grass /> Maintenance</MenuItem>
                            <MenuItem as={Link} href="/design-build" _hover={{ cursor: "pointer" }}><Wrench /> Design • Build</MenuItem>
                            {/* <MenuItem as={Link} href="/" value="3" _hover={{ cursor: "pointer" }}>Test</MenuItem> */}
                        </MenuContent>
                    </MenuRoot>
                    <Text as={Link} href="/">Careers</Text>
                    <Text as={Link} href="/">Contact Us</Text>
                    <Button color="whitesmoke" bgColor="#8cc342" fontWeight="semibold">Login <External /></Button>
                </Stack>
                <HeaderDrawer />
                
                {/* <GridItem colSpan={7} display={["none", "none", "none", "flex"]} alignItems="center">
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
                </GridItem> */}

                {/* <GridItem colSpan="3" display={["none", "none", "none", "flex"]} alignItems="center">
                    <Text as={Link} href="#schedule" fontSize="lg" color="#8cc342" textDecoration="underline" borderRadius="0px">Get A Free Quote</Text>
                </GridItem>

                <GridItem colSpan="3" display={["none", "none", "none", "flex"]} alignItems="center">
                    <Text as={Link} href="/" fontWeight="bold">(219) 555-5555</Text>
                </GridItem> */}

                {/* <GridItem colSpan="6" display={["none", "none", "none", "flex"]} alignItems="center" justifyContent="end">
                    <Button variant="solid" as={Link} href="/" size="lg" bgColor="#8cc342">Log In</Button>
                </GridItem> */}

                {/* <GridItem colSpan={[4, 4, 7]} p="0" display={["flex", "flex", "flex", "none"]} justifyContent="end" alignItems="center">
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
                                        <Text fontSize="lg" as={Link} href="/">Careers</Text>
                                    </Box>

                                    <Separator />

                                    <Box w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                        <Text fontSize="lg" as={Link} href="/">Contact Us</Text>
                                    </Box>

                                    <Button mt="5" w="full" variant="solid" size="md" fontSize="lg" bgColor="#8cc342" borderRadius="0px">Log In</Button>

                                </DrawerBody>
                            </DrawerContent>
                        </DrawerRoot>
                    </Stack>
                </GridItem> */}
            {/* <Box h="14" w="full" bg="#8cc342">
                <Container h="14" maxW="7xl">
                    <Stack direction="row" alignItems="center" h="14" justifyContent="end" gap="5">
                        <Text fontWeight="bold" color="whitesmoke">Access your portal</Text>
                        <Button variant="solid" bgColor="whitesmoke" color="blackAlpha.700" borderRadius="0px">Login <External fontSize="lg" /></Button>
                    </Stack>
                </Container>
            </Box> */}
        </Stack>
    )
}