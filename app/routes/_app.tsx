// e.g. /expenses/add
import { Outlet } from "@remix-run/react";
import expensesStyles from "~/styles/expenses.css";

const ExpensesAppLayout = () => {
  return <Outlet />;
};

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

export default ExpensesAppLayout;
