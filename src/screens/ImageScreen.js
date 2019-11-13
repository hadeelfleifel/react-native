import React  from 'react'
import {Text,StyleSheet,View}from 'react-native' 
import Details from "../Components/ImageDetails"

const ImageScreens = ()=>{


    return(
        <View>
            <Details title="first" image={require('../../assets/beach.jpg')} score={5} />
            <Details title="sec" image={require('../../assets/forest.jpg')} score={6} />
            <Details title="third" image={require('../../assets/mountain.jpg')} score={7} />

        </View>
    );
}

export default ImageScreens;