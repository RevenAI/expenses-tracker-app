import React from 'react';
import { 
    Stack, Card, Separator, DataList, Icon, Text, Box, Grid, GridItem, 
    Flex
  } from "@chakra-ui/react";
import { FaRegClock, FaCartArrowDown, FaMoneyBillWave, FaCheckCircle, FaTimesCircle, FaTag, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { MdReportOff } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import useFetch from "../../hooks/useFetch";
import { getEnvUrl, getExpenseStats } from "../../utils/helpers";
import Loader from "../../utils/Loader";

const SectionOne = () => {
  const apiUrl = getEnvUrl();
  const { data, loading, error } = useFetch(`${apiUrl}expenses/show`);

  if (loading) {
    return <Loader /> 
  }

  if (error) {
          return (
            <Box h="100vh">
              <Text fontSize="lg" color="red.500">Error: {error}</Text>
            </Box>
          );
        }

    const latestExpenses = data?.slice(-6)?.reverse();

    const {
        totalExpenses,
        approvedExpenses,
        rejectedExpenses,
        pendingApprovals,
        unreportedExpenses,
        upcomingExpenses,
        unreportedAdvances,
        mostFrequentCategory,
        highestExpense,
        lowestExpense,
    } = getExpenseStats(latestExpenses);

  return (
    <Flex as="section">
        <Stack direction={{ base: "column", md: "column", lg: "row", xl: "row" }} gap="10" justifyContent="center">
               {/* First Card Pending Tasks Card */}
               <Card.Root 
                  w="full"
                  boxShadow="lg" 
                  borderRadius="xl" 
                  p={{ base: 2, md: 4, lg: 6 }} 
                  bg="gray.50"
                  >
                  <Card.Header>
                    <Card.Title fontSize="sm" fontWeight="bold">Pending Tasks</Card.Title>
                    <Separator />
                  </Card.Header>
                  <Card.Body>
                    <DataList.Root size="md" orientation="horizontal">
                    <DataList.Item>
                        <DataList.ItemLabel><Icon as={FaMoneyBillWave} fontSize="lg" color="teal.500" /></DataList.ItemLabel>
                        <DataList.ItemLabel>Total Expenses</DataList.ItemLabel>
                        <DataList.ItemValue display="flex" justifyContent="center" alignItems="center" fontWeight="bold" color="teal.800">N {totalExpenses.toLocaleString()}</DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.ItemLabel><Icon as={FaCheckCircle} fontSize="lg" color="green.500" /></DataList.ItemLabel>
                        <DataList.ItemLabel>Approved Expenses</DataList.ItemLabel>
                        <DataList.ItemValue display="flex" justifyContent="center" alignItems="center" fontWeight="bold" color="green.800">{approvedExpenses}</DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.ItemLabel><Icon as={FaTimesCircle} fontSize="lg" color="red.500" /></DataList.ItemLabel>
                        <DataList.ItemLabel>Rejected Expenses</DataList.ItemLabel>
                        <DataList.ItemValue display="flex" justifyContent="center" alignItems="center" fontWeight="bold" color="red.800">{rejectedExpenses}</DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.ItemLabel><Icon as={FaTag} fontSize="lg" color="purple.500" /></DataList.ItemLabel>
                        <DataList.ItemLabel>Most Frequent Category</DataList.ItemLabel>
                        <DataList.ItemValue display="flex" justifyContent="center" alignItems="center" fontWeight="bold" color="purple.800">{mostFrequentCategory}</DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.ItemLabel><Icon as={FaArrowUp} fontSize="lg" color="orange.500" /></DataList.ItemLabel>
                        <DataList.ItemLabel>Highest Expense</DataList.ItemLabel>
                        <DataList.ItemValue display="flex" justifyContent="center" alignItems="center" fontWeight="bold" color="orange.800">N {highestExpense.toLocaleString()}</DataList.ItemValue>
                    </DataList.Item>
                    <DataList.Item>
                        <DataList.ItemLabel><Icon as={FaArrowDown} fontSize="lg" color="blue.500" /></DataList.ItemLabel>
                        <DataList.ItemLabel>Lowest Expense</DataList.ItemLabel>
                        <DataList.ItemValue display="flex" justifyContent="center" alignItems="center" fontWeight="bold" color="blue.800">N {lowestExpense.toLocaleString()}</DataList.ItemValue>
                    </DataList.Item>
                      <DataList.Item>
                        <DataList.ItemLabel><Icon as={FaRegClock} fontSize="lg" color="blue.500" /></DataList.ItemLabel>
                        <DataList.ItemLabel>Pending Approvals</DataList.ItemLabel>
                        <DataList.ItemValue display="flex" justifyContent="center" alignItems="center" fontWeight="bold" color="blue.800">{pendingApprovals}</DataList.ItemValue>
                      </DataList.Item>
                      <DataList.Item>
                        <DataList.ItemLabel><Icon as={MdReportOff} fontSize="lg" color="red.500" /></DataList.ItemLabel>
                        <DataList.ItemLabel>Unreported Expenses</DataList.ItemLabel>
                        <DataList.ItemValue display="flex" justifyContent="center" alignItems="center" fontWeight="bold" color="red.800">{unreportedExpenses}</DataList.ItemValue>
                      </DataList.Item>
                      <DataList.Item>
                        <DataList.ItemLabel><Icon as={FaCartArrowDown} fontSize="lg" color="orange.500" /></DataList.ItemLabel>
                        <DataList.ItemLabel>Upcoming Expenses</DataList.ItemLabel>
                        <DataList.ItemValue display="flex" justifyContent="center" alignItems="center" fontWeight="bold" color="orange.800">{upcomingExpenses}</DataList.ItemValue>
                      </DataList.Item>
                      <DataList.Item>
                        <DataList.ItemLabel><Icon as={TbCurrencyNaira} fontSize="lg" color="purple.500" /></DataList.ItemLabel>
                        <DataList.ItemLabel>Unreported Advances</DataList.ItemLabel>
                        <DataList.ItemValue display="flex" justifyContent="center" alignItems="center" fontWeight="bold" color="purple.800">N {unreportedAdvances.toLocaleString()}</DataList.ItemValue>
                      </DataList.Item>
                    </DataList.Root>
                    <Separator />
                  </Card.Body>
                </Card.Root>

                {/* Second Card - Recent Expenses */}
              <Card.Root 
                w="100%"
                boxShadow="lg" 
                borderRadius="xl" 
                p={{ base: 2, md: 4, lg: 6 }} 
                pl={{lg: "6"}}
                bg="gray.50"
                overflowY="scroll"
                >
                  <Card.Header>
                    <Card.Title fontSize="sm" fontWeight="bold">Recent Expenses</Card.Title>
                    <Separator />
                  </Card.Header>
                  <Card.Body w="full">
                    {latestExpenses.length === 0 ? (
                      <Text color="gray.500">No recent expenses.</Text>
                    ) : (
                      <Grid templateColumns="repeat(6, 1fr)" gap={3}>
                        <GridItem fontWeight="bold" fontSize="sm" color="blue.800">Category</GridItem>
                        <GridItem fontWeight="bold" fontSize="sm" color="blue.800">Description</GridItem>
                        <GridItem fontWeight="bold" fontSize="sm" color="blue.800">Amount</GridItem>
                        <GridItem fontWeight="bold" fontSize="sm" color="blue.800">Currency</GridItem>
                        <GridItem fontWeight="bold" fontSize="sm" color="blue.800">Payment Method</GridItem>
                        <GridItem fontWeight="bold" fontSize="sm" color="blue.800">Date</GridItem>
                        {latestExpenses.map((expense) => (
                                                  
                          <React.Fragment key={expense.id}>
                            <GridItem fontSize="xs" color="purple">{expense.category}</GridItem>
                            <GridItem fontSize="xs" color="red.500">{`${expense.description.slice(0,17)}...`}</GridItem>
                            <GridItem fontSize="xs" color="purple" fontWeight="bold">
                              {expense.amount}
                            </GridItem>
                            <GridItem fontSize="xs" color="red.500">{expense.currency}</GridItem>
                            <GridItem fontSize="xs" color="purple">{expense.payment_method}</GridItem>
                            <GridItem fontSize="xs" color="red.500">{expense.date}</GridItem>
                          </React.Fragment>
                        ))}
                      </Grid>
                    )}
                    <Separator />
                  </Card.Body>
                </Card.Root>
              </Stack>

    </Flex>
  )
}

export default SectionOne

