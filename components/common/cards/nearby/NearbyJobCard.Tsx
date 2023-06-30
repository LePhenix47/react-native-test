import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { log } from "../../../../utils/functions/console.functions";

const NearbyJobCard = ({ job, handleNavigation }) => {
  const dummyCompanyIcon: string =
    "https://logotypes101.com/logos/441/D967C57DDD1967A58FF2375FA924A3F5/Job_.png";

  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigation}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: job.employer_logo || dummyCompanyIcon,
          }}
          resizeMode="contain"
          style={styles.logoImage}
          onError={() => {
            log("Image failed to load");
          }}
        ></Image>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType} numberOfLines={1}>
          {job.job_employment_type}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
