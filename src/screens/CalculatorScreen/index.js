import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { styles } from "./styles";

import Row from "../../components/Row";
import Button from "../../components/Button";

import { Colors } from "../../constants/Colors/Colors";

export default function CalculatorScreen() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.resultsContainer}>
        <Text style={{ fontSize: RFPercentage(4), color: Colors.lightGray }}>
          2*50*3
        </Text>
        <Text style={{ fontSize: RFPercentage(12), color: Colors.gray }}>
          300
        </Text>
      </View>
      <View style={styles.seperator} />
      <View style={styles.buttonsContainer}>
        <View style={styles.innerButtonsContainer}>
          <Row>
            <Button textStyle={styles.buttonGray} value="C" />
            <Button textStyle={styles.buttonGray} value="+/-" />
            <Button textStyle={styles.buttonGray} value="%" />
            <Button textStyle={styles.buttonRed} value="/" />
          </Row>
          <Row>
            <Button textStyle={styles.buttonLightGray} value="7" />
            <Button textStyle={styles.buttonLightGray} value="8" />
            <Button textStyle={styles.buttonLightGray} value="9" />
            <Button textStyle={styles.buttonRed} value="x" />
          </Row>
          <Row>
            <Button textStyle={styles.buttonLightGray} value="4" />
            <Button textStyle={styles.buttonLightGray} value="5" />
            <Button textStyle={styles.buttonLightGray} value="6" />
            <Button textStyle={styles.buttonRed} value="-" />
          </Row>
          <Row>
            <Button textStyle={styles.buttonLightGray} value="1" />
            <Button textStyle={styles.buttonLightGray} value="2" />
            <Button textStyle={styles.buttonLightGray} value="3" />
            <Button textStyle={styles.buttonRed} value="+" />
          </Row>
          <Row>
            <Button textStyle={styles.buttonLightGray} value="00" />
            <Button textStyle={styles.buttonLightGray} value="0" />
            <Button value="." />
            <Button
              style={styles.buttonEqual}
              textStyle={{ color: Colors.white, fontWeight: "bold" }}
              value="="
            />
          </Row>
        </View>
      </View>
    </SafeAreaView>
  );
}
