'use client';
import { Box, Container, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "motion/react"

export default function AnimatedSteps() { 
    return (
        <Container maxW="4xl">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2, ease: "linear" }}>
                    <Stack direction="row" alignItems="center" gap="4">
                        <Image boxShadow="-30px -25px 0 -12px #8cc342" w={[44, 44, 44, 52]} h={[44, 44, 44, 52]} src="/construction-plans.jpg" borderRadius="full" />
                        <Stack direction="row" alignItems="center" gap="4">
                            <Text fontSize="6xl" fontWeight="bold" color="#8cc342">2</Text>
                            <Text fontWeight="bold" fontSize="xl" lineHeight="1.1" textTransform="uppercase">Consultation <br /> & Site Visit</Text>
                        </Stack>
                    </Stack>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2, ease: 'linear' }}>
                    <Stack direction="row" alignItems="center" gap="4" ml="auto" w="fit-content">
                        <Stack direction="row" alignItems="center" gap="4">
                            <Text fontSize="6xl" fontWeight="bold" color="#8cc342">3</Text>
                            <Text fontWeight="bold" fontSize="xl" lineHeight="1.1" textTransform="uppercase">Design <br /> Phase</Text>
                        </Stack>
                        <Image boxShadow="30px -25px 0 -12px #8cc342" w={[44, 44, 44, 52]} h={[44, 44, 44, 52]} src="development-planning.jpg" borderRadius="full" />
                    </Stack>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2, ease: 'linear' }}>
                    <Stack direction="row" alignItems="center" gap="4">
                        <Image boxShadow="-30px -25px 0 -12px #8cc342" w={[44, 44, 44, 52]} h={[44, 44, 44, 52]} src="/quote.jpg" objectPosition="center" borderRadius="full" />
                        <Stack direction="row" alignItems="center" gap="4">
                            <Text fontSize="6xl" fontWeight="bold" color="#8cc342">4</Text>
                            <Text fontWeight="bold" fontSize="xl" lineHeight="1.1" textTransform="uppercase">Proposal</Text>
                        </Stack>
                    </Stack>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2, ease: 'linear' }}>   
                    <Stack direction="row" alignItems="center" gap="4" ml="auto" w="fit-content">
                        <Stack direction="row" alignItems="center" gap="4">
                            <Text fontSize="6xl" fontWeight="bold" color="#8cc342">5</Text>
                            <Text fontWeight="bold" fontSize="xl" lineHeight="1.1" textTransform="uppercase">Build <br /> Phase</Text>
                        </Stack>
                        <Image boxShadow="30px -25px 0 -12px #8cc342" w={[44, 44, 44, 52]} h={[44, 44, 44, 52]} src="/labor.jpg" borderRadius="full" />
                    </Stack>
                </motion.div>
            </Container>
    )
}