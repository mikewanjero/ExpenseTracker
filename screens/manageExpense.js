import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ManageExpense({ route, navigation }) {
  const editedExpenseID = route.params?.expenseID;
  const isEditing = !!editedExpenseID;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.ExpContainer}>
      <Text style={styles.ExpText}>Manage Expense screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ExpContainer: {
    flex: 1,
    margin: 20,
    padding: 10,
    alignItems: "row",
  },
  ExpText: {
    fontSize: 16,
    fontStyle: "italic",
  },
});
