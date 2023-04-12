import { Outlet } from "@remix-run/react";
import dayjs from "dayjs";
import ExpensesList from "~/components/expenses/ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: dayjs(),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 1300,
    date: dayjs(),
  },
];

const ExpensesLayout = () => {
  return (
    <>
      <Outlet />
      <main>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
};

export default ExpensesLayout;
