import "./ExpenseForm.css";
import React, { useState } from "react";
import { Expense } from "../../models/Expense";

interface ExpenseFormProps {
  onSaveExpenseData: (expense: Expense) => void;
  onCancel: () => void;
}

const ExpenseForm = (props: ExpenseFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };
  const amoutChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredDate(event.target.value);
  };
  const reset = () => {
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  const addExpenseHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const expense = new Expense(
      Math.random().toString(),
      new Date(enteredDate),
      enteredTitle,
      parseFloat(enteredAmount)
    );

    props.onSaveExpenseData(expense);
    reset();
  };

  return (
    <form onSubmit={addExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount</label>
          <input
            type="number"
            min="0.1"
            step="0.01"
            value={enteredAmount}
            onChange={amoutChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
