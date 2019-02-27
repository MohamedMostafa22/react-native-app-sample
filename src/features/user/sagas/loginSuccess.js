import userActionTypes from '../actionTypes';
import { takeLatest, call, put } from "redux-saga/effects";

import { saveToStorage } from '../../../localStorage';

async function saveAuthData(token, refreshToken) {
    if (!token || !refreshToken)
        return;
    await saveToStorage('hq_mobile_token', token);
    await saveToStorage('hq_mobile_refreshToken', refreshToken);
}

function* workerSaga(action) {
    if (!action || !action.payload)
        return;
    try {
        yield call(saveAuthData.bind(
            null,
            action.payload.token,
            action.payload.refreshToken
        ));
        yield put({
            type: userActionTypes.INITIALIZE_AUTH_DATA,
            payload: {
                token: action.payload.token,
                refreshToken: action.payload.refreshToken
            }
        });
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}

export default function* watcherSaga() {
    try {
        yield takeLatest(userActionTypes.LOGIN_SUCCESS, workerSaga);
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}