import React,{useState} from 'react'
import { Text, StyleSheet,View,Button,TouchableOpacity,FlatList } from 'react-native'

const ColorScreen =()=>{

    const [color,setColor]=useState([])

    return(
        <View>
            <Button
            title="Change color"
            onPress={()=>{
                setColor([...color,randomColor()])
            }}/>

            {/* <View style={{height:100 ,width:100 ,backgroundColor:randomColor() }} /> */}

            <FlatList
            keyExtractor={item=>item}
            data={color}
            renderItem={({item})=>{
                        return(<View style={{height:100 ,width:100 ,backgroundColor:randomColor() }} />)
            }}
            />
        </View>
    )
}
const randomColor=()=>{
   const red= Math.floor(Math.random()*256);
   const green= Math.floor(Math.random()*256);
   const blue= Math.floor(Math.random()*256);

   return `rgb(${red},${green},${blue})`;
   
}


const styles=StyleSheet.create({})

export default ColorScreen;
