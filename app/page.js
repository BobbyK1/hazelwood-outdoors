import NextImage from "next/image";
import styles from "./page.module.css";
import { Box, Center, Container, Flex, Grid, GridItem, Heading, Image, Input, Separator, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Build, Check, Conversation, Design, Down } from "./components/icons";
import { Button } from "./components/ui/button";

export default function Home() {
	return (
		<>
			<Box h={["65vh", "80vh", "105vh"]}>
				<Box h={["60vh", "65vh", "95vh"]} w="full" position="relative" bgImage="url('/main-cover.jpg')" bgSize="cover" bgPos="center">
					<Box h="full" w="full" px="5" py="5" position="absolute" top="0" left="0" right="0" background="linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0.9))">
						<Box position="relative" w="full" borderWidth="2px" borderColor="#8cc342" h="full" pt="56">
							<Flex px="2" direction="row" w="full" h="full" justifyContent="center">
								<Box maxW="3xl" color="whitesmoke">
									<Stack display={["none", "none", "flex"]} direction="row" gap="5" alignItems="center" mb="6">
										<Text fontSize="2xl" fontWeight="semibold" color="#8cc342">Landscape Pros</Text>
										<Separator borderColor="#8cc342" maxW="52" />
									</Stack>
									
									<Heading as="h1" fontSize={["4xl", "4xl", "6xl"]} textAlign={["center", "center", "left"]} lineHeight="1.5">Stunning Landscapes <br /> To Inspire Your Family</Heading>

									<Text fontSize="xl" textAlign={["center", "center", "left"]} mt="10">Scroll Down <Down /></Text>
									
									<Image aspectRatio="16 / 9" mt="10" src="https://placehold.co/650x400" objectFit="cover" w="full" borderRadius="10px" />
								</Box>
							</Flex>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box py="32">
				<Container maxW="6xl">
					<Stack display={["none", "none", "flex"]} direction="row" gap="5" alignItems="center" mb="6">
						<Text fontSize="2xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">About Us</Text>
						<Separator borderColor="#8cc342" maxW="52" />
					</Stack>
					<Grid borderRadius="5px" px="2" templateColumns="repeat(2, 1fr)" gap="10">
						<GridItem colSpan={[2, 2, 2, 1]}>
							<Heading mt="5" as="h2" fontWeight="bold" fontSize="3xl" textTransform="uppercase">Hazelwood Outdoors</Heading>
							<Text mt="5" mb="5" fontSize="xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere ac diam eget sodales. Quisque rhoncus elit sed ligula accumsan, eu pellentesque mi viverra. Integer et erat efficitur, dictum diam eu, mollis nunc. Suspendisse gravida commodo tellus, sit amet faucibus nisl tempus id</Text>
						
							<Text fontSize="lg" color="#555" mt="10" fontWeight="bold">Speak with a landscape expert</Text>

							<Button variant="ghost" mt="10" size="lg"><Conversation color="#8cc342" fontSize="3xl" /> Talk with us</Button>
						</GridItem>
						<GridItem colSpan={[2, 2, 2, 1]}>
							<Box>


								<Stack my="3" direction="row" gap="8">
									<Design color="#8cc342" fontSize="5xl" />
									<Box>
										<Text fontSize="lg" fontWeight="bold">Design</Text>

										<Text mt="2" fontSize="md">Throughout the entire process, our attention to detail creates a superior level of quality.</Text>
									</Box>
								</Stack>

								<Stack my="3" direction="row" gap="8">
									<Build color="#8cc342" fontSize="5xl" />
									<Box>
										<Text fontSize="lg" fontWeight="bold">Build	</Text>

										<Text mt="2" fontSize="md">Our contractors have decades of experience in building & creating dream spaces.</Text>
									</Box>
								</Stack>
							</Box>
						</GridItem>
					</Grid>

					<SimpleGrid mt="10" columns="3" alignItems="center" justifyContent="center" gap="6">
						<Box w="full" h="52" px="16" bgImage="url('https://placehold.co/350x200')" borderRadius="lg">
							<Box bgColor="#8cc342" py="1" mt="12em" textAlign="center" color="whitesmoke" rounded="full" fontWeight="semibold">Design</Box>
						</Box>

						<Box w="full" h="52" px="16" bgImage="url('https://placehold.co/350x200')" borderRadius="lg">
							<Box bgColor="#8cc342" py="1" mt="12em" textAlign="center" color="whitesmoke" rounded="full" fontWeight="semibold">Landscaping</Box>
						</Box>

						<Box w="full" h="52" px="16" bgImage="url('https://placehold.co/350x200')" borderRadius="lg">
							<Box bgColor="#8cc342" py="1" mt="12em" textAlign="center" color="whitesmoke" rounded="full" fontWeight="semibold">Hardscaping</Box>
						</Box>

						<Box w="full" h="52" px="16" bgImage="url('https://placehold.co/350x200')" borderRadius="lg">
							<Box bgColor="#8cc342" py="1" mt="12em" textAlign="center" color="whitesmoke" rounded="full" fontWeight="semibold">Pergolas & Cabanas</Box>
						</Box>

						<Box w="full" h="52" px="16" bgImage="url('https://placehold.co/350x200')" borderRadius="lg">
							<Box bgColor="#8cc342" py="1" mt="12em" textAlign="center" color="whitesmoke" rounded="full" fontWeight="semibold">Outdoor Kitchens</Box>
						</Box>

						<Box w="full" h="52" px="16" bgImage="url('https://placehold.co/350x200')" borderRadius="lg">
							<Box bgColor="#8cc342" py="1" mt="12em" textAlign="center" color="whitesmoke" rounded="full" fontWeight="semibold">Fire Pits & Fire Places</Box>
						</Box>
					</SimpleGrid>
				</Container>

				<Separator variant="dashed" my="24" maxW="4xl" mx="auto" />

				<Box px="10">
					<Grid minH="20" templateColumns="repeat(12, 1fr)" gap="5">
						<GridItem colSpan="4" alignContent="center" justifyContent="center">
							<Image src="https://placehold.co/600x400" />
						</GridItem>

						<GridItem justifyContent="center" alignItems="center" colSpan="8">
							<Stack display={["none", "none", "flex"]} direction="row" gap="5" alignItems="center" mb="6">
								<Text fontSize="2xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Design Packages</Text>
								<Separator borderColor="#8cc342" maxW="52" />
							</Stack>

							<Grid mb="3" _hover={{ bgColor: "rgba(140,195,66,0.2)" }} transition="0.2s ease" w="full" templateColumns="repeat(12, 1fr)" minH="44">
								<GridItem bgColor="rgba(0,0,0,0.05)" colSpan="7" textAlign="center" py="2" alignContent="center">
									<Text fontSize="2xl" fontWeight="bold">Essentials - 2D</Text>
									<Separator maxW="xs" mx="auto" borderColor="#000" my="2" />
									<Text fontSize="sm">2D only. What you need to get rolling. <br /> Measurements and property survey <br />Site map, hardscape plan, lighting plan, plant list <br /> 2 revisions</Text>
								</GridItem>

								<GridItem colSpan="5" textAlign="center" alignContent="center">
									<Text fontSize="2xl" fontWeight="bold">Turnaround: ~4 weeks</Text>
									<Text fontSize="2xl" fontWeight="bold">Front OR Back</Text>
									<Text fontSize="2xl" fontWeight="bold">Full Property</Text>
								</GridItem>
							</Grid>

							<Grid mb="3" _hover={{ bgColor: "rgba(140,195,66,0.2)" }} transition="0.2s ease" w="full" templateColumns="repeat(12, 1fr)" minH="44">
								<GridItem bgColor="rgba(0,0,0,0.05)" colSpan="7" textAlign="center" py="2" alignContent="center">
									<Text fontSize="2xl" fontWeight="bold">Essentials - 3D</Text>
									<Separator maxW="xs" mx="auto" borderColor="#000" my="2" />
									<Text fontSize="sm">Most Popular. <br /> 2D & 3D design renderings <br /> Measurements and property survey <br />Site map, hardscape plan, lighting plan, plant list Material selection <br /> 3 revisions</Text>
								</GridItem>

								<GridItem colSpan="5" textAlign="center" alignContent="center">
									<Text fontSize="2xl" fontWeight="bold">Turnaround: ~6 weeks</Text>
									<Text fontSize="2xl" fontWeight="bold">Front OR Back</Text>
									<Text fontSize="2xl" fontWeight="bold">Full Property</Text>
								</GridItem>
							</Grid>

							<Grid mb="3" _hover={{ bgColor: "rgba(140,195,66,0.2)" }} transition="0.2s ease" w="full" templateColumns="repeat(12, 1fr)" minH="44">
								<GridItem bgColor="rgba(0,0,0,0.05)" colSpan="7" textAlign="center" py="2" alignContent="center">
									<Text fontSize="2xl" fontWeight="bold">Premium - Outdoor Transformation</Text>
									<Separator maxW="xs" mx="auto" borderColor="#000" my="2" />
									<Text fontSize="sm">Everything thats included in ‘Essentials 3D’ <br /> + Design new home exterior, paint, windows, doors, roof & more’ <br />+ Custom, shoppable furniture, appliance & decor selections’ <br /> + Contractor build support’ <br />+ 4 revisions</Text>
								</GridItem>

								<GridItem colSpan="5" textAlign="center" alignContent="center">
									<Text fontSize="2xl" fontWeight="bold">Turnaround: ~6-8 weeks</Text>
									<Text fontSize="2xl" fontWeight="bold">Front OR Back</Text>
									<Text fontSize="2xl" fontWeight="bold">Full Property</Text>
								</GridItem>
							</Grid>

							<Grid _hover={{ bgColor: "rgba(140,195,66,0.2)" }} transition="0.2s ease" w="full" templateColumns="repeat(12, 1fr)" minH="44">
								<GridItem bgColor="rgba(0,0,0,0.05)" colSpan="7" textAlign="center" py="2" alignContent="center">
									<Text fontSize="2xl" fontWeight="bold">Custom Pricing</Text>
									<Separator maxW="xs" mx="auto" borderColor="#000" my="2" />
									<Text fontSize="sm">Properties over 1/2 acre <br /> Properties with unusual terrain or steep inclines/hills <br /> Projects needing a brand new pool design (refinishing existing pools can be done with normal package) <br /> Commercial property</Text>
								</GridItem>

								<GridItem colSpan="5" textAlign="center" alignContent="center">
									<Text fontSize="2xl" fontWeight="bold" fontStyle="italic">Schedule Call <br /> with Designer</Text>
								</GridItem>
							</Grid>
						</GridItem>
					</Grid>
				</Box>

				<Box position="relative" borderRadius="15px" mt="40" w="6xl" mx="auto" minH="72" bgSize="cover" bgImage="url('https://images.unsplash.com/photo-1460533893735-45cea2212645?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
					<Box minH="full" color="whitesmoke" borderRadius="15px" h="full" w="full" position="absolute" top="0" left="0" right="0" bgGradient="linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))">
						<Stack direction="row" minH="full" px="24" py="5" alignItems="center">
							<Box w="full">
								<Text fontSize="4xl" fontWeight="extrabold">Landscape Design <br /> up to <Text as="span" color="#8cc342">$4,000 OFF!</Text></Text>
								<Text fontSize="lg" color="#dadada" mt="8">Submit your Request for <br /> a discount</Text>
							</Box>

							<Box w="full" color="black">
								<Input variant="subtle" w="full" size="lg" outline="none" borderColor="transparent" _focus={{ borderColor: "#8cc342", borderWidth: "2px" }} _placeholder={{ fontWeight: "semibold" }} placeholder="Your Email..." />
								<SimpleGrid mt="3" columns="2" gap="2">
									<Input variant="subtle" size="lg" outline="none" borderColor="transparent" _focus={{ borderColor: "#8cc342", borderWidth: "2px" }} _placeholder={{ fontWeight: "semibold" }} placeholder="Name..." />
									<Input variant="subtle" size="lg" outline="none" borderColor="transparent" _focus={{ borderColor: "#8cc342", borderWidth: "2px" }} _placeholder={{ fontWeight: "semibold" }} placeholder="Phone..." />
								</SimpleGrid>

								<Button variant="solid" size="lg" mt="3" w="full" bgColor="rgba(140,195,66,0.9)" _hover={{ bgColor: "rgba(140,195,66,1)" }}>Get Your Coupon</Button>
							</Box>
						</Stack>
					</Box>
				</Box>

				<Box my="44">
					<Text fontSize="5xl" textAlign="center" fontWeight="semibold">Already Have A Design?</Text>

					<Text fontSize="lg" textAlign="center" my="10">We also offer a build-only service as well. <br /> Click the button below to learn more.</Text>

					<Center>
						<Button borderRadius="0" w="fit-content" variant="solid" bgColor="rgba(140,195,66,0.9)" _hover={{ bgColor: "rgba(140,195,66,1)" }} color="whitesmoke" size="2xl">Build-Only Serivce</Button>
					</Center>

				</Box>
			</Box>
		</>
	);
}
