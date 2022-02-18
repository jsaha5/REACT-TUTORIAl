import { Expense } from "../../models/Expense";
import Chart from "../Chart/Chart";

type ExpenseChartProps = {
  expences: Expense[]
}

const ExpensesChart = (props: ExpenseChartProps) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expences) {
    const expenseMonth = expense.expenseDate.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.expenseAmount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;