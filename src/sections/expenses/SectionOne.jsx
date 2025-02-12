import { 
    Flex, Heading, IconButton, Icon, Separator, Card, Grid, GridItem, List, Text, Field, Input, Button, HStack,
} from "@chakra-ui/react";
import { IoFilter, IoSearchSharp, IoLocationOutline } from "react-icons/io5";
import { MdMoreHoriz } from "react-icons/md";
import useFetch from "../../hooks/useFetch";
import { getEnvUrl } from "../../utils/helpers";
import Loader from "../../utils/Loader";
import Error from "../../utils/Error";
import { FaRegObjectGroup } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import CreateExpenseDialog from "./CreateExpenseDialog";

const SectionOne = () => {
    const apiUrl = getEnvUrl();
    const { data: expensesData, loading: isExpenseLoading, error: expenseErr  } = useFetch(`${apiUrl}expenses/show`);
    const { data: usersData, loading: isUserLoading, error: usersErr } = useFetch(`${apiUrl}users/show`);

    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 5;

    if (isExpenseLoading || isUserLoading) {
        return <Loader />;
    }

    if (expenseErr || usersErr) {
        return <Error message={expenseErr?.message || usersErr?.message} />;
    }

    //implement search and filter
    const filteredExpenses = expensesData.filter((expense) => {
        return (
            expense.merchant?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
            expense.category?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
            expense.description?.toLowerCase().includes(searchQuery?.toLowerCase())
        );
    });

    //Implement Pagination
    const totalPages = Math.ceil(filteredExpenses.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedExpenses = filteredExpenses.slice(startIndex, startIndex + itemsPerPage);

    const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    /* filling back the table if search field is empty */ 
    return (
        <Flex direction="column" p={5} bg="gray.100" borderRadius="lg" boxShadow="md">
            <Flex justify="space-between" align="center" mb={4}>
                <Heading as="h1" size="lg" color="blue.800">Expenses</Heading>
                <Flex gap={2}>
                    <IconButton aria-label="Filter" color="blue.800" bg="gold" _hover={{ bg: "blue.800", color: "gold" }} ><IoFilter /></IconButton>
                    <IconButton aria-label="More" color="blue.800" bg="gold" _hover={{ bg: "blue.800", color: "gold" }} ><MdMoreHoriz /></IconButton>
                 <Link to="/"><IconButton aria-label="Add new expense" color="blue.800" bg="gold" _hover={{ bg: "blue.800", color: "gold" }} p="4px">+ Add Expense</IconButton></Link>
                </Flex>
            </Flex>

            {/* Editable Search Input */}
           <Field.Root>
                <Field.Label srOnly>Search Expenses</Field.Label>
                <Input
                    placeholder="Type here to search expenses"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                />
            </Field.Root>

            <Separator mb={4} />
            <Card.Root p={4} bg="white" borderRadius="xl" boxShadow="lg">
                <Card.Body>
                    {paginatedExpenses?.length === 0 ? (
                        <Text color="gray.500" textAlign="center">No expenses found.</Text>
                    ) : (
                        <Grid templateColumns="2fr 1fr 1fr 1fr 1fr" gap={4} fontSize="sm" fontWeight="bold" color="blue.800">
                            {/* <GridItem><Checkbox>Mark</Checkbox></GridItem> */}
                            <GridItem>DETAILS</GridItem>
                            <GridItem>MERCHANT</GridItem>
                            <GridItem>EXPENSE OWNER</GridItem>
                            <GridItem>AMOUNT</GridItem>
                            <GridItem>PAYMENT METHOD</GridItem>
                        </Grid>
                    )}
                    <Separator my={2} />
                    {paginatedExpenses.map((expense, index) => (
                        <Grid key={expense.id || index} templateColumns="2fr 1fr 1fr 1fr 1fr" gap={4} alignItems="center" p={2} borderBottom="1px solid" borderColor="gray.200">
                           {/*  <GridItem><Checkbox>Mark</Checkbox></GridItem> */}
                            <GridItem>
                                <List.Root variant="unstyled" spacing={3} color="gray.600" fontSize="xs">
                                    <List.Item display="flex" flexDir="row" alignItems="start"><Icon mr="2" color="tomato"><FaRegObjectGroup /></Icon> {expense.category}</List.Item>
                                    <List.Item display="flex" flexDir="row" alignItems="start"><Icon mr="2" color="green"><MdDescription /></Icon> {expense.description}</List.Item>
                                    <List.Item display="flex" flexDir="row" alignItems="start"><Icon mr="2" color="purple"><IoLocationOutline /></Icon> {expense.location}</List.Item>
                                    <List.Item display="flex" flexDir="row" alignItems="start"><Icon mr="2" color="red"><BsCalendar2Date /></Icon>{expense.date}</List.Item>
                                </List.Root>
                            </GridItem>
                            <GridItem fontSize="sm" color="red.500">{expense.merchant}</GridItem>
                            <GridItem fontSize="sm" color="purple.600" fontWeight="bold">
                                {(() => {
                                    const usersArray = usersData?.data || []; 
                                    const owner = usersArray.find((user) => user.id === expense.user_id);
                                    return owner ? owner.name : "Unknown";
                                })()}
                            </GridItem>
                            <GridItem fontSize="sm" color="red.500">${expense.amount}</GridItem>
                            <GridItem fontSize="sm" color="purple.600">{expense.payment_method}</GridItem>
                        </Grid>
                    ))}
                </Card.Body>
                <Separator my={4}/>
                          {/* Pagination button */}  
                <HStack justify="center" spacing={4} mt={4}>
                    <Button 
                        onClick={goToPrevPage} 
                        isDisabled={currentPage === 1} 
                        variant="outline"
                        p="2"
                        w="10em"
                    >
                        Previous
                    </Button>

                    <Text fontSize="md">
                        Page {currentPage} of {totalPages}
                    </Text>

                    <Button 
                        onClick={goToNextPage} 
                        isDisabled={currentPage === totalPages} 
                        variant="outline"
                        p="2"
                        w="10em"
                    >
                        Next
                    </Button>
                </HStack>
            </Card.Root>
        </Flex>
    );
};

export default SectionOne;





