import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { TEST } from "../actions/types";
import { testCall } from "../services/testService";

export function* testSaga() {
  yield takeEvery(TEST, testWorker);
}

function* testWorker() {
  yield call(testCall);
}
