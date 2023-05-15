import React from "react";
import CarFilter from "./car_filter/CarFilter";
import CarList from "./car_list/CarList";
import "./car_index.css";
import ButtonHandler from "../car_form/button_handler/ButtonHandler";

const CarIndex = (props) => {
  const [filteredYear, setFilteredYear] = React.useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredCar = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      <div className="card-of-car">
        <div className="handler-button">
          <ButtonHandler onAddCar={props.onAddCar} />
          <CarFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        </div>
        <CarList items={filteredYear === "All" ? props.items : filteredCar} />
      </div>
    </>
  );
};

export default CarIndex;
