import React from "react";
import { View } from "react-native";

export default function CalculatorScreen({ children }) {
  return (
    <View style={{ alignItems: "center", flex: 1, flexDirection: "row" }}>
      {children}
    </View>
  );
}
