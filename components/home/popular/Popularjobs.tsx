import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";

import { PopularJobCard } from "../../../components";

const PopularJobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text></Text>
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList />
      </View>
    </View>
  );
};

export default PopularJobs;
