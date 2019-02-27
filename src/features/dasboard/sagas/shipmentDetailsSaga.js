import { takeLatest, call, put } from "redux-saga/effects";

import actionTypes from '../actionTypes';
import { getShipmentDetails } from '../dashboardRequests';

async function fetchShimpentDetails(id) {
    if (id === undefined)
        return;
    try {
        return await getShipmentDetails(id);
    } catch (error) {
        console.log(error);
    }
}

function* workerSaga(action) {
    try {
        const details = yield call(fetchShimpentDetails.bind(null, action.payload.id));
        yield put({
            type: actionTypes.FETCH_SHIPMENT_DETAILS_SUCCESS,
            payload: {
                details,
                id: action.payload.id
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export default function* watcherSaga() {
    try {
        yield takeLatest(actionTypes.FETCH_SHIPMENT_DETAILS_START, workerSaga);
    } catch (error) {
        console.log(error);
    }
}