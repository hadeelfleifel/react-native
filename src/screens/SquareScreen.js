import React,{useReducer} from 'react'
import { Text, StyleSheet,View } from 'react-native'
import ColorCounter from '../Components/ColorCounter'

const COLOR_INCREAMENT = 10;


function reducer(state, action) {
    // state = red:number or blue:number or green:number 
    //action // change the color "red","green","blue" or amount =10 or -10
    switch (action.type) {
      case 'change_red':
        if(state.red+action.payload>255 || state.red+action.payload<0){
          return state;
        }
        return {...state,red:state.red+action.payload};
      case 'change_green':
          // if(state.green+action.amount>255 || state.green+action.amount<0){
          //   return state;
          // }
          // return {...state,green:state.green+action.amount};

         return state.green+action.payload>255 || state.green+action.payload<0? state :{...state,green:state.green+action.payload};

        case 'change_blue':
            if(state.blue+action.payload>255 || state.blue+action.payload<0){
              return state;
            }
            return {...state,blue:state.blue+action.payload};

      default:
       return state;
    }
  }
  


const SquareScreen=()=>{

    ///................used in first ans second method in setColor function ...................................

    // const[red,setRed]=useState(0) 
    // const[green,setGreen]=useState(0) 
    // const[blue,setBlue]=useState(0)



    // const setColor=(color,change)=>{

    //     //....................first method .....................................................................
    //     // if(color==="red"){
    //     //     if(red+change>255 || red+change<0)
    //     //     {return;}
    //     //     else{
    //     //         setRed(red+change)
    //     //     }
    //     // };

        
    //     // if(color==="green"){
    //     //     if(green+change>255 || green+change<0)
    //     //     {return;}
    //     //     else{
    //     //         setGreen(green+change)
    //     //     }
    //     // };

        
    //     // if(color==="blue"){
    //     //     if(blue+change>255 || blue+change<0)
    //     //     {return;}
    //     //     else{
    //     //         setBlue(blue+change)
    //     //     }
    //     // };


    //     //..................................second method .......................................................

    //     // switch(color){

    //     //     case "red":
    //     //             red+change>255 || red+change<0?null:setRed(red+change);
    //     //             return;
    //     //     case "blue":
    //     //             blue+change>255 || blue+change<0?null: setBlue(blue+change);
    //     //             return;
    //     //     case "green":
    //     //             green+change>255 || green+change<0?null:setGreen(green+change);
    //     //             return;
    //     // }


    // }



    const [state, dispatch] = useReducer(reducer, {red:0,blue:0,green:0});

    
    return(
        <View>
                
    {/*......................... for first and sec method .......................................................... */}


            {/* <ColorCounter color="Red" onIncrease={()=>setColor("red",COLOR_INCREAMENT)} onDecrease={()=>setColor("red",-1 * COLOR_INCREAMENT)}/> */}
            {/* <ColorCounter color="Blue" onIncrease={()=>setColor("blue",COLOR_INCREAMENT)} onDecrease={()=>setColor("blue",-1 * COLOR_INCREAMENT)}/> */}
            {/* <ColorCounter color="Green" onIncrease={()=>setColor("green",COLOR_INCREAMENT)} onDecrease={()=>setColor("green",-1 * COLOR_INCREAMENT)}/> */}

        
            {/* <View style={{height:150 ,width:150 ,backgroundColor:`rgb(${red},${green},${blue})` }} />  */}

    {/*......................... .................. END.......................................................... */}



            <ColorCounter color="Red" onIncrease={()=>{dispatch ({type:"change_red",payload:COLOR_INCREAMENT})}} onDecrease={()=>{{dispatch ({type:"change_red",payload:-1*COLOR_INCREAMENT})}}}/>
            <ColorCounter color="Blue" onIncrease={()=>{{dispatch ({type:"change_blue",payload:COLOR_INCREAMENT})}}} onDecrease={()=>{{dispatch ({type:"change_blue",payload:-1*COLOR_INCREAMENT})}}}/>
            <ColorCounter color="Green" onIncrease={()=>{{dispatch ({type:"change_green",payload:COLOR_INCREAMENT})}}} onDecrease={()=>{{dispatch ({type:"change_green",payload:-1*COLOR_INCREAMENT})}}}/>

        
            <View style={{height:150 ,width:150 ,backgroundColor:`rgb(${state.red},${state.green},${state.blue})` }} />

        </View>
    )

}
const styles=StyleSheet.create({})

export default SquareScreen;