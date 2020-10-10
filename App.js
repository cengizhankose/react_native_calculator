/**
 * @author Cengizhan KÖSE
 * @email kose651@gmail.com
 * @create date 2020-10-10
 * @modify date 2020-10-07
 * @desc Calculator app developed with React Native Expo CLI
 */
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
