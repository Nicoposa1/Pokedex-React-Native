import React from 'react'
import { capitalize } from 'lodash'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'

import getColorByPokemonType from '../utils/getColorByPokemonType'

const PokemonCard = (props) => {
  const { pokemon } = props

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    console.log(`go to pokemon: ${pokemon.name}`)
    // props.navigation.navigate('Pokemon', { pokemon })
  }

  return (
    <TouchableWithoutFeedback onPress={goToPokemon} >
      <View style={styles.card} >
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number} >#{`${pokemon.order}`.padStart(3, 0)}</Text>
            <Text style={styles.name} >{capitalize(pokemon.name)}</Text>
            <Image style={styles.image} source={{ uri: pokemon.image }} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export {PokemonCard}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing:{
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 5,
  },
  image:{
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  number:{
    position: 'absolute',
    right: 10,
    top: 10,
    color: 'white',
    fontSize: 10,
  },
})
