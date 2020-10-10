import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { connect } from "react-redux";

//styling
import { Colors } from "../../constants/Colors/Colors";
import { styles } from "./styles";

//components
import Row from "../../components/Row";
import Button from "../../components/Button";

//actions
import {
  updateCurrentValue,
  handleEqual,
  handleClear,
  handleNegative,
  handlePercentage,
} from "../../redux/actions";

function CalculatorScreen(props) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Main Screen Results View */}
      <View style={styles.resultsContainer}>
        <Text style={{ fontSize: RFPercentage(4), color: Colors.lightGray }}>
          {props.previousValue}
        </Text>
        <Text style={{ fontSize: RFPercentage(12), color: Colors.gray }}>
          {props.currentValue}
        </Text>
      </View>
      {/* Results View and Buttons View Seperator */}
      <View style={styles.seperator} />
      {/* Main Screen Buttons View */}
      <View style={styles.buttonsContainer}>
        <View style={styles.innerButtonsContainer}>
          <Row>
            <Button
              textStyle={styles.buttonGray}
              value="C"
              onPress={() => {
                props.handleClear();
              }}
            />
            <Button
              textStyle={styles.buttonGray}
              value="+/-"
              onPress={() => {
                props.handleNegative(props.currentValue);
              }}
            />
            <Button
              textStyle={styles.buttonGray}
              value="%"
              onPress={() => {
                props.handlePercentage(props.currentValue);
              }}
            />
            <Button
              textStyle={styles.buttonRed}
              value="/"
              onPress={() => {
                props.updateCurrentValue("/", props.currentValue);
              }}
            />
          </Row>
          <Row>
            <Button
              textStyle={styles.buttonLightGray}
              value="7"
              onPress={() => {
                props.updateCurrentValue("7", props.currentValue);
              }}
            />
            <Button
              textStyle={styles.buttonLightGray}
              value="8"
              onPress={() => {
                props.updateCurrentValue("8", props.currentValue);
              }}
            />
            <Button
              textStyle={styles.buttonLightGray}
              value="9"
              onPress={() => {
                props.updateCurrentValue("9", props.currentValue);
              }}
            />
            <Button
              textStyle={styles.buttonRed}
              value="x"
              onPress={() => {
                props.updateCurrentValue("*", props.currentValue);
              }}
            />
          </Row>
          <Row>
            <Button
              textStyle={styles.buttonLightGray}
              value="4"
              onPress={() => {
                props.updateCurrentValue("4", props.currentValue);
              }}
            />
            <Button
              textStyle={styles.buttonLightGray}
              value="5"
              onPress={() => {
                props.updateCurrentValue("5", props.currentValue);
              }}
            />
            <Button
              textStyle={styles.buttonLightGray}
              value="6"
              onPress={() => {
                props.updateCurrentValue("6", props.currentValue);
              }}
            />
            <Button
              textStyle={styles.buttonRed}
              value="-"
              onPress={() => {
                props.updateCurrentValue("-", props.currentValue);
              }}
            />
          </Row>
          <Row>
            <Button
              textStyle={styles.buttonLightGray}
              value="1"
              onPress={() => {
                props.updateCurrentValue("1", props.currentValue);
              }}
            />
            <Button
              textStyle={styles.buttonLightGray}
              value="2"
              onPress={() => {
                props.updateCurrentValue("2", props.currentValue);
              }}
            />
            <Button
              textStyle={styles.buttonLightGray}
              value="3"
              onPress={() => {
                props.updateCurrentValue("3", props.currentValue);
              }}
            />
            <Button
              textStyle={styles.buttonRed}
              value="+"
              onPress={() => {
                props.updateCurrentValue("+", props.currentValue);
              }}
            />
          </Row>
          <Row>
            <Button
              textStyle={styles.buttonLightGray}
              value="00"
              onPress={() => {
                props.updateCurrentValue("00");
              }}
            />
            <Button
              textStyle={styles.buttonLightGray}
              value="0"
              onPress={() => {
                props.updateCurrentValue("0", props.currentValue);
              }}
            />
            <Button
              value="."
              textStyle={styles.buttonGray}
              onPress={() => {
                props.updateCurrentValue(".");
              }}
            />
            <Button
              style={styles.buttonEqual}
              textStyle={{ color: Colors.white, fontWeight: "bold" }}
              value="="
              onPress={() => {
                props.handleEqual(props.currentValue);
              }}
            />
          </Row>
        </View>
      </View>
    </SafeAreaView>
  );
}
//Redux Store mapping to main Component as props
const mapStateToProps = ({ reducer }) => {
  const { currentValue, previousValue } = reducer;
  return { currentValue, previousValue };
};

//Connecting redux store and action functions
export default connect(mapStateToProps, {
  updateCurrentValue,
  handleEqual,
  handleClear,
  handleNegative,
  handlePercentage,
})(CalculatorScreen);
