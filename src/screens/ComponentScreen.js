import React  from 'react'
import {Text,StyleSheet,View}from 'react-native' 


const ComponeneScreen =()=>{
    const name ="hadeel";
    return <View>
        <Text style={styles.textStyle}> getting start with react native</Text>
        <Text style={styles.text}>my name is : {name}</Text>
        </View>
};
const styles =StyleSheet.create({
textStyle:{
    fontSize:45
},
text:{
    fontSize:20
}


});





export default ComponeneScreen;