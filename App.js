import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import manageExpense from "./screens/manageExpense";
import recentExpenses from "./screens/recentExpenses";
import allExpenses from "./screens/allExpenses";
import Constants from "./constants/styles";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function expenseOverview() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Constants.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Constants.colors.primary500 },
        tabBarActiveTintColor: Constants.colors.accent500,
      }}
    >
      <Tab.Screen
        name="Recent Expenses"
        component={recentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="hourglass-empty" size={size} color={color} />
          ),
        }}
      />
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
          <Stack.Screen
            name="Expenses Overview"
            component={expenseOverview}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
