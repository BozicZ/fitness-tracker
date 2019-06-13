import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import myRootReducer from "./reducers";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

import Home from "./components/Home";
import Details from "./components/Details";

const store = createStore(myRootReducer, applyMiddleware(thunk));

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
