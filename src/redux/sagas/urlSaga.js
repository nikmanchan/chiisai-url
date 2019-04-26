import { takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on 'SEND_URL_DATA' actions
function addURL() {
    console.log('adding URL data!');

}



function* urlSaga() {
  yield takeLatest('SEND_URL_DATA', addURL);
}

export default urlSaga;