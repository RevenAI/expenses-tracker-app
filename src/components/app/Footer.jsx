import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  const today = new Date();

  return (
    <Flex
      hideBelow="md"
      as="footer"
      pos="fixed"
      bottom="0"
      left="0"
      right="0"
      bgColor="#FFD700"
      w="100%"
      minH="50px"
      zIndex="1000"
      boxShadow="0px -4px 10px rgba(0,0,0,0.1)"
      alignItems="center"
      justifyContent="center"
      px="20px"
    >
      <Text fontSize={ {lg: "1.4em", xl: "sm"}} fontWeight="bold" color="blue.800" textAlign="center">
        © {today.getFullYear()} Tijani IA. All Rights Reserved. || Powered by InternPulse
      </Text>
    </Flex>
  );
};

export default Footer;

