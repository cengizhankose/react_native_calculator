import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import { Colors } from "../../constants/Colors/Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  mainContainer: {
    width: windowWidth * 0.15,
    height: windowHeight * 0.08,
    backgroundColor: Colors.white,
    borderRadius:
      Math.round(
        Dimensions.get("window").width + Dimensions.get("window").height
      ) / 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: windowWidth * 0.03,
    marginVertical: windowHeight * 0.001,
  },
  value: { fontSize: RFPercentage(4) },
});
