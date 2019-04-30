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



function* urlSaga() {
    yield takeLatest('SEND_URL_DATA', addURL);
}

export default urlSaga;