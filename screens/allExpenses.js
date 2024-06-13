import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ExpensesOutput from "../components/ExpensesOutput/expensesOutput";

export default function allExpenses() {
  return <ExpensesOutput expensePeriod={"Total"} />;
}

const styles = StyleSheet.create({});
