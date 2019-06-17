import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import myRootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";

import App from "./components/App";
import Home from "./containers/Home";
import Details from "./components/Details";
import "./styles/index.css";

const store = createStore(myRootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route path="/" exact component={Home} />
        <Route path="/home/" component={Home} />
        <Route path="/details/" component={Details} />
      </App>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
