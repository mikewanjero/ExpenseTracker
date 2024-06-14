import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import Constants from "./../../constants/styles";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-09"),
  },
  {
    id: "e2",
    title: "A pair of trousers",
    amount: 119.99,
    date: new Date("2021-03-24"),
  },
  {
    id: "e3",
    title: "A pair of apples",
    amount: 19.99,
    date: new Date("2023-05-30"),
  },
  {
    id: "e4",
    title: "A book",
    amount: 39.99,
    date: new Date("2024-01-18"),
  },
  {
    id: "e5",
    title: "Another book",
    amount: 29.99,
    date: new Date("2024-01-15"),
  },
  {
    id: "e6",
    title: "A pair of trousers",
    amount: 119.99,
    date: new Date("2021-03-24"),
  },
  {
    id: "e7",
    title: "A pair of apples",
    amount: 19.99,
    date: new Date("2023-05-30"),
  },
  {
    id: "e8",
    title: "A book",
    amount: 39.99,
    date: new Date("2024-01-18"),
  },
  {
    id: "e9",
    title: "Another book",
    amount: 29.99,
    date: new Date("2024-01-15"),
  },
];

export default function ExpensesOutput({ expenses, expensePeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={Dummy_Expenses} periodName={expensePeriod} />
      <ExpensesList expenses={Dummy_Expenses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    paddingTop: 24,
    paddingHorizontal: 24,
    backgroundColor: Constants.colors.primary700,
  },
});
