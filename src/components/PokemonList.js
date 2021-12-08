import React from 'react'
import { StyleSheet, FlatList, Text } from 'react-native'

const PokemonList = (props) => {
  const { pokemons } = props
  return (
    <FlatList 
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({item}) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  )
}

export {PokemonList}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
  }
})
