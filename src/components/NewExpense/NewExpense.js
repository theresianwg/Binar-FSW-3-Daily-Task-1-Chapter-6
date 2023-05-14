import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const savingCarData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingCarForm = () => {
    setIsEditing(true);
  };

  const cancelEditingCarForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingCarForm}>Add New Car</button>}
      {isEditing && <ExpenseForm onSaveCarData={savingCarData} onCancel={cancelEditingCarForm} />}
    </div>
  );
};

export default NewExpense;
