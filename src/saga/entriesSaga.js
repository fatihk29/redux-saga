import { call, take } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("i Need to get entries now");
  //   const result = yield call(axios, "http://localhost:3001/entries");
  //   console.log("result", result);
}
