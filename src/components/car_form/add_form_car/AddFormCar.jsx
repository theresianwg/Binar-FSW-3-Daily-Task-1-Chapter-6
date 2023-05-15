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
    props.onClose();
  };

  return (
    <form onSubmit={submitHandler} className="car_controls">
      <div className="car_control">
        <input required id="title" type="text" onChange={(e) => setEnteredTitle(e.target.value)} />
        <label htmlFor="title">Name and type</label>
      </div>
      <div className="car_control">
        <input required id="detail" type="text" onChange={(e) => setEnteredDescription(e.target.value)} />
        <label htmlFor="detail">Detail</label>
      </div>
      <div className="car_control">
        <input required id="stock" type="number" min="1" step="1" onChange={(e) => setEnteredStock(e.target.value)} />
        <label htmlFor="stock">Stock</label>
      </div>
      <div className="car_control">
        <input required id="amount" type="text" onChange={(e) => setEnteredAmount(e.target.value)} />
        <label htmlFor="amount">Amount</label>
      </div>
      <div className="car_control">
        <input required id="date" type="date" min="2019-01-01" max="2023-12-31" onChange={(e) => setEnteredDate(e.target.value)} />
        <label htmlFor="date">Date</label>
      </div>
      <div className="car_button">
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button type="submit">Add Car</button>
      </div>
    </form>
  );
};

export default AddFormCar;
