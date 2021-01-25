import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, createAppContainer} from "@react-navigation/stack"
import Home from "./screens/Home"
import Persona3 from "./screens/Persona3"

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initalRouteName="Home">
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Persona3" component={Persona3} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}


