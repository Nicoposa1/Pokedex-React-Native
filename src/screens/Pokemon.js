import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonDetailsApi } from '../api/pokemon'

const Pokemon = (props) => {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id)
        setPokemon(response)
      }catch (error) {
        navigation.goBack()
      }
    })()
  }, [params])
  
  if(!pokemon) return null

  return (
    <View style={styles.container}>
      <Text>{pokemon.name}</Text>
    </View>
  );
};

export { Pokemon };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
