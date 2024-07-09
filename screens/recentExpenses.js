import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../store/expensesContext";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import LoadingOverlay from "../UI/LoadingOverlay";

export default function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true); //Checking for items being fetched while loading
  const expensesCtx = useContext(ExpensesContext); // Creating array of items (or empty) while app is loading

  useEffect(() => {
    async function obtainExpenses() {
      setIsFetching(true);
      const expenses = await getExpenses(); //Sending and receiving requests for the expenses
      setIsFetching(false);
      expensesCtx.setExpenses(expenses);
    }

    obtainExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const last7days = getDateMinusDays(today, 7);

    return expense.date >= last7days && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensePeriod="Last 7 Days"
      fallbacktext="No expenses in the last 7 Days"
    />
  );
}
