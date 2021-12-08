import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Account } from "../screens/Account";


const Stack = createNativeStackNavigator()

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AccountNavigation" component={Account} options={{title: 'Mi cuenta'}} />
    </Stack.Navigator>
  )
}

export {AccountNavigation}
