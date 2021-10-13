import { take } from "redux-saga/effects";

export function* testSaga() {
  while (true) {
    yield take("TEST_MESSAGE");
  }
}

export function* dispatchTest() {
  //   while (true) {
  //     yield delay(100);
  //     yield put({ type: "TEST_MESSAGE1" });
  //   }
}
