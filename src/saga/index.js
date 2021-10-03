import * as entries from "./entriesSaga";

export function initSaga(sagaMiddleware) {
  Object.values(entries).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}
