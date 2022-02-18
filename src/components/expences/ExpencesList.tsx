import { Expense } from "../../models/Expense";
import "./ExpencesList.css";
import ExpenseItem from "./ExpenseItem";
type ExpencesListProps = {
  filteredExpences: Expense[];
};
const ExpencesList = (props: ExpencesListProps) => {
  if (props.filteredExpences.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no expences.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.filteredExpences.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense}></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpencesList;
