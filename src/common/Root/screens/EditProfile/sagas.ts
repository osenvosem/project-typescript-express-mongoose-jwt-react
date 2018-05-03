import { takeLatest, call, put } from "redux-saga/effects";

import fetchUserApiService from "./apiService";
import { userFetchSucceeded, userFetchFailed } from "./actionCreators";

import { userFetchTypes, TUserFetchRequestedAction } from "./types";

export function* fetchUserWorker({ id }: TUserFetchRequestedAction) {
  try {
    const user = yield call(fetchUserApiService, id);
    yield put(userFetchSucceeded(user));
  } catch (error) {
    yield put(userFetchFailed(error));
  }
}

export default function* fetchUserWatcher() {
  yield takeLatest(userFetchTypes.USER_FETCH_REQUESTED, fetchUserWorker);
}
