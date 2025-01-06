'use client';
import { Box, Container, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "motion/react"

export default function AnimatedSteps() { 
    return (
        <Container maxW="4xl">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2, ease: "linear" }}>
                    <Stack direction="row" alignItems="center" gap="4">
                        <Image boxShadow="-30px -25px 0 -12px #8cc342" w={[44, 44, 44, 52]} h={[44, 44, 44, 52]} src="https://images.unsplash.com/photo-1709715357479-591f9971fb05?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" borderRadius="full" />
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
                        <Image boxShadow="30px -25px 0 -12px #8cc342" w={[44, 44, 44, 52]} h={[44, 44, 44, 52]} src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" borderRadius="full" />
                    </Stack>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2, ease: 'linear' }}>
                    <Stack direction="row" alignItems="center" gap="4">
                        <Image boxShadow="-30px -25px 0 -12px #8cc342" w={[44, 44, 44, 52]} h={[44, 44, 44, 52]} src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" borderRadius="full" />
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
                        <Image boxShadow="30px -25px 0 -12px #8cc342" w={[44, 44, 44, 52]} h={[44, 44, 44, 52]} src="https://images.unsplash.com/photo-1630709437016-ee675b9b29b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" borderRadius="full" />
                    </Stack>
                </motion.div>
            </Container>
    )
}