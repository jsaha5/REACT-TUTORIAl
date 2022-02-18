import "./Expences.css";

import { Expense } from "../../models/Expense";
import Card from "../ui/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpencesList from "./ExpencesList";
import Chart from "../Chart/Chart";
import { ChartData } from "../../models/ChartData";
import ExpensesChart from "./ExpensesChart";

interface ExpenseProps {
  expences: Expense[];
}

export default function Expences(props: ExpenseProps) {
  const [selectedYear, setSelecteYear] = useState("2020");
  const filteredExpences = props.expences.filter(
    (expense) => expense.expenseDate.getFullYear().toString() === selectedYear
  );
  const onExpenseFilterChangeHandler = (selectedYear: string) => {
    setSelecteYear(selectedYear);
  };

  return (
    <Card className="expences">
      <ExpenseFilter
        selectedYear={selectedYear}
        onFilterChange={onExpenseFilterChangeHandler}
      />
      <ExpensesChart expences = {filteredExpences}/>
      <ExpencesList filteredExpences={filteredExpences} />
    </Card>
  );
}
