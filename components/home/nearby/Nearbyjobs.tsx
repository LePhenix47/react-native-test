import React, { useState } from "react";
import { View, Text } from "react-native";

import styles from "./nearbyjobs.style";
import { useRouter } from "expo-router";

const NearbyJobs = () => {
  const router = useRouter();

  return (
    <View>
      <Text>NearbyJobs</Text>
    </View>
  );
};

export default NearbyJobs;
