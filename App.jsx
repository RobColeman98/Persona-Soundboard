import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, createAppContainer} from "@react-navigation/stack"
import Home from "./screens/Home"
import Persona3 from "./screens/Persona3"
import Persona4 from "./screens/Persona4"
import Persona5 from "./screens/Persona5"
import VelvetRoom from "./screens/Velvet-Room"

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initalRouteName="Home">
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Persona3" component={Persona3} />
       <Stack.Screen name="Persona4" component={Persona4} />
       <Stack.Screen name="Persona5" component={Persona5} />
       <Stack.Screen name="Velvet-Room" component={VelvetRoom} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}


