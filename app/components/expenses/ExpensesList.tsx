import type dayjs from "dayjs";

import ExpenseListItem from "./ExpenseListItem";

interface ExpenseListProps {
  expenses: {
    id: string;
    title: string;
    amount: number;
    date: string | number | dayjs.Dayjs;
  }[];
}

function ExpensesList({ expenses }: ExpenseListProps) {
  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
