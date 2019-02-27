import { takeLatest, call, put } from "redux-saga/effects";

import actionTypes from '../actionTypes';
import { getShipmentsForEvent } from '../dashboardRequests';

async function fetchShimpentsForEvent(
    event,
    from,
    to,
    orderBy,
    orderDirection
) {
    return await getShipmentsForEvent(event, from, to, orderBy, orderDirection);
}

function* workerSaga(action) {
    try {
        const { event, from, to, orderBy, orderDirection } = action.payload
        const shipments = yield call(fetchShimpentsForEvent.bind(
            null,
            event,
            from,
            to,
            orderBy,
            orderDirection
        ));
        yield put({
            type: actionTypes.FETCH_SHIPMENTS_FOR_EVENT_SUCCESS,
            payload: {
                shipments,
                event
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export default function* watcherSaga() {
    yield takeLatest(actionTypes.FETCH_SHIPMENTS_FOR_EVENT_START, workerSaga);
}