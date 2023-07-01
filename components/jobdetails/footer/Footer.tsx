import React from "react";
import { View, Text, TouchableOpacity, Linking, Image } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";
import { Link } from "expo-router";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heart}
          style={styles.likeBtnImage}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => {
          Linking.openURL(url);
        }}
      >
        <Text style={styles.applyBtnText}>Apply directly</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
