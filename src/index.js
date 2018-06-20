import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "tachyons";
import App from "./containers/App";
import { searchRobots, requestRobots } from "./reducers/reducers";

const logger = createLogger();
const rootReducers = combineReducers({ requestRobots, searchRobots });
const store = createStore(
  rootReducers,
  applyMiddleware(thunkMiddleware, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
