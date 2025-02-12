import { Flex } from "@chakra-ui/react";
import SectionOne from "../sections/home/SectionOne";
import SectionTwo from "../sections/home/SectionTwo";
import SectionThree from "../sections/home/SectionThree";

const Home = () => {

  return (
    <Flex 
    direction="column" 
    p={6} gap={8} w="full" 
    maxW="1200px" 
    mx="auto"
    pl={{lg: "13.2em", xl: "13.7em"}}
    justify="center"
    >
        <SectionOne />
        <SectionTwo />
        <SectionThree />
    </Flex>
  );
};

export default Home;

