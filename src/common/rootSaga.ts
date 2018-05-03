import { all, fork } from "redux-saga/effects";

import userListSaga from "./Root/screens/UserList/sagas";
import singleUserSaga from "./Root/screens/SingleUser/sagas";
import editProfileSaga from "./Root/screens/EditProfile/sagas";

export default function* rootSaga() {
  yield all([fork(userListSaga), fork(singleUserSaga), fork(editProfileSaga)]);
}
