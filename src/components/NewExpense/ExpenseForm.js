import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredStock, setEnteredStock] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const convertToRupiah = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      description: enteredDescription,
      stock: enteredStock,
      amount: convertToRupiah(enteredAmount),
      date: new Date(enteredDate),
    };

    props.onSaveCarData(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name and Type</label>
          <input type="text" value={enteredTitle} onChange={(e) => setEnteredTitle(e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Detail</label>
          <input type="text" value={enteredDescription} onChange={(e) => setEnteredDescription(e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Stock</label>
          <input type="number" min="1" step="1" value={enteredStock} onChange={(e) => setEnteredStock(e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text" value={enteredAmount} onChange={(e) => setEnteredAmount(e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={(e) => setEnteredDate(e.target.value)} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
