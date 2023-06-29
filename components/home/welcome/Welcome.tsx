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

const Welcome = () => {
  const jobTypes: string[] = ["Full-time", "Part-time", "Contractor"];

  const [activeJob, setActiveJob] = useState(jobTypes[0]);
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
            value=""
            onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
              console.log(e);
            }}
            placeholder="Search for a job"
          ></TextInput>
        </View>

        <TouchableOpacity
          style={styles.searchBtn}
          onPress={(e: GestureResponderEvent) => {
            console.log("Pressed!");
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
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <Text>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Welcome;
