import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pokedex } from "../screens/Pokedex";
import { Pokemon } from "../screens/Pokemon";

const Stack = createNativeStackNavigator();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokedexNavigation"
        component={Pokedex}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen 
        name="Pokemon"
        component={Pokemon}
        options={{ title: "", headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export { PokedexNavigation };
