import React,{useState} from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity,TextInput } from 'react-native';


const TextScreen=()=>{

    const [name,setName]=useState("");

    return(
        <View>
            <Text>Enter Your Name :
            </Text>
            <TextInput style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newText)=>{setName(newText)}}
            />
            <Text>Your Name Is : {name}</Text>

            {true?<Text>Add Done</Text>:null}
        </View>

    )


}

const styles=StyleSheet.create({
    input:{
        margin:15,
        borderColor:"red",
        borderWidth:2
    }
})

export default TextScreen;