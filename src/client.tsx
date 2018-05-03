import "babel-polyfill";
import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Root from "./common/Root/";
import configureStore from "./common/configureStore";
import rootSaga from "./common/rootSaga";

const isDev = process.env.NODE_ENV;

const store = configureStore(window.__INITIAL_STATE__);

store.runSaga(rootSaga);

const RootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>
);

const rootElement = document.body.querySelector("#root");

hydrate(RootComponent, rootElement);
