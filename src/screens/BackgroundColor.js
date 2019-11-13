import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { LinearGradient } from 'expo';

const BGColor=()=>{
    return(
        <LinearGradient colors={['#FF0000', '#CC0000', '#3B4CCA', '#FFDE00','#B3A125']}
        style={{flex: 1}}

        >
            <Text>

                Hi


            </Text>

            <Text>okk</Text>
            <Text>Welcme</Text>
            <View>
                <Text>hadeel</Text>
            </View>
        </LinearGradient>
    )



}

export default BGColor;