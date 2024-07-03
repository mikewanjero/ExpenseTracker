import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-exptracker-268ce-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
