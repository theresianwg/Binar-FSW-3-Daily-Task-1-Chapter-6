import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__name">
          <h2>{props.title}</h2>
          <div className="expense-item__description">
            <p>{props.description}</p>
            <div className="expense-item__stock">
              <h3>Stock : {props.stock}</h3>
              <div className="expense-item__price">{props.amount}</div>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
