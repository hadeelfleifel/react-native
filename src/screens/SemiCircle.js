import React, { Component } from "react";
import { Text, StyleSheet,View,Image,FlatList,Button,TouchableOpacity,TouchableHighlight } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress';


const SemiCircle=()=> {
      return (
<View>

<AnimatedCircularProgress
style={{position:'relative',alignItems:'center',marginTop:55}}
  size={368}
  width={15}
  fill={70}
  tintColor="#00e0ff"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="#3d5875" 
  rotation={225}
  arcSweepAngle={270}
/>

<Image
style={{position:'absolute',margin:100,marginTop:160}}

                source={require('../../assets/beach.jpg')}
                />
<Text style={{fontSize:18,fontWeight:'bold',alignItems:'center'}}>PokeName</Text>

<View style={styles.statusStyle}>


    <View>
        <Text>First Text</Text>
        <Text>First Text</Text>
        <Text>First Text</Text>
    </View>

    <View>
        <Text>Sec Text</Text>
    </View>

    </View>
    {/* <TouchableHighlight style={styles.text}> */}

    <TouchableOpacity style={styles.text}>
            <Text >
               Fight
            </Text>
         </TouchableOpacity>
         {/* </TouchableHighlight> */}

      
</View>
)}


const styles=StyleSheet.create({
   

    statusStyle:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'stretch',
        marginTop:0,
        borderRadius:2,
        borderWidth: 2,
        borderColor: '#d6d7da',
    },
    text: {
        borderWidth: 1,
        padding: 15,
        borderColor: 'black',
        backgroundColor: 'red',
        alignItems: 'center',
        width:160,
        // justifyContent:'center'

     }
})

export default SemiCircle;