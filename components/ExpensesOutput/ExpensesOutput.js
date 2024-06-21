import { StyleSheet, View } from "react-native";
import React from "react";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import Constants from "./../../constants/styles";

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
