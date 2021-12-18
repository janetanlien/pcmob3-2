import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AddScreen from "./AddScreen";
import NotesStack from "./NotesStack";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
 } from "react-native";
 import { Entypo } from "@expo/vector-icons";
 

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
     <Stack.Navigator mode="modal" headerMode="none">
       <Stack.Screen
         name="Notes Stack"
         component={NotesStack}
         options={{ headerShown: false }}
       />
       <Stack.Screen name="Add Note" component={AddScreen} />
     </Stack.Navigator>
   </NavigationContainer>
 );
}
