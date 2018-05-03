import { takeLatest, call, put } from "redux-saga/effects";

import { fetchSingleUser } from "./apiService";
import {
  fetchSingleUserSucceeded,
  fetchSingleUserFailed
} from "./actionCreators";

import { FetchSingleUserTypes, TFetchSingleUserActions } from "./types";

export function* fetchSingleUserWorker(action: TFetchSingleUserActions) {
  if (action.type === FetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED) {
    try {
      const user = yield call(fetchSingleUser, action.id);
      yield put(fetchSingleUserSucceeded(user));
    } catch (error) {
      yield put(fetchSingleUserFailed(error));
    }
  }
}

export default function* watchFetchSingleUser() {
  yield takeLatest(
    FetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED,
    fetchSingleUserWorker
  );
}
