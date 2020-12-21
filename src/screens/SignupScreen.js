import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [isStable, setIsStable] = useState(false);

  console.log(state);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.signupView}>
          <NavigationEvents onWillFocus={clearErrorMessage} />
          <AuthForm
            headTitle="Sign Up"
            buttonTitle="Sign Up"
            errorMessage={state.errorMessage}
            onButtonClick={signup}
          />
          <NavLink
            routeName="Signin"
            linkName="Kayıylı iseniz giriş yapmak için tıklayınız."
          />
        </View>
        <View style={styles.navigationView}></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
