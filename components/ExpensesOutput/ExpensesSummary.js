import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ExpensesSummary({ expenses, periodName }) {
  const expSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
