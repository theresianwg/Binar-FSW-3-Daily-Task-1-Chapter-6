import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Mercedes Benz G-Class',
    description: 'SUV, Black, 4, Matic',
    stock: 2,
    amount: '4.500.000.000',
    date: new Date(2021, 7, 20),
  },
  { 
    id: 'e2', 
    title: 'Hyundai CRETA Active MT 6-speed ( Active )',
    description: 'SUV, White, 4, Matic',
    stock: 5,
    amount: '350.000.000',
    date: new Date(2020, 1, 7), 
  },
  {
    id: 'e3',
    title: 'Mazda 3 Hatchback',
    description: 'Elita, Red, 5, Matic',
    stock: 3,
    amount: '530.000.000',
    date: new Date(2022, 11, 3), 
  },
  {
    id: 'e4',
    title: 'Mitsubishi Outlander PHEV',
    description: 'SUV, Black, 5, Matic',
    stock: 4,
    amount: '1.320.000.000',
    date: new Date(2019, 7, 20),
  },
  {
    id: 'e5',
    title: 'Toyota Innova Zenix',
    description: 'SUV, Grey, 8, Matic',
    stock: 10,
    amount: '430.000.000',
    date: new Date(2023, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
