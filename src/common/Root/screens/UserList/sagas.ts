import { takeLatest, call, put } from "redux-saga/effects";
import { fetchUsers as fetchUsersApi } from "./apiService";
import { UsersFetchActionTypes } from "./types";

export function* fetchUsers() {
  try {
    const users = yield call(fetchUsersApi);
    yield put({ type: UsersFetchActionTypes.USERS_FETCH_SUCCEEDED, users });
  } catch (error) {
    yield put({ type: UsersFetchActionTypes.USERS_FETCH_FAILED, error });
  }
}

export default function* userListSaga() {
  yield takeLatest(UsersFetchActionTypes.USERS_FETCH_REQUESTED, fetchUsers);
}
