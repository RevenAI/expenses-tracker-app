import { Box, Flex, Text, Card, Separator } from "@chakra-ui/react";
import { API_URI, getExpenseStats } from "../../utils/helpers";
import Loader from "../../utils/Loader";
import LineChart from "./charts/LineChart";
import BarChart from "./charts/BarChart";
import useFetch from "../../hooks/useFetch";

const SectionThree = () => {
   
    const { data, loading, error } = useFetch(`${API_URI}expenses/show`);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <Flex h="100vh" align="center" justify="center">
                <Box p={6} bg="red.50" borderRadius="lg" boxShadow="md">
                    <Text fontSize="lg" color="red.600" fontWeight="bold">Error: {error}</Text>
                </Box>
            </Flex>
        );
    }

    const latestExpenses = data?.slice(-6)?.reverse() || [];

    const {
        totalExpenses,
        approvedExpenses,
        rejectedExpenses,
        pendingApprovals,
        unreportedExpenses,
        upcomingExpenses,
    } = getExpenseStats(latestExpenses);

    return (
    <Flex as="section" justify="center" align="center" p={4} w="full">
        <Card.Root w="full" boxShadow="xl" borderRadius="xl" p={6} bg="white">
            <Card.Header>
                <Card.Title fontSize="sm" fontWeight="bold" color="black" textAlign="start">
                Expense Analytics Overview
                </Card.Title>
                <Separator my={4} />
            </Card.Header>
            <Card.Body>
            <Flex direction={{base: "column", md: "column", lg: "row", xl: "row"}} gap="10">        
            {/* Line Chart */}
            <Box w="full" minH="xs" p={4} bg="white" borderRadius="lg" shadow="md">
                <LineChart latestExpenses={latestExpenses} />
            </Box>

            {/* Bar Chart */}
            <Box w="full" minH="xs" p={4} bg="white" borderRadius="lg" shadow="md">
                <BarChart 
                    totalExpenses={totalExpenses}
                    approvedExpenses={approvedExpenses}
                    rejectedExpenses={rejectedExpenses}
                    pendingApprovals={pendingApprovals}
                    unreportedExpenses={unreportedExpenses}
                    upcomingExpenses={upcomingExpenses}
                />
            </Box>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Flex>
    );
};

export default SectionThree;

