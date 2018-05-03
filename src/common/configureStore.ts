import { createStore, compose, StoreEnhancer, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from "redux-saga";

import rootReducer from "./rootReducer";

import { TGlobalState, TCustomStore } from "./types";

export const defaultState: TGlobalState = {
  users: [],
  loggedInUser: null,
  requestInProgress: false,
  error: null
};

export default function configureStore(preloadedState = defaultState) {
  const enhancers: StoreEnhancer<TGlobalState>[] = [];

  const sagaMiddleware = createSagaMiddleware();
  enhancers.push(applyMiddleware(sagaMiddleware));

  if (
    process.env.NODE_ENV === "development" &&
    typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "function"
  ) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(...enhancers)
  ) as TCustomStore<TGlobalState>;

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
