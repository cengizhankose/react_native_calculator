import React, { useEffect, useState } from "react";
import { Alert, TouchableOpacity, Text, View } from "react-native";
import { styles } from "./styles";

//Main Screen Button Component

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
        onPress={props.onPress}
      >
        <Text style={[styles.value, props.textStyle]}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
}
