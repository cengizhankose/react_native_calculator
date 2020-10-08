import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { styles } from "./styles";

import Row from "../../components/Row";
import Button from "../../components/Button";

import { Colors } from "../../constants/Colors/Colors";

export default function CalculatorScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.resultsContainer}>
        <Text>2*50*3</Text>
        <Text>300</Text>
      </View>
      <View
        style={{ width: "80%", height: 1, backgroundColor: Colors.lightGray }}
      />
      <View style={styles.buttonsContainer}>
        <View style={{ flex: 1, marginVertical: "10%" }}>
          <Row>
            <Button textStyle={{ color: Colors.gray }} value="C" />
            <Button textStyle={{ color: Colors.gray }} value="+/-" />
            <Button textStyle={{ color: Colors.gray }} value="%" />
            <Button textStyle={{ color: Colors.red }} value="/" />
          </Row>
          <Row>
            <Button textStyle={{ color: Colors.lightGray }} value="7" />
            <Button textStyle={{ color: Colors.lightGray }} value="8" />
            <Button textStyle={{ color: Colors.lightGray }} value="9" />
            <Button textStyle={{ color: Colors.red }} value="x" />
          </Row>
          <Row>
            <Button textStyle={{ color: Colors.lightGray }} value="4" />
            <Button textStyle={{ color: Colors.lightGray }} value="5" />
            <Button textStyle={{ color: Colors.lightGray }} value="6" />
            <Button textStyle={{ color: Colors.red }} value="-" />
          </Row>
          <Row>
            <Button textStyle={{ color: Colors.lightGray }} value="1" />
            <Button textStyle={{ color: Colors.lightGray }} value="2" />
            <Button textStyle={{ color: Colors.lightGray }} value="3" />
            <Button textStyle={{ color: Colors.red }} value="+" />
          </Row>
          <Row>
            <Button textStyle={{ color: Colors.lightGray }} value="00" />
            <Button textStyle={{ color: Colors.lightGray }} value="0" />
            <Button value="." />
            <Button
              style={{
                backgroundColor: Colors.red,
                shadowColor: Colors.red,
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,

                elevation: 12,
              }}
              textStyle={{ color: Colors.white, fontWeight: "bold" }}
              value="="
            />
          </Row>
        </View>
      </View>
    </SafeAreaView>
  );
}
