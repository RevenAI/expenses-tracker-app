import { Box, Flex, Text } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ latestExpenses = [] }) => {
    
    const expenseAmounts = latestExpenses.length ? latestExpenses.map(expense => expense.amount || 0) : [0, 0, 0, 0, 0, 0];
    const expenseLabels = latestExpenses.length ? latestExpenses.map((_, index) => `Expense ${index + 1}`) : ["1st", "2nd", "3rd", "4th", "5th", "6th"];

    const lineChartData = {
        labels: expenseLabels,
        datasets: [
            {
                label: "Expense Amount",
                data: expenseAmounts,
                borderColor: "#673AB7",
                backgroundColor: "rgba(103, 58, 183, 0.5)",
                tension: 0.4, 
                fill: true,
                pointRadius: 5,
                pointHoverRadius: 7,
            },
        ],
    };

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" },
            title: {
                display: true,
                text: "Recent Expense Trends",
                font: { size: 16 },
            },
        },
        scales: {
            y: { beginAtZero: true }, 
        },
    };

    return (
        <Flex direction="column" align="center" w="100%" p={5}>
            <Box w="80%" h="400px">
            <Text fontSize="lg" mb={2} textAlign="center" fontWeight="bold" color="green">Recent Expenses Trend</Text>
                <Line data={lineChartData} options={lineChartOptions} />
            </Box>
        </Flex>
    );
};

export default LineChart;

