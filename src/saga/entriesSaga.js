import { call, fork, take, put } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import axios from "axios";
import types from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("i Need to get entries now");
  const result = yield call(axios, "http://localhost:3001/entries");
  console.log("result", result);
  yield put({ type: types.POPULATE_ENTRIES, payload: result.data });
}

export function* getEntryDetails(id) {
  console.log(`got the id ${id}`);
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  console.log("data", data);
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  console.log("length", payload);
  for (let index = 0; index < payload.length - 1; ++index) {
    const entry = payload[index];
    yield fork(getEntryDetails, entry.id);
  }
}
