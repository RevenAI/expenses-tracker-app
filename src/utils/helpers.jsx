
const getEnvUrl = () => {
    return import.meta.env.MODE === "production"
        ? import.meta.env.VITE_API_PROD_URL
        : import.meta.env.VITE_API_DEV_URL;
};

const getExpenseStats = (data) => {
    if (!Array.isArray(data)) {
        throw new Error("Invalid data: Expected an array of expenses.");
    }

    const totalExpenses = data.reduce((sum, expense) => sum + (expense.amount || 0), 0);
    const approvedExpenses = data.filter(expense => expense.status === "approved").length;
    const rejectedExpenses = data.filter(expense => expense.status === "rejected").length;
    const pendingApprovals = data.filter(expense => expense.status === "pending").length;
    const unreportedExpenses = data.filter(expense => !expense.isReported).length;
    const upcomingExpenses = data.filter(expense => new Date(expense.date) > new Date()).length;
    
    const unreportedAdvances = data
        .filter(expense => expense.inAdvance)
        .reduce((sum, expense) => sum + (expense.amount || 0), 0);
    
    const categoryCount = data.reduce((acc, expense) => {
        if (expense.category) {
            acc[expense.category] = (acc[expense.category] || 0) + 1;
        }
        return acc;
    }, {});

    const mostFrequentCategory = Object.keys(categoryCount).reduce(
        (a, b) => (categoryCount[a] > categoryCount[b] ? a : b),
        ""
    );

    const expenseAmounts = data.map(expense => expense.amount || 0);
    const highestExpense = Math.max(...expenseAmounts, 0);
    const lowestExpense = Math.min(...expenseAmounts, 0);

    return {
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
        categoryCount
    };
};

const getInitials = (name) => {
    if (!name) return "??"; 
    const nameParts = name.split(" ");
    return nameParts
        .slice(0, 2) // Take first two words
        .map((part) => part.charAt(0).toUpperCase()) // Get first letter and capitalize
        .join(""); // Join initials
};

export { 
    getEnvUrl,
    getExpenseStats,
    getInitials,
 };

