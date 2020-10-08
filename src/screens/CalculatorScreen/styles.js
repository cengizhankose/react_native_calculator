import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors/Colors";

export const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: "center" },
  resultsContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: "10%",
    paddingBottom: "3%",
  },
  buttonsContainer: {
    flex: 1.5,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  innerButtonsContainer: { flex: 1, marginVertical: "10%" },
  buttonLightGray: { color: Colors.lightGray },
  buttonGray: { color: Colors.gray },
  buttonRed: { color: Colors.red },
  buttonEqual: {
    backgroundColor: Colors.red,
    shadowColor: Colors.red,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  seperator: { width: "80%", height: 1, backgroundColor: Colors.seperator },
});
