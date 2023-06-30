import React from "react";
import { View, Text, Image } from "react-native";
import { icons } from "../../../constants";

import styles from "./company.style";

const Company = ({ companyLogo, jobTitle, companyName, location }) => {
  const dummyCompanyIcon: string =
    "https://logotypes101.com/logos/441/D967C57DDD1967A58FF2375FA924A3F5/Job_.png";

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image
          source={{
            uri: companyLogo || dummyCompanyIcon,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        ></Image>
      </View>

      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.companyName}> </Text>
        <Text style={styles.companyName}></Text>

        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationImage}
          ></Image>
          <Text style={styles.locationName}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
