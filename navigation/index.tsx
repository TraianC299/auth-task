import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../screens/LogIn";
import Home from "../screens/Home";
import SignUp from "../screens/SignUp";

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Signup" component={SignUp}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Login" component={LogIn}></Stack.Screen>

    </Stack.Navigator>
  </NavigationContainer>
);
const NavigationProvider = () => {
  return <AuthStack />;
};
export default NavigationProvider;
