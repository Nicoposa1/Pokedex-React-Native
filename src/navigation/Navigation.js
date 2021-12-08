import React from "react";
import { Image } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoriteNavigation } from "./FavoriteNavigation";
import { AccountNavigation } from "./AccountNavigation";
import { PokedexNavigation } from "./PokedexNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <Tab.Navigator>
        <Tab.Screen
          name="Favorites"
          component={FavoriteNavigation}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="heart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Pokedex"
          component={PokedexNavigation}
          options={{ 
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: () => (
              renderPokeball()
            )
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountNavigation}
          options={{
            headerShown: false,
            tabBarLabel: "Mi cuenta",
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export { Navigation };

function renderPokeball() {
  return(
    <Image 
      source={require('../assets/pokeball.png')} 
      style={{width: 75, height: 75, top: -15}}
    />
  )
}
