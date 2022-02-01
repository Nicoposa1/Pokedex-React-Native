import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LoginForm } from "../components/Auth/LoginForm";
import { UserData } from '../components/Auth/UserData';

const Account = () => {
  const auth = null;

  return (
    <View style={{ flex: 1 }}>
      {auth ? <UserData /> : <LoginForm />}
    </View>
  );
};

export { Account };

const styles = StyleSheet.create({});
