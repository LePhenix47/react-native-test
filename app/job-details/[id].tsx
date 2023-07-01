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
import { log } from "../../utils/functions/console.functions";

const JobDetails = () => {
  const tabs = ["About", "Qualifications", "Responsibilites"];

  const params = useSearchParams();
  const router = useRouter();

  const { data, isLoading, hasError, error } = useMockSuccess("popular");
  // const data = null;

  const idOfData: number = data?.data?.findIndex((job: JobData) => {
    return job.job_id === params.id;
  });

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  function onRefresh() {}

  function displayTabContent() {
    switch (activeTab) {
      case "About": {
        const about = data.data[idOfData]?.job_highlights?.qualifications || [
          "N/A",
        ];

        return <Specifics title={"About"} points={about} />;
      }

      case "Qualifications": {
        const qualifications: string[] = data.data[idOfData]?.job_highlights
          ?.qualifications || ["N/A"];

        log("qualifications: ", data.data[idOfData].job_highlights);

        return (
          <Specifics
            title={"Qualifications"}
            points={qualifications || ["N/A"]}
          />
        );
      }

      case "Responsibilites": {
        const responsibilites = data.data[idOfData]?.job_highlights
          ?.qualifications || ["N/A"];

        return (
          <Specifics
            title={"Responsibilites"}
            points={responsibilites || ["N/A"]}
          />
        );
      }

      default:
        break;
    }
  }

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

          {!data?.data?.length && !isLoading && (
            <Text>No data to show here ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻</Text>
          )}

          {!!data && (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              {/*                */}
              <Company
                companyLogo={data.data[idOfData]?.employer_logo}
                jobTitle={data.data[idOfData]?.job_title}
                companyName={data.data[idOfData]?.employer_name}
                location={data.data[idOfData]?.job_country}
              />
              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
