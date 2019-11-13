import React,{useState,useReducer} from 'react';
import { Text, StyleSheet,View,Button,TouchableOpacity } from 'react-native';


const reducer=(state,action)=>{
//state : count = number
//action  : type increament or decreament ,payloud = 1
switch(action.type){
    case 'increament':
        return{...state,count: state.count + action.payload}
    ;
    case 'decreament':
            return{...state,count: state.count - action.payload}
        
    ;
    default:
        return state;
}


}

const CounterScreem =()=>{

    // const [counter,setCounter] =useState(0);

    const[state,dispatch]=useReducer(reducer,{count:0})

    return(
        <View>

        <Button title="Increse"
        // type="increament"
        // payload ={counter+1}
        onPress={()=>
            // counter++;
            // setCounter(counter+1)
         {   dispatch({type:"increament", payload:1})}

        }
        />

        <Button title="Decreses" 
        onPress={()=>
            // counter--;
            // setCounter(counter-1)
{            dispatch({type:"decreament", payload:1})
}        }
        />

        <Text> Count IS : {state.count} </Text>

        </View>
    );

;}

export default CounterScreem;