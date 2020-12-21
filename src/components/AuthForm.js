import React ,{useState} from "react";
import { Button, Text,Input } from "react-native-elements";
import {  StyleSheet } from "react-native";
import  Spacer from "./Spacer";

const AuthForm = ({ headTitle,errorMessage, buttonTitle, onButtonClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text h2>{headTitle}</Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          Email
          value={email}
          onChangeText={(newText) => {
            setEmail(newText);
          }}
          autoCapitalize="none"
          autoCorrect={false}
         
        />
      </Spacer>
      <Spacer>
        <Input
         
          label="Password"
          value={password}
          onChangeText={setPassword} //hem yukarıdaki şekilde hemde yandaki şekilde yazılabiliyor.
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
      </Spacer>

      <Spacer>
        <Button
          title={buttonTitle}
          onPress={() => {
            onButtonClick({email,password})}
          }
        />
      </Spacer>
    </>
  );
};

export default AuthForm;
