import {
  BUTTON_PRESSED,
  BUTTON_PRESSED_WITH_ZERO,
  EQUAL_PRESSED_SUCCESS,
  EQUAL_PRESSED_START,
  CLEAR_PRESSED,
  NEGATIVE_PRESSED,
  PERCENTAGE_PRESSED,
} from "./types";
//Actions
export const updateCurrentValue = (value, currentValue) => {
  return (dispatch) => {
    if (currentValue === "0") {
      dispatch({ type: BUTTON_PRESSED_WITH_ZERO, payload: value });
    } else {
      dispatch({ type: BUTTON_PRESSED, payload: value });
    }
  };
};

export const handleEqual = (value) => {
  return (dispatch) => {
    dispatch({ type: EQUAL_PRESSED_START });
    let result = eval(value);
    dispatch({ type: EQUAL_PRESSED_SUCCESS, payload: result });
  };
};

export const handleClear = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_PRESSED });
  };
};

export const handleNegative = (value) => {
  return (dispatch) => {
    let temporaryValue = parseFloat(value);
    let result = temporaryValue * -1;
    result = result.toString();
    dispatch({ type: NEGATIVE_PRESSED, payload: result });
  };
};

export const handlePercentage = (value) => {
  return (dispatch) => {
    let temporaryValue = parseFloat(value);
    let result = temporaryValue * 0.01;
    result = result.toString();
    dispatch({ type: PERCENTAGE_PRESSED, payload: result });
  };
};
