import {
    Flex,
    Text,
    Icon,
    MenuRoot,
    IconButton,
    MenuItem,
    Box,
} from '@chakra-ui/react'
import NavHoverDescBox from './NavHoverDescBox';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setHoverState } from '../../state/slices/hoverSlice';

const NavMenu = ({navSize, icon, title, description, path}) => {
    const dispatch = useDispatch();
    const hoveredItem = useSelector((state) => state.hover.hoveredItem);

  return (
    <Flex
    //mt={30}
    flexDir="column"
    w="100%"
    alignItems={navSize === "small" ? "center" : "flex-start"}
    position="relative" //This ensures hover detection
    onMouseEnter={() => dispatch(setHoverState(title))} //This sets unique hover state
    onMouseLeave={() => dispatch(setHoverState(null))} //this resets hover state
    >
        <MenuRoot>
            <Box 
            as="nav" 
            _hover={{
                backgroundColor: "#00000033", 
                borderRadius: "8px", 
                boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                w: "100%"
            }}
            >
            <NavLink 
                 to={path} 
                    style={({ isActive }) => ({
                        textDecoration: "none",
                        backgroundColor: isActive ? "#00000033" : "transparent",
                        padding: "10px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: navSize === "large" ? "100%" : "auto",
                        gap: "10px",
                        transition: "all 0.2s ease-in-out",
                        boxShadow: isActive ? "0px 4px 10px rgba(0,0,0,0.1)" : "none",
                        paddingLeft: "20px",
                    })}
                    >
                    
                    <IconButton 
                    aria-label="Navigation menu"
                    w="100%"
                    backgroundColor="transparent"
                    >       
                        <Flex
                        backgroundColor="transparent"
                        color="blue.800"
                        alignItems="center" 
                        justifyContent="center" 
                        w="100%" 
                        >
                        <Flex align="center" w="100%">
                            
                            <Icon as={icon} fontSize="xl" color="blue.800" />
                            <Text ml={3} display={navSize === "small" ? "none" : "flex"}>
                            {title}
                            </Text>
                        </Flex>
                        </Flex>
                    </IconButton>
            </NavLink>
            </Box>
      
            <MenuItem
                py={0}
                border="none"
                w={200}
                h={200}
                ml={5}
                position="absolute"
                left="100%" // Positions it next to the menu
                top="0"
                opacity={hoveredItem === title ? 1 : 0} //this checks if THIS item is hovered
                pointerEvents={hoveredItem === title ? "auto" : "none"} //Prevents interaction when hidden
                transition="opacity 0.2s ease-in-out"
            >
                <NavHoverDescBox icon={icon} title={title} description={description} />
            </MenuItem>

        </MenuRoot>
    </Flex>
  )
}

export default NavMenu 


