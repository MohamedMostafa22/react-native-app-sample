import { takeLatest, call, put } from "redux-saga/effects";

import actionTypes from '../actionTypes';
import { getShipmentsSummary } from '../dashboardRequests';

async function fetchShipmentsSummary(from, to) {
    try {
        return await getShipmentsSummary(from, to);
    } catch (error) {
        console.log(error);
    }
}

function* workerSaga(action) {
    try {
        const shipments = yield call(
            fetchShipmentsSummary.bind(null, action.payload.from, action.payload.to)
        );
        if (shipments) {
            //Icon names are different in 'react-native-elements'
            shipments.forEach(shipment => shipment.icon = shipment.icon.replace('_', '-'));
            yield put({
                type: actionTypes.FETCH_SHIMPENTS_SUMMARY_SUCCESS,
                payload: {
                    shipments
                }
            });
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: actionTypes.FETCH_SHIMPENTS_SUMMARY_FAILURE,
            payload: {
                error
            }
        })
    }
}

export default function* watcherSaga() {
    try {
        return yield takeLatest(actionTypes.FETCH_SHIMPENTS_SUMMARY_START,
            workerSaga);
    } catch (error) {
        //TODO figure what to do with errors
        console.log(error);
    }
}