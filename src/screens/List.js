import React  from 'react'
import {Text,StyleSheet,View}from 'react-native' 
import { FlatList } from 'react-native-gesture-handler';

const List = ()=>{


    const friends= [
        {name :"friend-1",age:"20"},
        {name :"friend-2",age:"25"},
        {name :"friend-3",age:"30"},
        {name :"friend-4",age:"35"},
        {name :"friend-5",age:"40"},
        {name :"friend-6",age:"45"}
        
    ];

return(
    <FlatList
    keyExtractor={(friends)=>{friends.age}}
    data={friends}
    renderItem={({item})=>{
        return(
            <Text>Name: {item.name},Age :{item.age}</Text>
        )
    }}
    />
)


}
export default List;