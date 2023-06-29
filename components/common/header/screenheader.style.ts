import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    //Useless since RN components natively use flex as their initial display
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
  }
});

export default styles;
