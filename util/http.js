import axios from "axios";

//Easier to store URL for code
const BACKEND_URL =
  "https://react-native-exptracker-268ce-default-rtdb.firebaseio.com";

//function to connect expenseData to FireBase backend with realtime DB.
export async function storeExpense(expenseData) {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
}

//Getting expenses from backend
export async function getExpenses() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      title: response.data[key].title,
    };
    expenses.push(expenseObject);
  }

  return expenses;
}
//Update and Delete helper functions(backend)
export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
