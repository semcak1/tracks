import React, { useContext } from "react";
import { Text } from "react-native-elements";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import MapView,{Polyline,Circle} from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const { state:{currentLocation} } = useContext(LocationContext);
  console.log(state)
if (!currentLocation){
    return <ActivityIndicator size='large' style={{marginTop:200}} ></ActivityIndicator>
}
  return (
    <MapView
      style={styles.map}
      initialRegion={{
       ...currentLocation.coords,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
      region={{
       ...currentLocation.coords,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
    >
    <Circle
    center={currentLocation.coords}
    radius={40}
    strokeColor="rgba(158,158,255,1.0)"
    fillColor='rgba(158,158,255,0.3)'
    ></Circle>

    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
