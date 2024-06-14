import { StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

export default function RecentExpenses() {
  return <ExpensesOutput expensePeriod="Last 7 Days" />;
}

const styles = StyleSheet.create({});
