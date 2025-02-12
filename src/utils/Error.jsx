import { Box, Button, Alert } from "@chakra-ui/react";

const Error = ({ message = "Something went wrong.", onRetry }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={6}>
      <Alert.Root status="error" variant="subtle" flexDirection="column" alignItems="center" textAlign="center" maxW="md" borderRadius="md">
        <Alert.Indicator />
        <Alert.Title fontSize="lg">Error:</Alert.Title>
        <Alert.Description>{message}</Alert.Description>
      </Alert.Root>
      {onRetry && (
        <Button mt={4} colorScheme="red" onClick={onRetry}>
          Retry
        </Button>
      )}
    </Box>
  );
};

export default Error;

