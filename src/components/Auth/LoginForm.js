import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValue(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;
      if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña no son correcta");
      } else {
        login(userDetails);
        console.log("Se inicio sesión correctamente");
        console.log(userDetails)
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        keyboardType="email-address"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Iniciar sesión" onPress={formik.handleSubmit} />
      <Text style={styles.error}>{formik.errors.username}{"\n"}{error}{"\n"}{formik.errors.password}</Text>
    </View>
  );
};

function initialValue() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña tiene que tener más de 6 caracteres"),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: "center",
    color: "red",
    marginTop: 40,
  },
});

export { LoginForm };
