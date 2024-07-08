import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import ExpenseForm from "../components/ExpenseMgt/ExpenseForm";
import IconButton from "../UI/IconButton";
import Constants from "./../constants/styles";
import { ExpensesContext } from "../store/expensesContext";
import { storeExpense, updateExpense, deleteExpense } from "../util/http";

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseID = route.params?.expenseID;
  const isEditing = !!editedExpenseID;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseID
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  async function deleteExpenseHandler() {
    //deleting locally, then in db, then go back to previous action
    expensesCtx.deleteExpense(editedExpenseID);
    await deleteExpense(editedExpenseID);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    if (isEditing) {
      //updating locally, then in db, then go back to previous action; else add...
      expensesCtx.updateExpense(editedExpenseID, expenseData);
      await updateExpense(editedExpenseID, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      expensesCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
        AddUpdateValues={selectedExpense}
      />
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
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Constants.colors.primary200,
    alignItems: "center",
  },
});
