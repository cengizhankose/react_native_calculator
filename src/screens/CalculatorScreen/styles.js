import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors/Colors";

export const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: "center" },
  resultsContainer: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonsContainer: {
    flex: 1.5,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
