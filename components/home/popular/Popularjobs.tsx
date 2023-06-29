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
import { log } from "../../../utils/functions/console.functions";

export default function PopularJobs() {
  const url: string = "https://jsearch.p.rapidapi.com/search?query=developer";

  const { data, isLoading, hasError, errorMessage } = useFetch(url);
  log(data, isLoading, hasError, errorMessage);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading && (
          <ActivityIndicator
            color={COLORS.primary}
            size={"large"}
          ></ActivityIndicator>
        )}

        {hasError && (
          <Text
            style={{
              width: "100%",
            }}
          >
            Oops an unexpected error has occured:{" "}
            <Text
              style={{
                color: "red",
                textAlign: "justify",
                alignItems: "center",
              }}
            >
              {
                //@ts-ignore
                errorMessage?.message
              }
            </Text>
          </Text>
        )}

        {!!data && (
          <FlatList
            data={data}
            renderItem={({ item }: { item: any }) => {
              return <PopularJobCard key={item} />;
            }}
            keyExtractor={({ item }) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
}
