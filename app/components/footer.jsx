import { Box, Container, Grid, GridItem, Separator, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";


export default function Footer() {

    return (
        <>
            <Box w="full" mt="10" py="14" bgColor="blackAlpha.50">
                <Container>
                    <Grid gap="5" templateColumns="repeat(12, 1fr)">
                        <GridItem colSpan={[12, 12, 12, 3]}>
                            <Image src="/logo-transparent.png" width="150" height="75" />
                        </GridItem>
                        <GridItem colSpan={[12, 12, 12, 3]}>
                            <Text fontSize="lg" fontWeight="semibold">Pages</Text>

                            <Separator my="4" />

                            <Text mb="3"><Link href="/">Why Us</Link></Text>
                            <Text mb="3"><Link href="/">Service Area</Link></Text>
                            <Text mb="3"><Link href="/">Careers</Link></Text>
                            <Text mb="3"><Link href="/">Test With More Text</Link></Text>
                        </GridItem>
                        <GridItem colSpan={[12, 12, 12, 3]}>
                            <Text fontSize="lg" fontWeight="semibold">Service</Text>

                            <Separator my="4" />

                            <Text mb="3"><Link href="/">Example 1</Link></Text>
                            <Text mb="3"><Link href="/">Example 2</Link></Text>
                            <Text mb="3"><Link href="/">Example 3</Link></Text>
                        </GridItem>
                        <GridItem colSpan={[12, 12, 12, 3]}>
                            <Text fontSize="lg" fontWeight="semibold">Contact Us</Text>

                            <Separator my="4" />

                            <Text mb="3"><Link href="/">contact@hazelwoodoutdoors.com</Link></Text>
                            <Text mb="3"><Link href="/">+1 (219) 555-5555</Link></Text>
                        </GridItem>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}