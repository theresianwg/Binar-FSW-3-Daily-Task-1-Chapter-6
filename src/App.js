import React from "react";

import CarIndex from "./components/list_car/CarIndex";

const CAR_DATA_DUMMY = [
  {
    id: "1",
    title: "Mercedes Benz G-Class",
    description: "SUV, Black, 4, Matic",
    stock: 2,
    amount: "4.500.000.000",
    date: new Date(2021, 7, 20),
  },
  {
    id: "2",
    title: "Hyundai CRETA Active MT 6-speed ( Active )",
    description: "SUV, White, 4, Matic",
    stock: 5,
    amount: "350.000.000",
    date: new Date(2020, 1, 7),
  },
  {
    id: "3",
    title: "Mazda 3 Hatchback",
    description: "Elita, Red, 5, Matic",
    stock: 3,
    amount: "530.000.000",
    date: new Date(2022, 11, 3),
  },
  {
    id: "4",
    title: "Mitsubishi Outlander PHEV",
    description: "SUV, Black, 5, Matic",
    stock: 4,
    amount: "1.320.000.000",
    date: new Date(2019, 7, 20),
  },
  {
    id: "5",
    title: "Toyota Innova Zenix",
    description: "SUV, Grey, 8, Matic",
    stock: 10,
    amount: "430.000.000",
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  const [cars, setCars] = React.useState(CAR_DATA_DUMMY);

  const addCarHandler = (car) => {
    setCars((prevCars) => {
      return [car, ...prevCars];
    });
  };

  return (
    <>
      <CarIndex items={cars} onAddCar={addCarHandler} />
    </>
  );
};

export default App;
