import { useState } from "react";
import React from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  GestureResponderEvent,
} from "react-native";

import { useRouter } from "expo-router";

import { icons, SIZES } from "../../../constants";

import styles from "./welcome.style";
import { log } from "../../../utils/functions/console.functions";

const Welcome = () => {
  const jobTypes: string[] = ["Full-time", "Part-time", "Contractor"];

  const router = useRouter();

  const [activeJob, setActiveJob] = useState(jobTypes[0]);
  const [inputValue, setInputValue] = useState<string>("");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Younes!</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job:</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={inputValue}
            onChangeText={(inputValue: string) => {
              log("Input:", inputValue);
              setInputValue(inputValue);
            }}
            placeholder="Search for a job"
          ></TextInput>
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={(e: GestureResponderEvent) => {
            log("Pressed search button!");
          }}
        >
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        {/*
          The `<FlatList />` component efficiently renders large, smoothly-scrollable lists
        */}
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => {
            return (
              //
              <TouchableOpacity
                style={styles.tab(activeJob, item)}
                onPress={(e: GestureResponderEvent) => {
                  setActiveJob(item);

                  router.push(`search/${item}`);
                }}
                key={item}
              >
                <Text style={styles.tabText(activeJob, item)}>{item}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => {
            return item;
          }}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
