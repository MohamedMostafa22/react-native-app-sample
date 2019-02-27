import userActionTypes from '../actionTypes';
import { takeLatest, call, put } from "redux-saga/effects";

import userRequests from '../userRequests';

async function login(username, password) {
    try {
        return await userRequests.login(username, password);
    } catch (error) {
        console.log(error);
    }
}

function* workerSaga(action) {
    try {
        const { username, password } = action.payload;
        const response = yield call(login.bind(null, username, password));
        if (response)
            yield put({
                type: userActionTypes.LOGIN_SUCCESS,
                payload: {
                    token: response.token,
                    refreshToken: response.refreshToken
                }
            });
        else
            yield put({
                type: userActionTypes.LOGIN_FAILURE,
                payload: {
                    //TODO: improve
                    error: "Failed to login"
                }
            })
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}

export default function* watcherSaga() {
    try {
        yield takeLatest(userActionTypes.LOGIN_START, workerSaga);
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}