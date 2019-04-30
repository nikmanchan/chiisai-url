import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on 'SEND_URL_DATA' actions
function* addURL(action) {
    try {
        // sends URL data to the server
        yield axios.post('api/url', action.payload);
    } catch (error) {
        console.log('Error with URL data POST to server:', error);
    }
}

function* fetchURLData() {
    try {
      // retrieve URL data from the server
      const response = yield axios.get('api/url');
  
      yield put({ type: 'SET_URL_DATA', payload: response.data });
    } catch (error) {
      console.log('URL data get request failed', error);
    }
  }


function* urlSaga() {
    yield takeLatest('SEND_URL_DATA', addURL);
    yield takeLatest('FETCH_URL_DATA', fetchURLData);
}

export default urlSaga;