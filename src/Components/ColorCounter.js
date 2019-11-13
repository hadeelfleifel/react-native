import React,{useState} from 'react'
import { Text, StyleSheet,View,Button,TouchableOpacity,FlatList } from 'react-native'



const ColorCounter=(props)=>{
// console.log(props);

 
    return(
        <View>
            <Text>{props.color}</Text>
            <Button
            onPress={()=>{props.onIncrease()}}
            title={`Increase ${props.color}`}
            />

            <Button
            onPress={()=>{props.onDecrease()}}
            title={`decrease ${props.color}`}
            />



        
        </View>
    )

}
const styles=StyleSheet.create({})

export default ColorCounter;