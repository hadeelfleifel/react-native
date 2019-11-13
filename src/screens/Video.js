import React,{useState} from 'react'
import {View , Text,StyleSheet,WebView} from 'react-native'
import Video from 'react-native-video';
import video from '../123.mp4'
const VideoScreen =()=>{

    return(
        <View>
                <Video 
                    source={video}
                    resizeMode="cover" 
                style={StyleSheet.absoluteFill}

                 />


                {/* <Video source={{uri:"https://www.youtube.com/watch?v=LmFURFLYjcM"}} /> */}

                {/* <WebView
                    // style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={video}
                /> */}


{/* <Video   // Can be a URL or a local file.
                                            // Store reference
       /> */}

        </View>
    )

}

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });

export default VideoScreen;