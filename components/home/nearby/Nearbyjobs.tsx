import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";

import styles from "./nearbyjobs.style";
import { useRouter } from "expo-router";
import { useMockSuccess } from "../../../utils/hooks/use-mock-success.hook";
import { log } from "react-native-reanimated";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";

const NearbyJobs = () => {
  const router = useRouter();

  const { data, isLoading, hasError, error } = useMockSuccess("nearby");

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

        {!!data &&
          data.data.map((job, index) => {
            return (
              <NearbyJobCard
                key={`nearby-job-${job.job_id}-${index}`}
                job={job}
                handleNavigation={() => {
                  router.push(`/job-details/${job.job_id}`);
                }}
              />
            );
          })}
      </View>
    </View>
  );
};

export default NearbyJobs;
