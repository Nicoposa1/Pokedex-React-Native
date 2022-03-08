import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
import { size } from 'lodash';
import useAuth from '../../hooks/useAuth'
import { getPokemonFavoriteApi } from "../../api/favorite"

const UserData = () => {

  const [total, setTotal] = useState(0);
  const {auth, logOut} = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try{
          const response = await getPokemonFavoriteApi();
          setTotal(size(response));
        } catch(error) {
          setTotal(0);
        }
      })()
    }, [])
  )
  
  return( 
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title} >Bienvenido</Text>
        <Text style={styles.title} >{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title='Nombre' text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title='Username' text={auth.username} />
        <ItemMenu title='Email' text={auth.email} />
        <ItemMenu title="Total Favoritos" text={`${total} pokemons`} />
      </View>

      <Button title="Cerrar Sesión" onPress={logOut} />
    </View>
  );
};

function ItemMenu(props) {
  const {title, text} = props;
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

export {UserData};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
});
