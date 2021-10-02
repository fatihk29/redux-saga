import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import entriesReducer from "../reducers/entries.reducers.js";
import modalsReducers from "../reducers/modals.reducers.js";

const configureStore = () => {
  return createStore(
    combineReducers({ entries: entriesReducer, modals: modalsReducers }),
    composeWithDevTools()
  );
};

export default configureStore;
