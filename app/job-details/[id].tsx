import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";

import { Stack, useRouter, useSearchParams } from "expo-router";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { useMockSuccess } from "../../utils/hooks/use-mock-success.hook";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, icons, images } from "../../constants";
import { JobData } from "../../utils/types/mocked-data.types";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, hasError, error } = useMockSuccess("popular");
  // const data = null;

  const idOfData: string = data?.data?.find((job: JobData) => {
    return job.job_id === params.id;
  }).job_id;

  const [refreshing, setRefreshing] = useState<boolean>(false);

  function onRefresh() {}

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,

          headerLeft: () => {
            return (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension="60%"
                handlePress={() => {
                  router.back();
                }}
              ></ScreenHeaderBtn>
            );
          },

          headerRight: () => {
            return (
              <ScreenHeaderBtn
                iconUrl={icons.share}
                dimension="60%"
                handlePress={() => {
                  router.back();
                }}
              ></ScreenHeaderBtn>
            );
          },
          headerTitle: "",
        }}
      ></Stack.Screen>

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            ></RefreshControl>
          }
        >
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

          {!data?.data?.length && (
            <Text>No data to show here ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻</Text>
          )}

          {!!data && (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              {/*                */}
              <Company
                companyLogo={data.data[0].employer_logo}
                jobTitle={data.data[0].job_title}
                companyName={data.data[0].employer_name}
                location={data.data[0].job_country}
              />
              <JobTabs />
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
