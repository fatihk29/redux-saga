import * as testSaga from "./testSaga";
console.log("2", Object.values({ a: 2, b: 3 }));
export function initSaga(sagaMiddleware) {
  Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
