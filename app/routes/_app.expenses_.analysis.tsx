import dayjs from "dayjs";
import Chart from "~/components/expenses/Chart";
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";

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

const ExpensesAnalysisPage = () => {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
};

export default ExpensesAnalysisPage;
