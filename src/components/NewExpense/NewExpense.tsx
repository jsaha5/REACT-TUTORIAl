import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { Expense } from "../../models/Expense";
import React, { useState } from "react";

interface NewExpenseProps {
  onNewExpense: (expnse: Expense) => void;
}
const NewExpense = (props: NewExpenseProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };
  const saveExpenseDataHandler = (expense: Expense) => {
    props.onNewExpense(expense);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addNewExpenseHandler}> Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
