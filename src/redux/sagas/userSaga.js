import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
}

export default userSaga;
