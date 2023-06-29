import { Stack } from "expo-router";
import { useFonts } from "expo-font";

import {useCallback} from "react"

import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

export default function Layout():JSX.Element {
const [fontsHaveLoaded, fontsHadError] = useFonts({
  DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
  DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
})

const onLayoutRootView: () => Promise<void> = useCallback(async ()=>{
  if(fontsHadError){
  return null
  }

  if(fontsHaveLoaded){
    //We show the page only AFTER loading the fonts
    await SplashScreen.hideAsync()
  }
}, [fontsHaveLoaded])

const noFontsLoaded = !fontsHaveLoaded
  if(noFontsLoaded){
  return null
  }
  return <Stack onLayout={onLayoutRootView}/>;
}