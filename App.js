import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import ManageExpense from "./screens/manageExpense";
import RecentExpenses from "./screens/recentExpenses";
import AllExpenses from "./screens/allExpenses";
import Constants from "./constants/styles";
import IconButton from "./UI/IconButton";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpenseOverview() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Constants.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Constants.colors.primary500 },
        tabBarActiveTintColor: Constants.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onBtnPress={() => {
              navigation.navigate("Manage Expense");
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        name="Recent Expenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent Expenses",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="hourglass-empty" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="calendar-month" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Expenses Overview"
          screenOptions={{
            headerStyle: { backgroundColor: Constants.colors.primary500 },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Expenses Overview"
            component={ExpenseOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Manage Expense"
            component={ManageExpense}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
