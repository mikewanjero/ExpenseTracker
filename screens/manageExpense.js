import { useContext, useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../UI/IconButton";
import Constants from "./../constants/styles";
import CustomButton from "../UI/CustomButton";
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

  function DeleteExpressHandler() {
    expensesCtx.deleteExpense(editedExpenseID);
    navigation.goBack();
  }

  function CancelHandler() {
    navigation.goBack();
  }

  function ConfirmHandler() {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseID, {
        title: "Testing",
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
          mode="flat"
          onButtonPress={CancelHandler}
          style={styles.button}
        >
          Cancel
        </CustomButton>
        <CustomButton onButtonPress={ConfirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </CustomButton>
      </View>
      {isEditing && (
        <View style={styles.DeleteContainer}>
          <IconButton
            icon="trash"
            color={Constants.colors.error500}
            size={36}
            onBtnPress={DeleteExpressHandler}
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
    minWidth: 100,
    marginHorizontal: 8,
  },
  DeleteContainer: {
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: Constants.colors.error500,
  },
});
