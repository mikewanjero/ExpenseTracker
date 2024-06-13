import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/expensesOutput";

export default function recentExpenses() {
  return <ExpensesOutput expensePeriod={"Last 7 Days"} />;
}

const styles = StyleSheet.create({});
