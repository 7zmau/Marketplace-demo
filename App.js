import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home"; // TODO: IMPROVEMENT NE..D

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // UI H:9 W:4 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Grocery" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
