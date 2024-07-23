/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useFinancialRecords, addRecord } from "../../contexts/financial-record-context";

const Expense: React.FC = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const { records, addRecord } = useFinancialRecords();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newRecord = {
      description,
      amount,
      category,
      paymentMethod,
      date: new Date(),
      userId: "user-id-from-context" // Replace with actual user ID retrieval
    };

    await addRecord(newRecord);

    setDescription("");
    setAmount(0);
    setCategory("");
    setPaymentMethod("");
  };

  return (
    <div className="expense-container">
      <h2>Record Expense</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          {/* Add more category options as needed */}
        </select>
        <label htmlFor="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="">Select Payment Method</option>
          <option value="Cash">Cash</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          {/* Add more payment method options as needed */}
        </select>
        <button type="submit">Record Expense</button>
      </form>
    </div>
  );
};

export default Expense;
