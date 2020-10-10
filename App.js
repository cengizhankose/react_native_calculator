import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import CalculatorScreen from "./src/screens/CalculatorScreen/index";

import thunk from "redux-thunk";
import reducer from "./src/redux/index";

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <CalculatorScreen />
    </Provider>
  );
}
