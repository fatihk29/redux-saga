import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import entriesReducer from "../reducers/entries.reducers.js";
import modalsReducers from "../reducers/modals.reducers.js";
import { initSaga } from "../saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const configureStore = () => {
  const store = createStore(
    combineReducers({ entries: entriesReducer, modals: modalsReducers }),
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  initSaga(sagaMiddleware);
  return store;
};

export default configureStore;
