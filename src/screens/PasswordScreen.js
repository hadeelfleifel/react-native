import React,{useState} from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity,TextInput } from 'react-native';


const TextScreen=()=>{

    const [Password,setPass]=useState("");

    return(
        <View>
            <Text>Enter Password :
            </Text>
            <TextInput style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={Password}
            onChangeText={(newText)=>{setPass(newText)}}
            />


            {Password.length<4 && Password.length !== 0?<Text>pass must be more 4</Text>:null}
            <Text>Your Pass Is : {Password}</Text>

            {true?<Text>Password Added</Text>:null}
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