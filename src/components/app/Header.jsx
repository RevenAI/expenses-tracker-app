import { Box, Flex, IconButton, Heading } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavSize } from "../../state/slices/sidebarSlice";
import AppLogo from "./AppLogo";
import { ColorModeButton } from "../ui/color-mode";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navSize = useSelector((state) => state.sidebar.navSize);

  return (
    <Flex 
      hideBelow="md"
      pos="fixed"
      as="header"
      bgColor="#FFD700"
      h="15%"
      zIndex="1000"
      top="0"
      left="0"
      right="0"
      boxShadow="0px 4px 10px rgba(0,0,0,0.1)"
      alignItems="center"
      justifyContent="space-between"
    >
        {/* sidebar toggle */}
        <IconButton 
            aria-label="Menu Button"
            background="none"
            color="blue.800"
            mt={5}
            _hover={{ backgroundColor: "#00000033" }}
            onClick={() => dispatch(toggleNavSize())}
          >
           { navSize === "small" ? <Box as="span" fontWeight="bold" fontSize="md">&#10005;</Box> : <FaBars />}
        </IconButton>

        {/* theme toggle */}
        <Flex
        border="xs solid blue.800"
        borderRadius="xs"
        color="blue.800"
        >
            <ColorModeButton />
        </Flex>

        {/* app logo */}
        <Flex>
          <Heading style={{cursor: "pointer"}}>
            <Link to="/">
              <AppLogo />
            </Link>
          </Heading>
        </Flex>
      
    </Flex>
  );
};

export default Header;

/*  
<Box 
          w={{lg:"20%", xl:"20%"}}
          p={{lg:"25px", xl:"25px"}}
          m={{lg:"25px", xl:"25px"}}
        >
            <Link to="/">
                <AppLogo />
            </Link>
        </Box>
*/

