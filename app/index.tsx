//Expo
import { Stack, useRouter } from "expo-router";

//React
import React from "react";

//React Native
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Components
import {
  ScreenHeaderBtn,
  Welcome,
  Company,
  NearbyJobs,
  Specifics,
  PopularJobs,
  JobAbout,
  JobFooter,
  JobTabs,
  NearbyJobCard,
} from "../components";

//Constants
import { COLORS, FONT, SHADOWS, SIZES, icons, images } from "../constants";

export default function Home(): JSX.Element {
  const route = useRouter();
  return (
    //The <SafeAreaView /> componnt provides a safe zone to render the app's components without being covered by the device's hardware features
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "transparent",
        borderWidth: 2, // Border width in pixels
        borderColor: "red", // Border color
        borderRadius: 10, // Border radius
        margin: 4,
        marginTop: 0,
        marginBottom: 0,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "purple" },
          headerShadowVisible: false,
          headerLeft: () => {
            return (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                dimension="60%"
              ></ScreenHeaderBtn>
            );
          },
          headerRight: () => {
            return (
              <ScreenHeaderBtn
                iconUrl={images.profile}
                dimension="100%"
              ></ScreenHeaderBtn>
            );
          },
          headerTitle: "",
        }}
      ></Stack.Screen>

      {/*
        A <ScrollView /> is a component acting as a container that can hold multiple <View />, providing a scrolling container for them
        to easily navigate through them 

        It basically acts as a <div> but with an overflow: scroll 
    */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Welcome />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
