//Expo
import { Stack, useRouter } from 'expo-router';

//React
import React from 'react'

//React Native
import { View,Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

//Components
import { ScreenHeaderBtn } from "../components"

//Constants
import {COLORS,FONT,SHADOWS,SIZES,icons,images} from "../constants"

export default function Home():JSX.Element {
    const route = useRouter() ;
  return (
    //The <SAW/> componnt provides a safe zone to render the app's components without being covered by the device's hardware features
    <SafeAreaView style={{flex:1, backgroundColor: "transparent", borderWidth: 2, // Border width in pixels
    borderColor: 'red', // Border color
    borderRadius: 10, // Border radius
    margin: 4,
    marginTop:0,
    marginBottom:0
}}>
        <Stack.Screen
        options={{
            headerStyle : {backgroundColor: "grey"},
            headerShadowVisible: false,
            headerLeft: ()=>{
               return <ScreenHeaderBtn></ScreenHeaderBtn> 
            }
        }}
        ></Stack.Screen>
    </SafeAreaView>
  )
}
