import React from "react";

import ButtonHandler from "./components/car_form/button_handler/ButtonHandler";
import CarIndex from "./components/list_car/CarIndex";

import "./app.css";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "Mercedes Benz G-Class",
    description: "SUV, Black, 4, Matic",
    stock: 2,
    amount: "Rp 4.500.000.000",
    date: new Date(2021, 7, 20),
  },
  {
    id: "2",
    title: "Hyundai CRETA Active MT 6-speed ( Active )",
    description: "SUV, White, 4, Matic",
    stock: 5,
    amount: "Rp 350.000.000",
    date: new Date(2020, 1, 7),
  },
  {
    id: "3",
    title: "Mazda 3 Hatchback",
    description: "Elita, Red, 5, Matic",
    stock: 3,
    amount: "Rp 530.000.000",
    date: new Date(2022, 11, 3),
  },
  {
    id: "4",
    title: "Mitsubishi Outlander PHEV",
    description: "SUV, Black, 5, Matic",
    stock: 4,
    amount: "Rp 1.320.000.000",
    date: new Date(2019, 7, 20),
  },
  {
    id: "5",
    title: "Toyota Innova Zenix",
    description: "SUV, Grey, 8, Matic",
    stock: 10,
    amount: "Rp 430.000.000",
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  const [cars, setCars] = React.useState(DUMMY_EXPENSES);

  const addExpenseHandler = (car) => {
    setCars((prevCars) => {
      return [car, ...prevCars];
    });
  };

  return (
    <div className="parent">
      <ButtonHandler onAddCar={addExpenseHandler} />
      <CarIndex items={cars} />
    </div>
  );
};

export default App;
