import React from 'react';
import {View,Text,StyleSheet, Button} from 'react-native';

const TrackListScreen = ({navigation}) => {
    return (
        <>
            <Text style={{fontSize:48}}>TrackListScreen</Text>
            <Button
            title="go to Details"
            onPress= { () =>{ navigation.navigate('TrackDetail')}}
            ></Button>
        </>
    )
}

const styles= StyleSheet.create({})

export default TrackListScreen;