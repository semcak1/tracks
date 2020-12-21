import React, { useContext } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.signupView}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <AuthForm
          headTitle="Sign In"
          errorMessage={state.errorMessage}
          buttonTitle="Sign In"
          onButtonClick={signin}
        />
        <NavLink
          routeName="Signup"
          linkName="Kayıylı değilseniz kayıt olmak için tıklayınız."
        />
      </View>
    </KeyboardAvoidingView>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 5,
    // borderColor: "red",
    flex: 1,
  },
  signupView: {
    // borderWidth: 5,
    // borderColor: "blue",
    marginTop: 75,
    flex: 1,
  },
  navigationView: {
    // borderWidth: 5,
    // borderColor: "black",
    flex: 3,
  },
});

export default SigninScreen;
