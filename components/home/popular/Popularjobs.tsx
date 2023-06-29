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
import { useFetch } from "../../../utils/hooks/use-fetch.hook";

export default function PopularJobs() {
  const url: string =
    "https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1";

  // const { data, isLoading, hasError, errorMessage } = useFetch(url);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {/* <ActivityIndicator
          color={COLORS.primary}
          size={"large"}
        ></ActivityIndicator> */}
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({ item }: { item }) => {
            return <PopularJobCard key={item} />;
          }}
          keyExtractor={({ item }) => {
            return item?.job_id;
          }}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal
        />
      </View>
    </View>
  );
}
