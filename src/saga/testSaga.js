import { take, delay, put } from "redux-saga/effects";

export function* testSaga() {
  while (true) {
    console.log("starting Saga");
    yield take("TEST_MESSAGE");
    console.log("Finish saga function");
  }
}

export function* dispatchTest() {
  //   while (true) {
  //     yield delay(100);
  //     yield put({ type: "TEST_MESSAGE1" });
  //   }
}
