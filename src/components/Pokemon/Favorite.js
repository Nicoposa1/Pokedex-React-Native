import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";

const Favorite = (props) => {
  const {id} = props;
  const addFavorite = () => {
    console.log("Agregar a favoritos", id);
  };
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
};

export {Favorite};
