import { useState } from "react";
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FaHome, FaClipboardList, FaClipboardCheck, FaPlaneDeparture, FaSlidersH, FaPhoneAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MobileFooter = () => {
    const menuProps = [
        { id: 1, title: "Home", icon: FaHome, path: "/" },
        { id: 2, title: "Expenses", icon: FaClipboardList, path: "/expenses" },
        { id: 3, title: "Trips", icon: FaPlaneDeparture, path: "/trips" },
        { id: 4, title: "Approval", icon: FaClipboardCheck, path: "/approval" },
        { id: 5, title: "Settings", icon: FaSlidersH, path: "/settings" },
        { id: 6, title: "Support", icon: FaPhoneAlt, path: "/support" },
    ];

    const pageSize = 3;
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(menuProps.length / pageSize);
    const hasNext = currentPage < totalPages - 1;
    const hasPrev = currentPage > 0;

    const nextPage = () => {
        if (hasNext) setCurrentPage((prev) => prev + 1);
    };

    const prevPage = () => {
        if (hasPrev) setCurrentPage((prev) => prev - 1);
    };

    const startIndex = currentPage * pageSize;
    const paginatedMenus = menuProps.slice(startIndex, startIndex + pageSize);

    return (
        <Flex
            hideFrom="md"
            position="fixed"
            bottom="0"
            left="0"
            right="0"
            bgColor="#FFD700"
            w="100%"
            minH="4em"
            zIndex="1000"
            boxShadow="0px -4px 10px rgba(0,0,0,0.1)"
            alignItems="center"
            justifyContent="center"
            p={3}
            gap={2}
        >
            {/* Previous Button (Disabled when no previous) */}
            <IconButton
                aria-label="Previous"
                size="md"
                variant="ghost"
                onClick={prevPage}
                color={hasPrev ? "blue.800" : "gray.400"}
                isDisabled={!hasPrev}
                cursor={hasPrev ? "pointer" : "not-allowed"}
                _hover={{ bg: hasPrev ? "#00000033" : "transparent" }}
            >
                <FaChevronLeft />
            </IconButton>

            {/* Menu Items */}
            <Flex w="80%" display="flex" justifyContent="center" transition="all 0.2s ease-in-out">
                {paginatedMenus.map((menu) => (
                    <Flex key={menu.id} direction="column" align="center" mx={3}>
                        <NavLink to={menu.path}>
                            {({ isActive }) => (
                                <Flex direction="column" align="center" color={isActive ? "blue.800" : "black"}>
                                    <IconButton
                                        aria-label={menu.title}
                                        size="lg"
                                        variant="ghost"
                                        colorScheme={isActive ? "white" : "blue.800"}
                                        bgColor={isActive && "#00000033"}
                                        _hover={{ bgColor: "#00000033" }}
                                        color="blue.800"
                                    >
                                        <menu.icon />
                                    </IconButton>
                                    <Text fontSize="sm" color="blue.800" fontWeight="bold">
                                        {menu.title}
                                    </Text>
                                </Flex>
                            )}
                        </NavLink>
                    </Flex>
                ))}
            </Flex>

            {/* Next Button (Disabled when no next) */}
            <IconButton
                aria-label="Next"
                size="md"
                variant="ghost"
                onClick={nextPage}
                color={hasNext ? "blue.800" : "gray.400"}
                isDisabled={!hasNext}
                cursor={hasNext ? "pointer" : "not-allowed"}
                _hover={{ bg: hasNext ? "#00000033" : "transparent" }}
            >
                <FaChevronRight />
            </IconButton>
        </Flex>
    );
};

export default MobileFooter;


