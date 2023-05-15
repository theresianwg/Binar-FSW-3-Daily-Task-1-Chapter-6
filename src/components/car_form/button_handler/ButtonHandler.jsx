import React from "react";
import AddFormCar from "../add_form_car/AddFormCar";
import "./button_handler.css";

const ButtonHandler = (props) => {
  const [openModal, setOpenModal] = React.useState(false);
  const [activeCLass, setActiveCLass] = React.useState("");
  console.log(openModal);
  const savingCarData = (enteredCarData) => {
    const carData = {
      ...enteredCarData,
      id: Math.random().toString(),
    };
    props.onAddCar(carData);
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
    setActiveCLass("active");
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setActiveCLass("");
  };

  return (
    <section className={activeCLass}>
      <button onClick={handleOpenModal} class="show-modal">
        Add New Car
      </button>
      <span onClick={handleCloseModal} class="overlay"></span>
      <div class="modal-box">
        <AddFormCar onClose={handleCloseModal} onSaveCarData={savingCarData} />
      </div>
    </section>
  );
};

export default ButtonHandler;
