import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

export default function CalculatorScreen(props) {
  const [value, setValue] = useState("");

  React.useEffect(() => {
    const data = props.value;
    setValue(props.value);
  }, []);

  return (
    <View>
      <TouchableOpacity
        style={[styles.mainContainer, props.style]}
        onPress={() => {
          Alert.alert(value);
        }}
      >
        <Text style={[styles.value, props.textStyle]}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
}
