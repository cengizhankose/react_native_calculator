import {
  BUTTON_PRESSED,
  BUTTON_PRESSED_WITH_ZERO,
  EQUAL_PRESSED_START,
  EQUAL_PRESSED_SUCCESS,
  CLEAR_PRESSED,
  NEGATIVE_PRESSED,
  PERCENTAGE_PRESSED,
} from "./types";

const initialState = {
  currentValue: "0",
  previousValue: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_PRESSED:
      return {
        ...state,
        currentValue: state.currentValue.toString().concat(action.payload),
      };
    case BUTTON_PRESSED_WITH_ZERO:
      return {
        ...state,
        currentValue: action.payload,
      };
    case EQUAL_PRESSED_START:
      return {
        ...state,
        previousValue: state.currentValue,
      };
    case EQUAL_PRESSED_SUCCESS:
      return {
        ...state,
        currentValue: action.payload,
      };
    case CLEAR_PRESSED:
      return {
        ...state,
        currentValue: "0",
        previousValue: "",
      };
    case NEGATIVE_PRESSED:
      return {
        ...state,
        currentValue: action.payload,
      };
    case PERCENTAGE_PRESSED:
      return {
        ...state,
        currentValue: action.payload,
      };
    default:
      return state;
  }
};
