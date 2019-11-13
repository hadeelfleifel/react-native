import React,{useReducer} from 'react'
import { Text, StyleSheet,View,Image,FlatList,Button } from 'react-native'

const ShowCard =()=>{

    return(
        <View>
            <View style={styles.imageStyle}>
                <Image
                source={require('../../assets/beach.jpg')}
                />
                <Text>Image Name</Text>
            </View>


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

            <Button
            title="Fighttt"
            style={styles.buttonStyle}
            />
        </View>
    )




}

const styles=StyleSheet.create({
    imageStyle:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:80
    },

    statusStyle:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'stretch',
        marginTop:60
    },
    buttonStyle:{
        justifyContent:'flex-end',
        alignItems:'flex-end',
        // flexDirection:'row',
        width:15
    }
})
export default ShowCard;