import React from "react";
import { View, Text } from "react-native";

import styles from "./specifics.style";
import { error, log, warn } from "../../../utils/functions/console.functions";

const Specifics = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>{<Text>{points}</Text>}</View>
    </View>
  );
};

export default Specifics;
