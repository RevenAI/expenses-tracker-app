import { Box, Center, VStack, Spinner, Text } from "@chakra-ui/react";

const Loader = () => (
    <Box position="fixed" inset="0" bg="rgba(255, 255, 255, 0.8)" zIndex="1500">
        <Center h="full">
            <VStack>
                <Spinner size="xl" thickness="4px" speed="0.65s" color="blue.800" borderWidth="4px" />
                <Text color="blue.800">Loading...</Text>
            </VStack>
        </Center>
    </Box>
);

export default Loader


