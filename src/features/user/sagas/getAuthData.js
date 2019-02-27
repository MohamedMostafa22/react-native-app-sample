import userActionTypes from '../actionTypes';
import { takeLatest, call, put } from "redux-saga/effects";

import { getFromStorage } from '../../../localStorage';
import { navigate } from '../../../utils/navigatorService';

async function getAuthData() {
    const token = await getFromStorage('hq_mobile_token');
    const refreshToken = await getFromStorage('hq_mobile_refreshToken');
    if (token && refreshToken)
        return {
            token,
            refreshToken
        };
}

function* workerSaga() {
    try {
        const authData = yield call(getAuthData);
        if (authData) {
            yield put({
                type: userActionTypes.INITIALIZE_AUTH_DATA,
                payload: authData
            });
            navigate('App');
        } else {
            navigate('Auth');
        }
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}

export default function* watcherSaga() {
    try {
        yield takeLatest(userActionTypes.GET_AUTH_DATA, workerSaga);
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}