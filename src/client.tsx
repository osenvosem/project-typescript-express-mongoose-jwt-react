import "babel-polyfill";
import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Root from "./common/Root/";
import configureStore from "./common/configureStore";

const isDev = process.env.NODE_ENV;

// const store = configureStore(window.__INITIAL_STATE__);
// @ts-ignore
// store.runSaga(todoAppSaga);

const RootComponent = (
  // <Provider store={store}>
  <BrowserRouter>
    <Root />
  </BrowserRouter>
  // </Provider>
);

const rootElement = document.body.querySelector("#root");

hydrate(RootComponent, rootElement);
