import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Spacer = ({children}) => {
    return (
        <View style={styles.spacer}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    spacer:{
        marginHorizontal:15,
        marginBottom:15
    }
})

export default Spacer;