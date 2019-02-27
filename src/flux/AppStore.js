import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import loginSaga from '../features/user/sagas/login';
import getAuthDataSaga from '../features/user/sagas/getAuthData';
import logoutSaga from '../features/user/sagas/logout';
import loginSuccessSaga from '../features/user/sagas/loginSuccess';
import shipmentsSummarySaga from '../features/dasboard/sagas/shipmentsSummarySaga';
import shipmentsByEventsSaga from '../features/dasboard/sagas/shipmentsByEventsSaga';
import shipmentDetailsSaga from '../features/dasboard/sagas/shipmentDetailsSaga';

import authReducer from '../features/user/reducers/authReducer';
import shipmentsSummaryReducer from '../features/dasboard/reducers/shipmentsSummaryReducer';
import shipmentsByEventsReducer from '../features/dasboard/reducers/shipmentsByEventsReducer';
import shipmentDetailsReducer from '../features/dasboard/reducers/shipmentDetailsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    shipmentsSummary: shipmentsSummaryReducer,
    shipmentsByEvents: shipmentsByEventsReducer,
    shipmentsDetails: shipmentDetailsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(loginSaga);
sagaMiddleware.run(getAuthDataSaga);
sagaMiddleware.run(logoutSaga);
sagaMiddleware.run(loginSuccessSaga);
sagaMiddleware.run(shipmentsSummarySaga);
sagaMiddleware.run(shipmentsByEventsSaga);
sagaMiddleware.run(shipmentDetailsSaga);

export default store;