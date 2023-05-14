import React from "react";
import "./add_form_car.css";

const AddFormCar = (props) => {
  const [enteredTitle, setEnteredTitle] = React.useState("");
  const [enteredDescription, setEnteredDescription] = React.useState("");
  const [enteredStock, setEnteredStock] = React.useState("");
  const [enteredAmount, setEnteredAmount] = React.useState("");
  const [enteredDate, setEnteredDate] = React.useState("");

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

    props.onSaveExpenseData(expenseData);
  };

  return (
    <div className="modal">
      <form onSubmit={submitHandler} className="car_controls">
        <div className="car_control">
          <label>Name and type</label>
          <input type="text" value={enteredTitle} onChange={(e) => setEnteredTitle(e.target.value)} />
        </div>
        <div className="car_control">
          <label>Detail</label>
          <input type="text" value={enteredDescription} onChange={(e) => setEnteredDescription(e.target.value)} />
        </div>
        <div className="car_control">
          <label>Stock</label>
          <input type="number" min="1" step="1" value={enteredStock} onChange={(e) => setEnteredStock(e.target.value)} />
        </div>
        <div className="car_control">
          <label>Amount</label>
          <input type="text" value={enteredAmount} onChange={(e) => setEnteredAmount(e.target.value)} />
        </div>
        <div className="car_control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={(e) => setEnteredDate(e.target.value)} />
        </div>
        <div className="car_button">
          <button type="button" onClick={props.onClose}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default AddFormCar;
