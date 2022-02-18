export class Expense {
  id: string;
  expenseDate: Date;
  expenseTitle: string;
  expenseAmount: number;

  constructor(
    id: string,
    expenseDate: Date,
    expenseTitle: string,
    expenseAmount: number
  ) {
    this.expenseAmount = expenseAmount;
    this.expenseDate = expenseDate;
    this.expenseTitle = expenseTitle;
    this.id = id;
  }
}
