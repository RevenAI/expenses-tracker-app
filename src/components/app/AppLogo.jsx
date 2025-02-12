import { Box, Text } from "@chakra-ui/react";

const AppLogo = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-r, gold.400, white)"
      p={{ base: 2, md: 3, lg: 4 }} 
      borderRadius="lg"
      boxShadow="lg"
      position="relative"
      overflow="hidden"
    >
      {/* Starry Background Effect */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="transparent"
        backgroundImage="radial-gradient(circle, rgba(255,215,0,0.3) 1px, transparent 1px)"
        backgroundSize={{ base: "15px 15px", md: "20px 20px", lg: "25px 25px" }} 
        opacity="0.3"
      />

      {/* "Tracker" Text */}
      <Text
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} 
        fontWeight="bold"
        letterSpacing={{ base: "wide", lg: "wider" }} 
        color="blue.800"
        textShadow="3px 3px 8px rgba(255, 215, 0, 0.9)"
        zIndex="1"
      >
        Tracker
      </Text>

      {/* "X" Text */}
      <Text
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} 
        fontWeight="extrabold"
        color="red.700"
        textShadow="3px 3px 10px rgba(255,0,0,0.9)"
        transform="rotate(-5deg)"
        ml={{ base: 0, md: 1 }} 
        zIndex="1"
      >
        X
      </Text>
    </Box>
  );
};

export default AppLogo;


