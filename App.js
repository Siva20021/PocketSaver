import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Provider } from "react-redux";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

import Home from "./screens/Home";
import UserProfile from "./screens/UserProfile";
import Billing from "./screens/Billing";
import RecordPage from "./screens/RecordPage";
//import { store } from "./redux/store";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Provider store={store}>
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Billing"
            component={Billing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RecordPage"
            component={RecordPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
