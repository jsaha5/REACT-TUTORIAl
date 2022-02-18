import React, { useState } from "react";
import "./App.css";
import Expences from "./components/expences/Expences";
import NewExpense from "./components/NewExpense/NewExpense";
import Card from "./components/ui/Card";
import { Expense } from "./models/Expense";
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    expenseTitle: 'Toilet Paper',
    expenseAmount: 94.12,
    expenseDate: new Date(2020, 7, 14),
  },
  { id: 'e2', expenseTitle: 'New TV', expenseAmount: 799.49, expenseDate: new Date(2021, 2, 12) },
  {
    id: 'e3',
    expenseTitle: 'Car Insurance',
    expenseAmount: 294.67,
    expenseDate: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    expenseTitle: 'New Desk (Wooden)',
    expenseAmount: 450,
    expenseDate: new Date(2021, 5, 12),
  },
];
export default function App() {
  const [expenses, setExpences] = useState<Expense[]>(DUMMY_EXPENSES);
  const onNewExpenseHandler = (expense: Expense) => {
    console.log("onNewExpenseHandler");
    setExpences((expences) => {
      return [...expenses, expense];
    });
    expenses.forEach((e) => console.log(e.expenseTitle));
  };
  return (
    <div>
      <Card className="main-wrapper">
        <NewExpense onNewExpense={onNewExpenseHandler}></NewExpense>
        <Expences expences={expenses}></Expences>
      </Card>
    </div>
  );
}
