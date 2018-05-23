import { takeLatest, call, put, all } from "redux-saga/effects";

import { fetchSingleUser, removeUser } from "./apiService";
import {
  fetchSingleUserSucceeded,
  fetchSingleUserFailed
} from "./actionCreators";

import {
  fetchSingleUserTypes,
  removeUserTypes,
  TFetchSingleUserActions,
  TRemoveUserAction
} from "./types";

export function* fetchSingleUserWorker(action: TFetchSingleUserActions) {
  if (action.type === fetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED) {
    try {
      const user = yield call(fetchSingleUser, action.id);
      yield put(fetchSingleUserSucceeded(user));
    } catch (error) {
      yield put(fetchSingleUserFailed(error));
    }
  }
}

export function* removeUserWorker(action: TRemoveUserAction) {
  try {
    yield call(removeUser, action.id);
  } catch (e) {
    console.error(e);
  }
}

export default function* watchFetchSingleUser() {
  yield all([
    takeLatest(
      fetchSingleUserTypes.FETCH_SINGLE_USER_REQUESTED,
      fetchSingleUserWorker
    ),
    takeLatest(removeUserTypes.REMOVE_USER, removeUserWorker)
  ]);
}
