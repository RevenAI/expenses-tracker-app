import { 
    Flex, Heading, IconButton, Input, Button, Grid, GridItem, Text, Avatar, HStack, Card, Separator
} from "@chakra-ui/react";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { getInitials, API_URI } from "../utils/helpers";
import Loader from "../utils/Loader";
import Error from "../utils/Error";

const Users = () => {
    const { data: usersData, loading: isLoading, error } = useFetch(`${API_URI}users/show`);

    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 7;

    if (isLoading) return <Loader />;
    if (error) return <Error message={error.message} />;

    // Filtering users by name or email
    const usersArray = Array.isArray(usersData?.data) 
        ? usersData.data 
        : usersData 
        ? [usersData] 
        : [];
    
    const filteredUsers = usersArray?.filter((user) =>
        user?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user?.email?.toLowerCase().includes(searchQuery.toLowerCase())
    );    
    
    // Implement Pagination
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

    const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <Flex 
        direction="column" 
        w="100%"
        p="9"
        pl={{lg: "13.9em", xl: "14.3em"}} 
        bg="gray.100" 
        borderRadius="lg" 
        boxShadow="md"
        >
            <Flex justify="space-between" align="center" mb={4}>
                <Heading as="h1" size="sm" color="blue.800">Users</Heading>
            </Flex>

            {/* Search Input */}
            <Flex mb={4} align="center" gap={2}>
                <Input
                    placeholder="Search users by name or email"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <IconButton aria-label="Search" > <IoSearchSharp /> </IconButton>
            </Flex>

            <Separator mb={4} />

            <Card.Root p={4} bg="white" borderRadius="xl" boxShadow="lg">
                {paginatedUsers.length === 0 ? (
                    <Text color="gray.500" textAlign="center">No users found.</Text>
                ) : (
                    <Grid templateColumns="2fr 2fr 2fr 1fr" gap={4} fontSize="sm" fontWeight="bold" color="blue.800">
                        <GridItem>PROFILE</GridItem>
                        <GridItem>EMAIL</GridItem>
                        <GridItem>COMPANY & ROLE</GridItem>
                        <GridItem>PHONE</GridItem>
                    </Grid>
                )}
                <Separator my={2} />
                {paginatedUsers.map((user) => (
                    <Grid key={user.email} templateColumns="2fr 2fr 2fr 1fr" gap={4} alignItems="center" p={2} borderBottom="1px solid" borderColor="gray.200" fontSize="xm">
                        <GridItem>
                            <HStack>
                                  {/* Avatar with generated initials */}
                                <Avatar.Root bg="blue.800" color="white">
                                    {getInitials(user.name)}
                                    <Avatar.Image boxSize="1.25em" bg="green.500" /> {/* Online status */}
                                </Avatar.Root>
                                <Text>{user.name}</Text>
                            </HStack>
                        </GridItem>
                        <GridItem>{user.email}</GridItem>
                        <GridItem>
                            <Text fontWeight="bold">{user.company}</Text>
                            <Text color="gray.600">{user.role}</Text>
                        </GridItem>
                        <GridItem>{user.phone}</GridItem>
                    </Grid>
                ))}
            </Card.Root>

            <HStack justify="center" spacing={4} mt={4}>
                <Button onClick={goToPrevPage} isDisabled={currentPage === 1} variant="outline"
                        p="2"
                        w="10em">Previous</Button>
                <Text fontSize="md">Page {currentPage} of {totalPages}</Text>
                <Button onClick={goToNextPage} isDisabled={currentPage === totalPages} variant="outline"
                        p="2"
                        w="10em">Next</Button>
            </HStack>
        </Flex>
    );
};

export default Users;

