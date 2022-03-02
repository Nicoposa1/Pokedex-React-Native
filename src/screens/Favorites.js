import React from 'react'
import { StyleSheet, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {getPokemonFavoriteApi, isPokemonFavoriteApi} from "../api/favorite";

const Favorites = () => {

  
  const checkFavorite = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  }

  return (
    <SafeAreaView >
      <Text>Favorites 1</Text>
      <Button title="Check Favorites" onPress={checkFavorite} />
    </SafeAreaView >
  )
}

export { Favorites }

const styles = StyleSheet.create({})
