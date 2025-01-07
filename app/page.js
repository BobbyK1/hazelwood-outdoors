import { Box, Center, Circle, Container, Flex, Grid, GridItem, Heading, Image, Input, Separator, SimpleGrid, Stack, Text, Textarea } from "@chakra-ui/react";
import { Build, Check, Conversation, Design, Down, External, Facebook, Google, GoogleFullColor, Insta, Layout, Options, Price, Size, UpwardTrend, Yelp } from "./components/icons";
import { Button } from "./components/ui/button";
import Link from "next/link";
import { Nothing_You_Could_Do, Playfair_Display } from 'next/font/google'
import AnimatedSteps from "./components/ui/animated-steps";
import { Avatar } from "./components/ui/avatar";
import StarGroup from "./components/ui/star-group";

const nothing = Nothing_You_Could_Do({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400']
})

const playfair = Playfair_Display({
	subsets: ['latin'],
	weight: ['400'],
	display: "swap",
})

export default function Home() {
	return (
		<>
				<Box h={["35em", "55em"]} w="full" bgImage="url('/main-cover.jpg')" bgSize="cover" bgPos="center">
					<Box h="full" w="full" px="5" py="5" background="linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0.9))">
						<Box w="full" borderWidth="2px" borderColor="#8cc342" h="full" pt="56">
							<Flex px="2" direction="row" w="full" h="full" justifyContent="center">
								<Box minW={["", "", "", "4xl", "5xl"]} color="whitesmoke">
									<Stack display={["none", "none", "flex"]} direction="row" gap="5" alignItems="center" mb="6">
										<Text fontSize="2xl" fontWeight="semibold" color="#8cc342">Landscape Pros</Text>
										<Separator borderColor="#8cc342" maxW="52" />
									</Stack>
									
									<Heading mb="10" as="h1" fontSize={["4xl", "4xl", "6xl"]} className={playfair.className} textAlign={["center", "center", "left"]} lineHeight="1.5">Stunning Landscapes <br /> To <Text fontWeight="bold" as="span" color="#8cc342" className={nothing.className}>Inspire</Text> Your Family</Heading>

									<Text as={Link} href="#about" fontSize="xl" textAlign={["center", "center", "left"]} >Scroll Down <Down /></Text>
									
									<Image aspectRatio="16 / 9" mt="10" src="https://placehold.co/650x400" objectFit="cover" w="full" borderRadius="10px" />
								</Box>
							</Flex>
						</Box>
					</Box>
				</Box>

			<Box pb="32" pt={["10em", "", "", "20em", "28em"]} bg="linear-gradient(180deg, #e9efe5 0%, #fffbf9 2%, #fff 100%)">
				<Container maxW="6xl">
					<Stack id="about" display={["none", "none", "flex"]} direction="row" gap="5" alignItems="center" mb="6">
						<Text fontSize="2xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">About Us</Text>
						<Separator borderColor="#8cc342" maxW="52" />
					</Stack>
					<Grid borderRadius="5px" px="2" templateColumns="repeat(2, 1fr)" gap="10">
						<GridItem colSpan={[2, 2, 2, 1]}>
							<Heading mt="5" as="h2" fontWeight="bold" fontSize="3xl" textTransform="uppercase">Hazelwood Outdoors</Heading>
							<Text mt="5" mb="5" fontSize="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere ac diam eget sodales. Quisque rhoncus elit sed ligula accumsan, eu pellentesque mi viverra. Integer et erat efficitur, dictum diam eu, mollis nunc. Suspendisse gravida commodo tellus, sit amet faucibus nisl tempus id</Text>
						
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

					<SimpleGrid mt="10" columns={[1, 1, 2, 3]} alignItems="center" justifyContent="center" gap="6">
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

				<Box px={[2, 2, 2, 10]}>
					<Grid minH="20" templateColumns="repeat(12, 1fr)" gap="5">
						<GridItem display={["none", "none", "none", "grid"]} colSpan="4" alignContent="center" justifyContent="center">
							<Image src="https://placehold.co/600x400" />
						</GridItem>

						<GridItem justifyContent="center" alignItems="center" colSpan={[12, 12, 12, 8]}>
							<Stack direction="row" gap="5" alignItems="center" mb="6">
								<Text fontSize="2xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Design Packages</Text>
								<Separator borderColor="#8cc342" maxW="24" />
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

				<Box px="10" h="fit-content">
					<Box position="relative" borderRadius="15px" mt="40" maxW="6xl" mx="auto" bgSize="cover" bgImage="url('https://images.unsplash.com/photo-1460533893735-45cea2212645?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
						<Flex flexDirection="column" justifyItems="center" color="whitesmoke" borderRadius="15px" maxW="full" bgGradient="linear-gradient(to bottom right, rgba(0,0,0,0.8), rgba(0,0,0,0.2))" px={[10, 10, 10, 24]} py="20">
						<Stack direction={["column", "", "", "row"]} alignItems="center" gap="5" w="full">
							<Box w="full">
								<Text fontSize={["2xl", "2xl", "2xl", "4xl"]} fontWeight="extrabold">Landscape Design <br /> up to <Text as="span" color="#8cc342">$4,000 OFF!</Text></Text>
								<Text fontSize="lg" color="#dadada" mt="8">Submit your Request for <br /> a discount</Text>
							</Box>

							<Box w="full" color="black">
								<Input variant="subtle" w="full" size="lg" outline="none" borderColor="transparent" _focus={{ borderColor: "#8cc342", borderWidth: "2px" }} _placeholder={{ fontWeight: "semibold" }} placeholder="Your Email..." />
								<SimpleGrid mt="3" columns={[1, 1, 2]} gap="3">
									<Input variant="subtle" size="lg" outline="none" borderColor="transparent" _focus={{ borderColor: "#8cc342", borderWidth: "2px" }} _placeholder={{ fontWeight: "semibold" }} placeholder="Name..." />
									<Input variant="subtle" size="lg" outline="none" borderColor="transparent" _focus={{ borderColor: "#8cc342", borderWidth: "2px" }} _placeholder={{ fontWeight: "semibold" }} placeholder="Phone..." />
								</SimpleGrid>

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

				<Container maxW="7xl">
					<Box color="whitesmoke" w="full" borderRadius="5px" bgImage="url('https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')">
						<Box py="20" px={[5, 5, 5, 14]} borderRadius="5px" shadow="2xl" bgColor="rgba(0,0,0,0.55)">
							<Stack direction="row" gap="5" alignItems="center" mb="6">
								<Text fontSize="xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">All Phases Of Landscaping</Text>
								<Separator borderColor="#8cc342" maxW="24" />
							</Stack>

							<SimpleGrid columns="3" gap="10">
								<GridItem colSpan={[3, 3, 3, 2]}>
									<Text fontWeight="bold" fontSize="4xl">We draw inspiration from nature</Text>

									<Text fontSize="md" mt="5">Well done landscape design can add a considerable amount of value to your property, not to mention, increase the aesthetic appeal, and provide a great first impression on guests or potential customers.</Text>
								
									<Text fontSize="md" mt="7">Our landscape designers can completely transform the look and feel of your home. By adding lush flowers, magnificent trees, and innovative, customized designs, we can create your dream front or backyard oasis.</Text>
								
									<Text fontSize="md" mt="7">We offer a wide variety of landscaping services including (but not limited to):</Text>

									<Grid templateColumns="repeat(2, 1fr)" mt="10">
										<GridItem >
											<Stack direction="row" alignItems="center">
												<Check fontSize="lg" />
												<Text>Test Text</Text>
											</Stack>

											<Stack direction="row" mt="3" alignItems="center">
												<Check fontSize="lg" />
												<Text>Test Text</Text>
											</Stack>

											<Stack direction="row" mt="3" alignItems="center">
												<Check fontSize="lg" />
												<Text>Test Text</Text>
											</Stack>

											<Stack direction="row" mt="3" alignItems="center">
												<Check fontSize="lg" />
												<Text>Test Text</Text>
											</Stack>
										</GridItem>

										<GridItem >
											<Stack direction="row" alignItems="center">
												<Check fontSize="lg" />
												<Text>Test Text</Text>
											</Stack>

											<Stack direction="row" mt="3" alignItems="center">
												<Check fontSize="lg" />
												<Text>Test Text</Text>
											</Stack>

											<Stack direction="row" mt="3" alignItems="center">
												<Check fontSize="lg" />
												<Text>Test Text</Text>
											</Stack>

											<Stack direction="row" mt="3" alignItems="center">
												<Check fontSize="lg" />
												<Text>Test Text</Text>
											</Stack>

											<Stack direction="row" mt="3" alignItems="center">
												<Check fontSize="lg" />
												<Text>Test Text</Text>
											</Stack>

											<Stack direction="row" mt="3" alignItems="center">
												<Check fontSize="lg" />
												<Text>Test Text</Text>
											</Stack>
										</GridItem>
									</Grid>
								</GridItem>

								<GridItem colSpan={[3, 3, 3, 1]} alignContent="end">
									<Box h="fit-content" w="full" padding="5" bgColor="white" borderRadius="5px">
										<Text fontSize="3xl" color="black" fontWeight="extrabold">Get a quote</Text>

										<Textarea w="full" placeholder="Message" mt="3" />

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
								</GridItem>
							</SimpleGrid>
						</Box>
					</Box>
				</Container>

				<Container maxW="6xl" mt="20">
					<Center>
						<Stack direction="row" gap="5" alignItems="center" mb="6">
							<Text fontSize="xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Portfolio</Text>
							<Separator borderColor="#8cc342" minW="24" maxW="24" />
						</Stack>
					</Center>

					<Text fontSize="4xl" fontWeight="bold" textAlign="center">Recent <Text as="span" className={nothing.className} color="#8cc342">Projects</Text></Text>

					<SimpleGrid columns="12" mt="10" gap="4">
						<GridItem colSpan={[12, 12, 6, 5]}>
							<Image h="250px" w="full" objectFit="cover" src="https://placehold.co/650x250" />
						</GridItem>
						<GridItem colSpan={[12, 12, 6, 4]}>
							<Image h="250px" w="full" objectFit="cover" src="https://placehold.co/650x250" />
						</GridItem>
						<GridItem colSpan={[12, 12, 6, 3]}>
							<Image h="250px" w="full" objectFit="cover" src="https://placehold.co/650x250" />
						</GridItem>
						
						<GridItem colSpan={[12, 12, 6, 4]}>
							<Image h="250px" w="full" objectFit="cover" src="https://placehold.co/650x250" />
						</GridItem>
						<GridItem colSpan={[12, 12, 6, 5]}>
							<Image h="250px" w="full" objectFit="cover" src="https://placehold.co/650x250" />
						</GridItem>
						<GridItem colSpan={[12, 12, 6, 3]}>
							<Image h="250px" w="full" objectFit="cover" src="https://placehold.co/650x250" />
						</GridItem>
					</SimpleGrid>
				</Container>

				<Container maxW="8xl" mt="20">
					<Center>
						<Stack direction="row" gap="5" alignItems="center" mb="6">
							<Text fontSize="xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Instagram</Text>
							<Separator borderColor="#8cc342" minW="24" maxW="24" />
						</Stack>
					</Center>

					<Text fontSize="4xl" fontWeight="bold" textAlign="center">Follow Us On <Text as="span" className={nothing.className} color="#8cc342">Instagram</Text></Text>
				
					<Grid templateColumns="repeat(12, 1fr)" mt="10" gap="4">
						<GridItem colSpan={[6, 6, 3, 3]}>
							<Image src="https://placehold.co/550" />
						</GridItem>
						<GridItem colSpan={[6, 6, 3, 3]}>
							<Image src="https://placehold.co/550" />
						</GridItem>
						<GridItem colSpan={[6, 6, 3, 3]}>
							<Image src="https://placehold.co/550" />
						</GridItem>
						<GridItem colSpan={[6, 6, 3, 3]}>
							<Image src="https://placehold.co/550" />
						</GridItem>
						<GridItem colSpan={[6, 6, 3, 3]}>
							<Image src="https://placehold.co/550" />
						</GridItem>
						<GridItem colSpan={[6, 6, 3, 3]}>
							<Image src="https://placehold.co/550" />
						</GridItem>
						<GridItem colSpan={[6, 6, 3, 3]}>
							<Image src="https://placehold.co/550" />
						</GridItem>
						<GridItem colSpan={[6, 6, 3, 3]}>
							<Image src="https://placehold.co/550" />
						</GridItem>
					</Grid>

					<Center>
						<Button variant="solid" size="sm" mt="5" bgColor="#4c68d7"><Insta /> Follow Us On Instagram</Button>
					</Center>
				</Container>

				<Box mb="60" h="45em" mt="20" w="full" bgPos="center" bgSize="cover" bgImage="url('https://images.unsplash.com/photo-1734079692147-c6fc9438a2d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dx')">
					<Box h="45em" py="20" px={[5, 5, 5, 14]} borderRadius="5px" shadow="2xl" bgColor="rgba(0,0,0,0.45)">
						<Box ml={[0, 0, 0, "20em"]} mt="15em" maxW="md">
							<Stack direction="row" gap="5" alignItems="center" mb="6">
								<Text fontSize="xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Our Process</Text>
								<Separator borderColor="#8cc342" minW="24" maxW="24" />
							</Stack>

							<Text fontSize="4xl" fontWeight="bold" color="whitesmoke">5 Easy <Text as="span" fontSize="5xl" className={nothing.className} color="#8cc342">Steps</Text></Text>

							<Box h="24em" w="full" mt="4" bgColor="white" borderRadius="5px" px="10" py="5" shadow="lg">
								<Stack direction="row" alignItems="center" gap="4">
									<Text fontSize="5xl" fontWeight="bold" color="#8cc342">1</Text>
									<Text fontWeight="bold" fontSize="lg" lineHeight="1.1">Tell us <br /> your vision</Text>
								</Stack>

								<Textarea mt="4"  placeholder="Hey, I need a quote for..." />

								<Input type="text" placeholder="Your Name" mt="4" />

								<Input type="text" placeholder="Email" mt="4" />

								<Input type="text" placeholder="Phone" mt="4" />

								<Center mt="1em">
									<Button maxW="20em" minW="14em" size="xl" color="white" bgColor="rgba(140,195,66,1)" _hover={{ transform: 'scale(1.02)' }}>Send Message</Button>
								</Center>
							</Box>
						</Box>
					</Box>
				</Box>

				<AnimatedSteps />

				<Container maxW="5xl" shadow="2xl" py="10" mt="20" px="10">
					<Text fontSize="3xl" textAlign="center">"An example of a client testimonial. <Text as="span" fontWeight="bold">Really shows how well this company works!</Text>"</Text>

					<Stack direction="row" gap="10" alignItems="center" fontSize="sm" w="fit-content" mx="auto" mt="10">
						<Text>- John Doe</Text>
						<Text color="blackAlpha.500">Happy Customer</Text>
					</Stack>
				</Container>

				<Box maxW="5xl" mx="auto" mt="20" position="relative" zIndex="999">
					<Box w="full">
						<Image h={["20em", "", "", "40em"]} w="full" objectFit="cover" src="https://placehold.co/700x650" />
						<Box bgColor="#F3F2EF">
							<SimpleGrid columns={[1, 1, 2, 2]}>
								<Box p="10" pb="0">
									<Box bgColor="white" p="4">
										<Text fontSize="lg" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Project Recap</Text>
										<SimpleGrid columns="2" mt="5" gap="5">
											<Stack direction="row" alignItems="center" gap="4">
												<Price fontSize="2xl" color="#8cc342" />

												<Box>
													<Text fontWeight="bold" fontSize="sm" textTransform="uppercase">Aprx. Cost</Text>
													<Text fontSize="xs">$40-60K</Text>
												</Box>
											</Stack>

											<Stack direction="row" alignItems="center" gap="4">
												<Size fontSize="3xl" color="#8cc342" />

												<Box>
													<Text fontWeight="bold" fontSize="sm" textTransform="uppercase">Size</Text>
													<Text fontSize="xs">Small</Text>
												</Box>
											</Stack>

											<Stack direction="row" alignItems="center" gap="4">
												<Options fontSize="3xl" color="#8cc342" />

												<Box>
													<Text fontWeight="bold" fontSize="sm" textTransform="uppercase">Options</Text>
													<Text fontSize="xs">Premium <br /> Landscape</Text>
												</Box>
											</Stack>

											<Stack direction="row" alignItems="center" gap="4">
												<Layout fontSize="3xl" color="#8cc342" />

												<Box>
													<Text fontWeight="bold" fontSize="sm" textTransform="uppercase">Layout</Text>
													<Text fontSize="xs">Custom</Text>
												</Box>
											</Stack>
										</SimpleGrid>
									</Box>
								</Box>
								<Box py="14" px="10">
									<Text fontSize="sm">“We really wanted to build an outdoor space that set our clients up for doing what they love to do most with their family; entertaining and unwinding in the backyard together.</Text>
								
									<Text fontSize="sm" mt="5"><Text as="span" fontWeight="bold">One of the signature spaces is the stone fireplace, where they enjoy the relaxing ambience at night.</Text> We love how much our clients really show up in all the details.”</Text>

									<Stack direction="row" alignItems="center" gap="4" mt="10">
										<Avatar name="Michael Hazelwood" size="lg" />
										<Box>
											<Text fontWeight="semibold">Michael Hazelwood</Text>
											<Text fontSize="sm">Hazelwood Outdoors</Text>
										</Box>
									</Stack>
								</Box>
							</SimpleGrid>
						</Box>
					</Box>
				</Box>

				<Box h="fit-content" mt={["0", "", "", "-12em"]} zIndex="-99">
					<Box h="fit-content" w="full"  bgImage="url('https://images.unsplash.com/photo-1601654253194-260e0b6984f9?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" bgSize="cover" bgPos="center">
						<Box h="full" w="full" px="5" py="5" top="0" left="0" right="0" background="linear-gradient(to bottom right, rgba(0,0,0,0.5), rgba(0,0,0,0.95))">
							<Box w="full" borderWidth="2px" borderColor="#8cc342" h="full" pt="56">
								<Flex px="2" direction="column" w="full" h="full" mt={["0", "", "", "20"]} alignItems="center" color="whitesmoke">
									<Stack direction="row" gap="5" alignItems="center" mb="6">
										<Text fontSize="xl" fontWeight="semibold" color="#8cc342" textTransform="uppercase">Hardscaping</Text>
										<Separator borderColor="#8cc342" minW="24" maxW="24" />
									</Stack>

									<Text fontSize="3xl" fontWeight="bold" textAlign="center">Your Yard Has More To Offer</Text>

									<Text fontSize="sm" maxW="xl" textAlign="center" mt="5">Hazelwood Outdoors utilizes innovative methods and develops a design that turns your dreams into reality.</Text>
									
									<Text fontSize="sm" textAlign="center" mt="5">From custom patios and walkways, to walls and custom structures, we have your back! Some of our specialties include:</Text>
								
									<SimpleGrid columns={[1, 1, 2, 2, 3]} gap="2" my="10">
										<Box bgImage="url('https://placehold.co/350x200')" p="3" w="350px" h="200px">
											<Text fontSize="2xl" fontWeight="bold">Patios</Text>
										</Box>
										<Box bgImage="url('https://placehold.co/350x200')" p="3" w="350px" h="200px">
											<Text fontSize="2xl" fontWeight="bold">Wall Steps</Text>
										</Box>
										<Box bgImage="url('https://placehold.co/350x200')" p="3" w="350px" h="200px">
											<Text fontSize="2xl" fontWeight="bold">Pool Design & Decking</Text>
										</Box>
										<Box bgImage="url('https://placehold.co/350x200')" p="3" w="350px" h="200px">
											<Text fontSize="2xl" fontWeight="bold">Walkways</Text>
										</Box>
										<Box bgImage="url('https://placehold.co/350x200')" p="3" w="350px" h="200px">
											<Text fontSize="2xl" fontWeight="bold">Fireplaces or Fire Pits</Text>
										</Box>
										<Box bgImage="url('https://placehold.co/350x200')" p="3" w="350px" h="200px">
											<Text fontSize="2xl" fontWeight="bold">Outdoor Kitchens & Bars</Text>
										</Box>
									</SimpleGrid>
								</Flex>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box id="schedule" py="44" px="10" bgColor="#29282d">
					<SimpleGrid columns={[1, 1, 1, 2]} maxW="5xl" mx="auto" gap="10">
						<Box color="whitesmoke">
							<Text fontSize="4xl" fontWeight="bold" className={playfair.className}>Schedule a Free <br /> Consultation Call</Text>

							<Text fontSize="sm" fontWeight="bold" textTransform="uppercase" mt="10">What This Is</Text>

							<Text fontSize="3xl" color="#8cc342" fontWeight="bold" mt="2">15 min. call</Text>

							<Text fontSize="sm" fontWeight="bold" textTransform="uppercase" mt="10">What We'll Cover</Text>
							
							<Box as="ul" listStyleType="circle" ml="10" mt="2">
								<li>Tell us your ideas</li>
								<li>Cost estimate</li>
								<li>Project timeframe</li>
							</Box>

							<Button variant="solid" size="xl" fontWeight="bold" fontSize="xl" mt="10" bgColor="rgba(140,195,66,0.9)" _hover={{ bgColor: "rgba(140,195,66,1)" }}>Get A Free Estimate</Button>
						</Box>
						<Box w="full" p="5" bgColor="whitesmoke" borderRadius="5px" shadow="2xl">
							<Text fontSize="lg">Schedule UI</Text>
						</Box>
					</SimpleGrid>
				</Box>
				<Box h="fit-content" zIndex="-99">
					<Box h="fit-content" w="full" bgImage="url('https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" bgSize="cover" bgPos="center">
						<Box h="full" w="full" px="5" py="5" background="linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0.9))">
							<Box w="full" borderWidth="2px" borderColor="#8cc342" h="fit-content">
								<Flex px="2" direction="column" h="full" justifyContent="center" alignItems="center">
									<Box my="10" maxW="3xl" bgColor="white" borderRadius="5px" p="12" shadow="2xl">
										<Text fontSize={["2xl", "", "", "4xl"]} className={playfair.className}>Stunning <Text as="span" color="#8cc342">Landscape Design</Text> Increases Curb Appeal & Home Value</Text>
									
										<Text mt="10" color="blackAlpha.800" fontWeight="medium">National Association of Realtor data shows that quality landscape designs increase curb appeal as well as home value. This means your home gets more attention and can sell much quicker – plus, demands a higher sales price!</Text>

										<SimpleGrid columns="5" gap="10" mt="10">
											<GridItem colSpan={[5, 5, 5, 1]} alignContent="center">
												<UpwardTrend color="#8cc342" fontSize="5xl" />
											</GridItem>

											<GridItem colSpan={[5, 5, 5, 4]}>
												<Text fontSize="2xl" fontWeight="bold">Add value to your home</Text>

												<Text fontSize="sm" mt="2">Landscape design typically adds 8-12% to home value according to National Association of Realtor data.</Text>
											</GridItem>
										</SimpleGrid>
										<SimpleGrid columns="5" gap="10" mt="10">
											<GridItem colSpan={[5, 5, 5, 1]} alignContent="center">
												<Stack direction="row" color="#8cc342" alignItems="center" gap="-2">
													<Text fontSize="6xl">0</Text>
													<Box>
														<Text mt="-1" fontSize="4xl">%</Text>
														<Text mt="-3.5">APR</Text>
													</Box>
												</Stack>
											</GridItem>

											<GridItem colSpan={[5, 5, 5, 4]}>
												<Box>
													<Text fontSize="2xl" fontWeight="bold">Low, affordable payments</Text>

													<Text fontSize="sm" mt="2">Reduce your out of pocket cost with financing. Our bank is ready to get you approved quickly.</Text>
												</Box>
											</GridItem>
										</SimpleGrid>
									</Box>
								</Flex>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box py="20" bg="linear-gradient(180deg, #e9efe5 0%, #fffbf9 75%, #fff 100%)">
					<Text alignItems="center" fontSize={["2xl", "", "", "6xl"]} textAlign="center" fontWeight="bold">Hazelwood Outdoors <Text as="span" color="#8cc342" fontSize={["xl", "", "", "4xl"]} fontStyle="italic" fontWeight="normal">mission & values</Text></Text>
				
					<SimpleGrid columns={[1, 1, 1, 2]} mt="16" maxW="8xl" mx="auto" gap="10">
						<Box>
							<Stack spacing={4} align="center">
								<Box w="full" h="300px" overflow="hidden" borderRadius="md" boxShadow="md">
									<Image
									src="https://images.unsplash.com/photo-1711112155287-527d5aa273ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Hydrangeas"
									objectFit="cover"
									/>
								</Box>
								<Box
									overflow="hidden"
									borderRadius="md"
									boxShadow="md"
									mt="-10em"
									ml={["10em", "", "", "15em"]}
								>
									<Image
									w="475px" h="300px"
									src="https://images.unsplash.com/photo-1605684437254-344f03b1e65c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
									alt="Fountain"
									objectFit="cover"
									/>
								</Box>
							</Stack>
						</Box>
						<Box alignContent="center" px="10">
							<Text>We are <strong>Hazelwood Outdoors</strong>, we specialize in landscape construction and transforming outdoor spaces and we are growing by the day.</Text>
							<Text mt="5">Our mission is to exceed our clients’ expectations and to raise the bar for the industry while ensuring quality craftsmanship and professionalism.</Text>
							<Text mt="5">We are Disciplined and Results Oriented. Our core values are the backbone of our business: we are Inspirational, Aligned, Transparent, and Accountable.</Text>
						</Box>
					</SimpleGrid>

					<Container maxW="6xl" mt="20">
						<Stack direction={["column", "", "row", "row"]} alignItems="start" h="fit-content">
							<Text fontSize={["9xl", "", "", "14em"]} color="#8cc342" fontWeight="bold">15</Text>
							<Text fontSize="2xl" mt={["0", "", "1.5em", "3em"]} fontWeight="bold">% Avg Increase <br /> In Home Value</Text>
						</Stack>
						<Stack mt={["0", "", "-7em", "-17em"]} direction={["column", "", "row", "row"]} alignItems="start" h="fit-content" ml={[0, 0, "auto", "auto"]} w="fit-content">
							<Text fontSize={["9xl", "", "", "14em"]} color="#8cc342" fontWeight="bold">297</Text>
							<Text fontSize="2xl" mt={["0", "", "1.5em", "3em"]} fontWeight="bold">Breathtaking <br /> Spaces Created</Text>
						</Stack>
						<Stack mt={["0", "", "-2em", "-5em"]} direction={["column", "", "row", "row"]} alignItems="start" h="fit-content" w="fit-content" mx={[0, 0, "auto", "auto"]}>
							<Text fontSize={["9xl", "", "", "14em"]} color="#8cc342" fontWeight="bold">14,567</Text>
							<Box>
								<Text fontSize="2xl" mt={["0", "", "1.5em", "3em"]} fontWeight="bold">Hydrangeas Planted*</Text>
								<Text fontSize="xl" fontStyle="italic">*Guesstimate. We don’t actually count.</Text>
							</Box>
						</Stack>
					</Container>
				</Box>

				<Box mt="20">
					<Container maxW="6xl">
						<Text alignItems="center" fontSize={["3xl", "", "", "6xl"]} textAlign="center" fontWeight="bold" className={playfair.className}>Meet The Design Team</Text>

						<SimpleGrid columns={[1, 1, 1, 2]} gap="5" mt="10">
							<Box>
								<Box w="96" h="25em" shadow="2xl" bgImage="url('https://placehold.co/450')" bgSize="cover" bgPos="center" mx="auto" />
								<Text fontSize="xl" textAlign="center" fontWeight="bold" mt="8">John Doe</Text>
								<Text fontSize="xl" textAlign="center" fontStyle="italic" color="blackAlpha.700" mt="-2">Executive Designer</Text>
							</Box>
							<Box alignContent="center">
								<Text>Your custom landscape should be an extension of your vision, tastes, and lifestyle. At Applewood Landscaping, our designs are the result of careful listening and good communication, combined with creativity, quality workmanship and materials, and years of expertise.</Text>
							
								<Text mt="5">At Applewood Landscaping, we know that each and every one of our ‘projects’ is someone’s home; that our ‘customers’ are families. Every single day, we work with real people.</Text>
							
								<Text mt="5">Our design team is the best!</Text>

								<Button w="fit-content" variant="solid" bgColor="rgba(140,195,66,0.9)" _hover={{ bgColor: "rgba(140,195,66,1)" }} color="whitesmoke" size="2xl" mt="10">Design Now</Button>
							</Box>
						</SimpleGrid>
					</Container>
				</Box>

				<Box mt="20">
					<Container maxW="6xl">
						<Text fontSize={["3xl", "", "", "6xl"]} textAlign="center" fontWeight="bold" className={playfair.className}>Our Reputation Speaks for Itself</Text>
					
						<Text fontSize="md" textAlign="center" mt="5">Read what our happy customers are saying about their experience of working with us.</Text>

						<SimpleGrid columns={[1, 1, 3]} mt="20" gap="10">
							<Stack direction="column" alignItems="center">
								<StarGroup fontSize="4xl" color="#F8D7A7" />
								<Stack direction="row" alignItems="center" gap="2" mt="4">
									<Google color="#e8414b"  fontSize="xl" />
									<Text fontWeight="bold" color="#e8414b" textTransform="uppercase" textAlign="center">Google Rating</Text>	
								</Stack>
								<Text color="#e8414b" textTransform="uppercase" textAlign="center">4.3 Stars</Text>
							</Stack>

							<Stack direction="column" alignItems="center">
								<StarGroup fontSize="4xl" color="#F8D7A7" />
								<Stack direction="row" alignItems="center" gap="2" mt="4">
									<Yelp color="#e8414b"  fontSize="xl" />
									<Text fontWeight="bold" color="#e8414b" textTransform="uppercase" textAlign="center">Yelp Rating</Text>	
								</Stack>
								<Text color="#e8414b" textTransform="uppercase" textAlign="center">4.3 Stars</Text>
							</Stack>

							<Stack direction="column" alignItems="center">
								<StarGroup fontSize="4xl" color="#F8D7A7" />
								<Stack direction="row" alignItems="center" gap="2" mt="4">
									<Facebook color="#e8414b"  fontSize="xl" />
									<Text fontWeight="bold" color="#e8414b" textTransform="uppercase" textAlign="center">Faceboook Rating</Text>	
								</Stack>
								<Text color="#e8414b" textTransform="uppercase" textAlign="center">4.3 Stars</Text>
							</Stack>
						</SimpleGrid>

						<SimpleGrid columns={[1, 1, 2]} gap="10" mt="10">
							<Box shadow="2xl" py="5" px="10" borderRadius="lg">
								<Text fontSize="lg" fontWeight="bold">"Lorem ipsum dolor sit amet..."</Text>

								<Text my="10">consectetur adipiscing elit. Donec et massa non metus gravida sagittis. Phasellus nunc sapien, hendrerit finibus tincidunt sit amet, varius in orci. Maecenas a nibh fringilla, condimentum neque sed, laoreet mauris.</Text>
							
								<Stack direction="row" alignItems="center" justify="space-between">
									<Box>
										<Text fontWeight="bold">- John Doe</Text>
										<Text color="blackAlpha.800">City Name, State</Text>
									</Box>

									<Text fontWeight="bold"><Text as={Link} href="/" _target="blank" color="blackAlpha.700" transition="0.2s ease" _hover={{ color: "blackAlpha.900" }} textDecor="underline">Read Reviews</Text> on <GoogleFullColor fontSize="2xl" /></Text>
								</Stack>
							</Box>

							<Box shadow="2xl" py="5" px="10" borderRadius="lg">
								<Text fontSize="lg" fontWeight="bold">"Lorem ipsum dolor sit amet..."</Text>

								<Text my="10">consectetur adipiscing elit. Donec et massa non metus gravida sagittis. Phasellus nunc sapien, hendrerit finibus tincidunt sit amet, varius in orci. Maecenas a nibh fringilla, condimentum neque sed, laoreet mauris.</Text>
							
								<Stack direction="row" alignItems="center" justify="space-between">
									<Box>
										<Text fontWeight="bold">- John Doe</Text>
										<Text color="blackAlpha.800">City Name, State</Text>
									</Box>

									<Text fontWeight="bold"><Text as={Link} href="/" _target="blank" color="blackAlpha.700" transition="0.2s ease" _hover={{ color: "blackAlpha.900" }} textDecor="underline">Read Reviews</Text> on <GoogleFullColor fontSize="2xl" /></Text>
								</Stack>
							</Box>

							<Box shadow="2xl" py="5" px="10" borderRadius="lg">
								<Text fontSize="lg" fontWeight="bold">"Lorem ipsum dolor sit amet..."</Text>

								<Text my="10">consectetur adipiscing elit. Donec et massa non metus gravida sagittis. Phasellus nunc sapien, hendrerit finibus tincidunt sit amet, varius in orci. Maecenas a nibh fringilla, condimentum neque sed, laoreet mauris.</Text>
							
								<Stack direction="row" alignItems="center" justify="space-between">
									<Box>
										<Text fontWeight="bold">- John Doe</Text>
										<Text color="blackAlpha.800">City Name, State</Text>
									</Box>

									<Text fontWeight="bold"><Text as={Link} href="/" _target="blank" color="blackAlpha.700" transition="0.2s ease" _hover={{ color: "blackAlpha.900" }} textDecor="underline">Read Reviews</Text> on <GoogleFullColor fontSize="2xl" /></Text>
								</Stack>
							</Box>

							<Box shadow="2xl" py="5" px="10" borderRadius="lg">
								<Text fontSize="lg" fontWeight="bold">"Lorem ipsum dolor sit amet..."</Text>

								<Text my="10">consectetur adipiscing elit. Donec et massa non metus gravida sagittis. Phasellus nunc sapien, hendrerit finibus tincidunt sit amet, varius in orci. Maecenas a nibh fringilla, condimentum neque sed, laoreet mauris.</Text>
							
								<Stack direction="row" alignItems="center" justify="space-between">
									<Box>
										<Text fontWeight="bold">- John Doe</Text>
										<Text color="blackAlpha.800">City Name, State</Text>
									</Box>

									<Text fontWeight="bold"><Text as={Link} href="/" _target="blank" color="blackAlpha.700" transition="0.2s ease" _hover={{ color: "blackAlpha.900" }} textDecor="underline">Read Reviews</Text> on <GoogleFullColor fontSize="2xl" /></Text>
								</Stack>
							</Box>
						</SimpleGrid>

						<Center mt="10">
							<Button w="fit-content" variant="solid" bgColor="rgba(140,195,66,0.9)" _hover={{ bgColor: "rgba(140,195,66,1)" }} color="whitesmoke" size="2xl" mt="10">Leave A Review <External /></Button>
						</Center>
					</Container>
				</Box>
			</Box>
		</>
	);
}
