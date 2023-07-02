//Expo
import { Stack, useRouter } from "expo-router";

//React
import React, { useState } from "react";

//React Native
import { View, Text, ScrollView, useColorScheme } from "react-native";
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
import { warn } from "../utils/functions/console.functions";

export default function Home(): JSX.Element {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");

  const hasDarkTheme: boolean = useColorScheme() === "dark";
  return (
    //The <SafeAreaView /> component provides a safe zone to render the app's components without being covered by the device's hardware features
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
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
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
            backgroundColor: COLORS.white,
          }}
        >
          <Welcome
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handlePress={() => {
              const hasNotSearched: boolean = !searchValue;
              if (hasNotSearched) {
                return;
              }

              router.push(`/search/${searchValue}`);
            }}
          />
          <PopularJobs />
          <NearbyJobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
