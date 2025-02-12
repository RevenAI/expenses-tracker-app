import { Flex } from "@chakra-ui/react";
import SectionOne from "../sections/expenses/SectionOne";

const Expenses = () => {
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
    </Flex>
  );
}

export default Expenses

