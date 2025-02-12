import { Flex, Box } from "@chakra-ui/react";
import AppLogo from "./AppLogo";
import { ColorModeButton } from "../ui/color-mode";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  return (
    <Flex
      hideFrom="md"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bgColor="#FFD700"
      w="100%"
      minH="3.5em"
      zIndex="1000"
      boxShadow="0px 4px 10px rgba(0,0,0,0.1)"
      alignItems="center"
      justifyContent="space-between"
      p={4} 
    >
      {/* Logo Section */}
      <Box w="30%">
        <Link to="/">
            <AppLogo />
        </Link>
      </Box>

      {/* Color Mode Toggle */}
      <Box>
        <ColorModeButton />
      </Box>
    </Flex>
  );
};

export default MobileHeader;

