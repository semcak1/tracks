import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import { SafeAreaView,withNavigation,withNavigationFocus } from "react-navigation";
import useLocation from '../hooks/useLocation'
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = ({isFocused}) => {
    const { addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused,addLocation)
    
  return (
    <View>
      <SafeAreaView forceInset={{ top: "always" }}>
        <Text h2>Create a Track</Text>
        <Map />
       
        {err ? (
          <Text> Lütfen location servisini aktif hale getirin.</Text>
        ) : null}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
