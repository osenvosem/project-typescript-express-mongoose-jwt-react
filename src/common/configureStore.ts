import { createStore, compose, StoreEnhancer } from "redux";
import rootReducer from "./reducers";

import { TGlobalState } from "./types";

const defaultState: TGlobalState = {
  users: [],
  loggedInUser: null
};

export default function configureStore(preloadedState = defaultState) {
  const enhancers: StoreEnhancer<TGlobalState>[] = [];

  if (
    process.env.NODE_ENV === "development" &&
    typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "function"
  ) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(rootReducer, preloadedState, compose(...enhancers));
  return store;
}
