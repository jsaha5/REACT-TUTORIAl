import React, { useState } from "react";
import "./ExpenseItem.css";
import { Expense } from "../../models/Expense";
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
interface Props {
  expense: Expense;
}

export default function ExpenseItem(props: Props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={props.expense.expenseDate}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.expense.expenseTitle}</h2>
          <div className="expense-item__price">
            ${props.expense.expenseAmount}
          </div>
        </div>
      </Card>
    </li>
  );
}
