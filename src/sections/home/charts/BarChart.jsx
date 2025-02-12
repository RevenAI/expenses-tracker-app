import { Box, Flex, Text } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

/* This props comes from SectionThree */
const BarChart = ({
    totalExpenses = 0,
    approvedExpenses = 0,
    rejectedExpenses = 0,
    pendingApprovals = 0,
    unreportedExpenses = 0,
    upcomingExpenses = 0,
}) => {

    const barChartData = {
        labels: ["Total", "Approved", "Rejected", "Pending", "Unreported", "Upcoming"],
        datasets: [
            {
                label: "Expense Stats",
                data: [
                    totalExpenses,
                    approvedExpenses,
                    rejectedExpenses,
                    pendingApprovals,
                    unreportedExpenses,
                    upcomingExpenses
                ],
                backgroundColor: ["#4CAF50", "#2196F3", "#FF5722", "#FFC107", "#9C27B0", "#795548"],
                borderRadius: 10,
            },
        ],
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Expense Statistics",
                font: { size: 16 },
                textAlign: "center",
            },
        },
    };

    return (
        <Flex direction="column" align="center" w="100%" p={5}>
            <Box w="80%" h="400px" mb={8}>
            <Text fontSize="lg" mb={2} textAlign="center" fontWeight="bold" color="green">Expense Distribution</Text>
                <Bar data={barChartData} options={barChartOptions} />
            </Box>
        </Flex>
    );
};

export default BarChart;


