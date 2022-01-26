import { StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';
import { map, capitalize } from 'lodash'
import getColorByPokemonType  from "../../utils/getColorByPokemonType";

const Type = (props) => {
  const { types } = props;

  return (
    <View style={styles.content}> 
      {map(types, (type, index) => (
        <View key={index} style={{...styles.pill, backgroundColor: getColorByPokemonType(type.type.name)}}>
          <Text style={styles.type}>
            {capitalize(type.type.name)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export { Type };

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }, 
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
