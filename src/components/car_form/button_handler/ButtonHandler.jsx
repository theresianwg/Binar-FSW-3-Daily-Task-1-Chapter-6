import React from "react";
import AddFormCar from "../add_form_car/AddFormCar";
import "./button_handler.css";

const ButtonHandler = (props) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [classname, setClassname] = React.useState("d-none");
  console.log(openModal);
  const savingCarData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddCar(expenseData);
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
    setClassname("d-block");
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setClassname("d-none");
  };
  return (
    <>
      <div className="btns">
        <button onClick={handleOpenModal}>Add New Car</button>
      </div>
      <div className={classname} onClose={handleCloseModal}>
        <AddFormCar onSaveCarData={savingCarData} onClose={handleCloseModal} />
      </div>
    </>
  );
};

export default ButtonHandler;
