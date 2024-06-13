import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import manageExpense from "./screens/manageExpense";
import recentExpenses from "./screens/recentExpenses";
import allExpenses from "./screens/allExpenses";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function expenseOverview() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Recent Expenses" component={recentExpenses} />
      <Tab.Screen name="All Expenses" component={allExpenses} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Expenses Overview">
          <Stack.Screen name="Manage Expense" component={manageExpense} />
          <Stack.Screen name="Expenses Overview" component={expenseOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
