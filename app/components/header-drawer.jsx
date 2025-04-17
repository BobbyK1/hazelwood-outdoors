"use client"

import { DrawerBackdrop, DrawerBody, DrawerContent, DrawerRoot, DrawerTrigger } from "./ui/drawer";
import { AccordionItem, AccordionItemContent, AccordionItemTrigger, AccordionRoot } from "./ui/accordion";
import { Grass, Hamburger, Wrench } from "./icons";
import { Box, IconButton, Separator, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";




export default function HeaderDrawer() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <DrawerRoot open={open} onOpenChange={e => setOpen(e.open)} ml="auto">
                <DrawerBackdrop />
                <DrawerTrigger asChild>
                    <IconButton display={["inline-block", "", "", "none"]} mr="2" bgColor="rgba(140, 195, 66, 0.8)" rounded="full" size="lg" variant="solid">
                        <Hamburger />
                    </IconButton>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerBody>
                        <Link href="/" onClick={e => setOpen(false)}>
                            <Box mt="5" w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                <Text fontSize="lg">Home</Text>
                            </Box>
                        </Link>

                        <Separator />

                        <AccordionRoot collapsible>
                            <AccordionItem value="1">
                                <AccordionItemTrigger _hover={{ bgColor: "blackAlpha.100", cursor: "pointer" }} transition="0.2s ease" py="4" px="2" fontSize="lg" fontWeight="normal">Services</AccordionItemTrigger>
                                <AccordionItemContent>
                                    <Link href="/maintenance" onClick={e => setOpen(false)}>
                                        <Stack direction="row" alignItems="center" w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                            <Grass fontSize="xl" />
                                            <Text fontSize="md">Maintenance</Text>
                                        </Stack>
                                    </Link>
                                    <Link href="/design-build" onClick={e => setOpen(false)}>
                                        <Stack direction="row" alignItems="center" w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                            <Wrench fontSize="lg" />
                                            <Text fontSize="md">Design • Build</Text>
                                        </Stack>
                                    </Link>
                                    {/* <Box w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                        <Text fontSize="md">Services</Text>
                                    </Box> */}
                                </AccordionItemContent>
                            </AccordionItem>
                        </AccordionRoot>

                        <Link href="/" onClick={e => setOpen(false)}>
                            <Box w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                <Text fontSize="lg">Careers</Text>
                            </Box>
                        </Link>

                        <Separator />

                        <Link href="/" onClick={e => setOpen(false)}>
                            <Box w="full" px="2" py="5" _hover={{ bgColor: "blackAlpha.100" }} transition="0.2s ease">
                                <Text fontSize="lg">Contact Us</Text>
                            </Box>
                        </Link>

                        <Button onClick={e => setOpen(false)} mt="5" w="full" variant="solid" size="md" fontSize="lg" bgColor="#8cc342" borderRadius="0px">Log In</Button>

                    </DrawerBody>
                </DrawerContent>
            </DrawerRoot>
        </>
    )
}