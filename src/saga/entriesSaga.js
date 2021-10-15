import { call, fork, take, put } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import axios from "axios";
import {
  populateEntries,
  populateEntryDetail,
} from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("i Need to get entries now");
  const { data } = yield call(axios, "http://localhost:3001/entries");
  yield put(populateEntries(data));
}

export function* getEntryDetails(id) {
  console.log(`got the id ${id}`);
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  console.log("data", data);
  yield put(populateEntryDetail(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  console.log("length", payload);
  for (let index = 0; index < payload.length - 2; ++index) {
    const entry = payload[index];
    yield fork(getEntryDetails, entry.id);
  }
}
