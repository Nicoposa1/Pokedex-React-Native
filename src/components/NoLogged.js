import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const NoLogged = () => {
  const navigation = useNavigation()

  const goToLogin = () => {
    navigation.navigate('Account')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Para ver esta pantalla tienes que iniciar sesión</Text>
      <Button title="Ir al login" onPress={goToLogin} />
    </View>
  )
}

export { NoLogged }

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
})