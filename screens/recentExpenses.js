import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expensesContext";
import { getDateMinusDays } from "../util/date";

export default function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const last7days = getDateMinusDays(today, 7);

    return expense.date >= last7days && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensePeriod="Last 7 Days"
      fallbacktext={"No expenses in the last 7 Days"}
    />
  );
}
