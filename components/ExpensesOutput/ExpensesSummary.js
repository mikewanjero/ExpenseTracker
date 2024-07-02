import { StyleSheet, Text, View } from "react-native";
import Constants from "./../../constants/styles";

export default function ExpensesSummary({ expenses, periodName }) {
  const expSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: Constants.colors.primary50,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: Constants.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: Constants.colors.primary500,
  },
});
