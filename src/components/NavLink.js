import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Spacer  from "./Spacer";

import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, routeName, linkName }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate({ routeName });
      }}
    >
      <Spacer>
        <Text style={styles.link}>{linkName}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "#55a3ed",
  },
});

export default withNavigation(NavLink);
