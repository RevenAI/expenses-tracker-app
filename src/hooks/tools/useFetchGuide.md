import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const ExpensesComponent = () => {
  const { data, loading, error, refetch } = useFetch("/api/expenses");

  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
  });

  const handleChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  // POST Request - Add New Expense
  const handleAddExpense = async () => {
    const { refetch } = useFetch("/api/expenses", "POST", newExpense);
    await refetch();
  };

  // PUT Request - Update an Expense (Example: Updating the first expense)
  const handleUpdateExpense = async (id, updatedData) => {
    const { refetch } = useFetch(`/api/expenses/${id}`, "PUT", updatedData);
    await refetch();
  };

  // DELETE Request - Remove an Expense
  const handleDeleteExpense = async (id) => {
    const { refetch } = useFetch(`/api/expenses/${id}`, "DELETE");
    await refetch();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Expenses</h2>

      {/* Display Expenses */}
      {data && data.length > 0 ? (
        <ul>
          {data.map((expense) => (
            <li key={expense.id}>
              {expense.title} - {expense.amount} 
              <button onClick={() => handleUpdateExpense(expense.id, { title: "Updated Expense", amount: 2000 })}>
                Update
              </button>
              <button onClick={() => handleDeleteExpense(expense.id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No expenses found.</p>
      )}

      {/* Form to Add New Expense */}
      <h3>Add New Expense</h3>
      <input
        type="text"
        name="title"
        placeholder="Expense Title"
        value={newExpense.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={newExpense.amount}
        onChange={handleChange}
      />
      <button onClick={handleAddExpense}>Add Expense</button>

      {/* Refresh Data */}
      <button onClick={refetch}>Refresh</button>
    </div>
  );
};

export default ExpensesComponent;
