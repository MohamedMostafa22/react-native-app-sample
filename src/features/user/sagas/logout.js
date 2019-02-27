import userActionTypes from '../actionTypes';
import { takeLatest, call, put } from "redux-saga/effects";

import { removeFromStorage } from '../../../localStorage';
import actionTypes from '../actionTypes';

async function removeAuthDataFromStorage() {
    await removeFromStorage('hq_mobile_token');
    await removeFromStorage('hq_mobile_refreshToken');
}

function* workerSaga() {
    try {
        //Removes from local storage for now
        yield call(removeAuthDataFromStorage);
        yield put({
            type: actionTypes.LOGOUT_SUCCESS
        });
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}

export default function* watcherSaga() {
    try {
        yield takeLatest(userActionTypes.LOGOUT_START, workerSaga);
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}