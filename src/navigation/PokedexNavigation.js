import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Pokedex } from "../screens/Pokedex";


const Stack = createNativeStackNavigator()

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PokedexNavigation" component={Pokedex} options={{title: 'Pokedex'}} />
    </Stack.Navigator>
  )
}

export {PokedexNavigation}
