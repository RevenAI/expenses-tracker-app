
import { Flex, Text, defineStyle, Avatar, Heading, Box } from '@chakra-ui/react';
import { FaHome, FaClipboardList, FaClipboardCheck, FaPlaneDeparture, FaSlidersH, FaPhoneAlt } from "react-icons/fa";
import NavMenu from './NavMenu';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const navSize = useSelector((state) => state.sidebar.navSize);

    const avarterStyling = defineStyle({
        outlineWidth: "2px",
        outlineColor: "blue.800",
        outlineOffset: "2px",
        outlineStyle: "solid",
        overflow: "hidden"
      });

  return (
    <Flex
        hideBelow="md"
        pos="fixed"
        h="100vh"
        w={ navSize === "small" ? "4.7em" : "12.5em" }
        flexDir="column"
        justifyContent="space-between"
        bg="gold"
        zIndex="5000"
    >

    <Flex
        p="5%"
        pt="15px"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
        >

            {/* Avater section */}
            <Flex 
            align="center"
            pt="25px"
            >
                <Avatar.Root css={avarterStyling}>  
                <Avatar.Fallback name="Tijani Abidemi" />
                <Avatar.Image 
                src="/profile-pics/abby.png"
                />
                </Avatar.Root>

                <Flex display={ navSize === "small" ? "none" : "flex"}  flexDir="column" ml={4}>
                    <Heading as="h3" size="sm" color="blue.800">Tijani Abidemi</Heading>
                    <Text color="gray">Admin</Text>
                </Flex>

            </Flex>

        </Flex>

        <Flex
        p="5%"
        flexDir="column"
        alignItems="center"
        as="nav"
        flex="1"
        >

          <Box as="div"> 
            <NavMenu navSize={navSize} icon={FaHome} title="Dashboard" path="/" description="View key insights and track your financial overview at a glance." active />
            <NavMenu navSize={navSize} icon={FaClipboardList} title="Expenses" path="/expenses" description="Manage and review all your recorded expenses in one place." />
            <NavMenu navSize={navSize} icon={FaPlaneDeparture} title="Trips" path="/trips" description="Log and monitor travel expenses for better budgeting and reporting." />
            <NavMenu navSize={navSize} icon={FaClipboardCheck} title="Approval" path="/approval" description="Approve or review pending expense reports and financial requests." />
            <NavMenu navSize={navSize} icon={FaSlidersH} title="Settings" path="/settings" description="Customize your preferences, notifications, and account settings." />
            <NavMenu navSize={navSize} icon={FaPhoneAlt} title="Support" path="/support" description="Get help, contact support, or access FAQs and documentation." />
          </Box>

        </Flex>

    </Flex>
  )
}

export default Sidebar
     
