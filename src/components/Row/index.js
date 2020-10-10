import React from "react";
import { View } from "react-native";

//Main Screen Buttons Row component

export default function CalculatorScreen({ children }) {
  return (
    <View style={{ alignItems: "center", flex: 1, flexDirection: "row" }}>
      {children}
    </View>
  );
}
