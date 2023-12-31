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
import { JobData, MockedData } from "../../../utils/types/mocked-data.types";

import { COLORS, SIZES } from "../../../constants";

import { PopularJobCard } from "../../../components";

import { log } from "../../../utils/functions/console.functions";
import {
  waitPromiseError,
  waitPromiseSuccess,
} from "../../../utils/functions/promise-test.functions";
import { useMockSuccess } from "../../../utils/hooks/use-mock-success.hook";

export default function PopularJobs() {
  const router = useRouter();
  const { data, isLoading, hasError, error } = useMockSuccess("popular");

  const [selectedJob, setSelectedJob] = useState<string>("");

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

        {!data?.data?.length && !isLoading && (
          <Text>No data to show here ¯\_(ツ)_/¯</Text>
        )}

        {!!data && (
          <FlatList
            data={data.data}
            renderItem={({ item }: { item: JobData }) => {
              return (
                <PopularJobCard
                  item={item}
                  selectedJob={null}
                  handleCardPress={() => {
                    log("Clicked popular job card!");
                    router.push(`/job-details/${item.job_id}`);
                    setSelectedJob(item.job_id);
                  }}
                />
              );
            }}
            keyExtractor={(item) => item.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
}
