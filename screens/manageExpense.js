import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import IconButton from "../UI/IconButton";
import CustomButton from "../UI/CustomButton";
import Constants from "./../constants/styles";
import { ExpensesContext } from "../store/expensesContext";

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseID = route.params?.expenseID;
  const isEditing = !!editedExpenseID;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseID);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseID, {
        title: "Test!!!!",
        amount: 29.99,
        date: new Date("2024-06-25"),
      });
    } else {
      expensesCtx.addExpense({
        title: "Test",
        amount: 19.99,
        date: new Date("2024-06-24"),
      });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <CustomButton
          style={styles.button}
          mode="flat"
          onButtonPress={cancelHandler}
        >
          Cancel
        </CustomButton>
        <CustomButton style={styles.button} onButtonPress={confirmHandler}>
          {isEditing ? "Update" : "Add"}
        </CustomButton>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={Constants.colors.error500}
            size={36}
            onBtnPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Constants.colors.primary800,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Constants.colors.primary200,
    alignItems: "center",
  },
});
