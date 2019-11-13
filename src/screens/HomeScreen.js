import React from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';

const HomeScreen =props => {
  return (
    <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button 
    onPress={()=>{
      props.navigation.navigate('ComponentScreen');
    }}
    title="ComponentScreen"/>

    <Button
    onPress={()=>{
      props.navigation.navigate('List');
      
    }}
    title="List"
    />

<Button
    onPress={()=>{
      props.navigation.navigate('Card');
      
    }}
    title="Show Card"
    />

<Button
    onPress={()=>{
      props.navigation.navigate('Color');
      
    }}
    title="Color Screen"
    />



<Button
    onPress={()=>{
      props.navigation.navigate('Semi');
      
    }}
    title="Semi Screen"
    />

<Button 
    onPress={()=>{
      props.navigation.navigate('Counter');
    }}
    title="Counter Screen"/>



<Button 
    onPress={()=>{
      props.navigation.navigate('Password');
    }}
    title="Password Screen"/>
<Button 
    onPress={()=>{
      props.navigation.navigate('Video');
    }}
    title="Video Screen"/>

    
<Button 
    onPress={()=>{
      props.navigation.navigate('Image');
    }}
    title="Image Screen"/>

<Button 
    onPress={()=>{
      props.navigation.navigate('Square');
    }}
    title="Square Screen"/>


<Button 
    onPress={()=>{
      props.navigation.navigate('Text');
    }}
    title="Text Screen"/>



<Button 
    onPress={()=>{
      props.navigation.navigate('Boxs');
    }}
    title="Box Screen"/>

<Button 
    onPress={()=>{
      props.navigation.navigate('BGColor');
    }}
    title="BackgroundColor Screen"/>

<Button 
    onPress={()=>{
      props.navigation.navigate('Picker');
    }}
    title="Picker Screen"/>

     
    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
