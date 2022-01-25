import { Image, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

const Header = (props) => {
  const { name, order, image, type } = props;

  const color = getColorByPokemonType(type);

  const bgStyle = [{ backgroundColor: color,  ...styles.bg}];

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.containerImg}>
          <Image source={{ url: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

export { Header };

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20, 
    marginTop: 30,
  },  
  containerImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30, 
  },
  image: {
    width: 250,
    height: 250,
  },
});
