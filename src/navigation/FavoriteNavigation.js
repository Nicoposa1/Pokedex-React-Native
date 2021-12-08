import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Favorites } from "../screens/Favorites";


const Stack = createNativeStackNavigator()

const FavoriteNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoritesNavigation" component={Favorites} options={{title: 'Favoritos'}} />
    </Stack.Navigator>
  )
}

export {FavoriteNavigation}
