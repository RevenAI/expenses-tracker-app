import { Flex, Box, Icon, Card, Text, Separator } from "@chakra-ui/react";
import { IoReceiptOutline } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { TbReport } from "react-icons/tb";
import { RiDraftFill } from "react-icons/ri";

const SectionTwo = () => {
  return (
    <Flex as="section" justify="center" align="center" p={4} w="full">
      <Card.Root w="full" boxShadow="xl" borderRadius="xl" p={6} bg="white">
        <Card.Header>
          <Card.Title fontSize="sm" fontWeight="bold" color="black" textAlign="start">
            Quick Access
          </Card.Title>
          <Separator my={4} />
        </Card.Header>
        <Card.Body>
          <Flex justify="space-between" wrap="wrap" gap={4}>
            {[
              { icon: FaMoneyBillWave, label: "Add Expense", color: "green" },
              { icon: IoReceiptOutline, label: "Add Receipt", color: "orange" },
              { icon: TbReport, label: "Add Report", color: "blue" },
              { icon: RiDraftFill, label: "Make Draft", color: "gold" },
            ].map((item, index) => (
              <Box
                key={index}
                p={4}
                w={{ base: "45%", md: "22%" }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                borderRadius="lg"
                bg="gray.100"
                _hover={{ bg: "gray.200", transform: "scale(1.05)" }}
                transition="0.3s ease-in-out"
                cursor="pointer"
              >
                <Icon as={item.icon} boxSize={8} color={item.color} mb={2} />
                <Text fontSize="md" fontWeight="medium" color="gray.600">
                  + {item.label}
                </Text>
              </Box>
            ))}
          </Flex>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
};

export default SectionTwo;


