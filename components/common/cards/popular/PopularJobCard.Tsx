import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";

import styles from "./popularjobcard.style";
import { JobData } from "../../../../utils/types/mocked-data.types";
import { log } from "../../../../utils/functions/console.functions";

const PopularJobCard = ({
  item,
  selectedJob,
  handleCardPress,
}: {
  item: JobData;
  selectedJob;
  handleCardPress;
}) => {
  const dummyCompanyIcon: string =
    "https://logotypes101.com/logos/441/D967C57DDD1967A58FF2375FA924A3F5/Job_.png";

  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => {
        handleCardPress(item);
      }}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: item.employer_logo || dummyCompanyIcon,
          }}
          resizeMode="contain"
          style={styles.logoImage}
          onError={() => {
            log("Image failed to load");
          }}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {item.job_country}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
