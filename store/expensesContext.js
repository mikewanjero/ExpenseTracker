import { createContext, useReducer } from "react";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-09"),
  },
  {
    id: "e2",
    title: "A pair of trousers",
    amount: 119.99,
    date: new Date("2021-03-24"),
  },
  {
    id: "e3",
    title: "A pair of apples",
    amount: 19.99,
    date: new Date("2023-05-30"),
  },
  {
    id: "e4",
    title: "A book",
    amount: 39.99,
    date: new Date("2024-01-18"),
  },
  {
    id: "e5",
    title: "Another book",
    amount: 29.99,
    date: new Date("2024-01-15"),
  },
  {
    id: "e6",
    title: "A pair of trousers",
    amount: 119.99,
    date: new Date("2021-03-24"),
  },
  {
    id: "e7",
    title: "A pair of apples",
    amount: 19.99,
    date: new Date("2023-05-30"),
  },
  {
    id: "e8",
    title: "A book",
    amount: 39.99,
    date: new Date("2024-01-18"),
  },
  {
    id: "e9",
    title: "Another book",
    amount: 29.99,
    date: new Date("2024-01-15"),
  },
  {
    id: "e10",
    title: "Book Vol 2",
    amount: 29.99,
    date: new Date("2024-06-20"),
  },
  {
    id: "e11",
    title: "Wuthering Heights",
    amount: 29.99,
    date: new Date("2024-06-16"),
  },
  {
    id: "e12",
    title: "A Handmaid's Tale",
    amount: 29.99,
    date: new Date("2024-06-18"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
});

function ExpensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = {
        ...updatableExpense,
        ...action.payload.expenseData,
      };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id != action.payload);
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(ExpensesReducer, Dummy_Expenses);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, expenseData: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
