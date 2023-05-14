import React from "react";
import Card from "../UI/Card";
import CarFilter from "./car_filter/CarFilter";
import CarList from "./car_list/CarList";
import "./car_index.css";

const CarIndex = (props) => {
  const [filteredYear, setFilteredYear] = React.useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      <Card className="card-of-car">
        <CarFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <CarList items={filteredYear === "All" ? props.items : filteredExpenses} />
      </Card>
    </>
  );
};

export default CarIndex;
