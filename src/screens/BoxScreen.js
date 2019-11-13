import React,{useState} from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity,TextInput } from 'react-native';

const BoxScreen =()=>{
    return(
        <View style={styles.viewstyle}>
            <Text style={styles.textStyle}>
                Child #1
            </Text>
            <Text style={styles.textStyle}>
            Child #2

            </Text>
            <Text style={styles.textStyle}>
            Child #3

            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    viewstyle:{
        borderWidth:3,
        borderColor:"brown",
       justifyContent:"space-between",
        height:200

    },

    textStyle:{
        borderWidth:1,
        borderColor:"red",
    }
})
export default BoxScreen;