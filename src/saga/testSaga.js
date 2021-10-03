import { take } from "redux-saga/effects";

export function* testSaga() {
  while (true) {
    console.log("starting Saga");
    yield take("TEST_MESSAGE");
    console.log("Finish saga function");
  }
}

export function* count() {
  console.log("ss");
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
