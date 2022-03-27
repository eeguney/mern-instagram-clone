import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./store/reducers";
import { setLogged } from "./store/actions/user";
import "./index.css";
import App from "./App";

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

const token = localStorage.getItem("token");
if (token !== null) {
  store.dispatch(setLogged());
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("site")
);
