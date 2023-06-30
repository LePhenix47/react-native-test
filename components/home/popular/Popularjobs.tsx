import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";

import styles from "./popularjobs.style";

import { popularJobsMock } from "../../../mocks/popular-jobs.mock";
import { MockedData } from "../../../utils/types/mocked-data.types";

import { COLORS, SIZES } from "../../../constants";

import { PopularJobCard } from "../../../components";

import { log } from "../../../utils/functions/console.functions";
import {
  waitPromiseError,
  waitPromiseSuccess,
} from "../../../utils/functions/promise-test.functions";

export default function PopularJobs() {
  const url: string = "../../../mocks/popular-jobs.mock.ts";

  const [data, setData] = useState<MockedData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  async function addPopularJobsMock() {
    setIsLoading(true);
    try {
      // const result: any = await waitPromiseError(1_000, "Test error");
      const result: MockedData = await waitPromiseSuccess(
        1_000,
        popularJobsMock
      );
      setData(result);

      log(result);
    } catch (apiError) {
      console.error(apiError);
      setHasError(true);
      setError(apiError);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    addPopularJobsMock();

    return () => {};
  }, [data]);

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
              fontSize: SIZES.medium,
            }}
          >
            Oops an unexpected error has occured:{"\n"}
            <Text
              style={{
                color: "#dc362e",
                textAlign: "justify",
                alignItems: "center",
              }}
            >
              {error}
            </Text>{" "}
          </Text>
        )}

        {!!data && (
          <FlatList
            data={data.data}
            renderItem={({ item }: { item: any }) => {
              return (
                <PopularJobCard
                  key={item}
                  item={item}
                  handleCardPress={() => {
                    log("Clicked popular job card!");
                  }}
                />
              );
            }}
            keyExtractor={({ item }) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
}
