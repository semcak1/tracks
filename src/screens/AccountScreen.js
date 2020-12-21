import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";
const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{top:'always'}}>
      <View>
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
        <Button title="Sig Out" onPress={signout}></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
