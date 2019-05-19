import { all, fork } from "redux-saga/effects";

function* rootSaga() {
  yield all([
    /* fork(some sagas) */
  ]);
}

export default rootSaga;
