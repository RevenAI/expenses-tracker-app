import { Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {

  return (
   <Flex 
   as="main" 
   mt={{base: "16%", md: "16%", lg: "80px", xl: "85px"}}
   mb={{ base: "16%", md: "16%", lg: "40px", xl: "45px"}} 
   >
    <Header />
     <Flex as="aside">
        <Sidebar />
    </Flex>

    <Flex as="section">
        <Outlet />
    </Flex>
    <Footer />
   </Flex>
  )
}

export default Layout

