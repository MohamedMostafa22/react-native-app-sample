import actionTypes from '../actionTypes';

const actions = {
    startShipmentsSummaryFetch(dispatch) {
        return function (from, to) {
            return dispatch({
                type: actionTypes.FETCH_SHIMPENTS_SUMMARY_START,
                payload: {
                    from,
                    to
                }
            });
        }
    },
    shipmentsSummaryFetchSuccess(dispatch) {
        return function (shipments) {
            return dispatch({
                type: actionTypes.FETCH_SHIMPENTS_SUMMARY_SUCCESS,
                payload: {
                    shipments
                }
            });
        }
    },
    shipmentsSummaryFetchFailure(dispatch) {
        return function (error) {
            return dispatch({
                type: actionTypes.FETCH_SHIMPENTS_SUMMARY_FAILURE,
                payload: {
                    error
                }
            });
        }
    },
    startShipmentsForEventFetch(dispatch) {
        return function (event, from, to, orderBy, orderDirection) {
            return dispatch({
                type: actionTypes.FETCH_SHIPMENTS_FOR_EVENT_START,
                payload: {
                    event,
                    from,
                    to,
                    orderBy,
                    orderDirection
                }
            });
        }
    },
    shipmentsForEventsFetchSuccess(dispatch) {
        return function (shipments) {
            return dispatch({
                type: actionTypes.FETCH_SHIPMENTS_FOR_EVENT_SUCCESS,
                payload: {
                    shipments
                }
            });
        }
    },
    shipmentsForEventsFetchFailure(dispatch) {
        return function (error) {
            return dispatch({
                type: actionTypes.FETCH_SHIPMENTS_FOR_EVENT_FAILURE,
                payload: {
                    error
                }
            });
        }
    },
    startShipmentDetailsFetch(dispatch) {
        return function (id) {
            return dispatch({
                type: actionTypes.FETCH_SHIPMENT_DETAILS_START,
                payload: {
                    id
                }
            });
        }
    },
    shipmentDetailsFetchSuccess(dispatch) {
        return function (details) {
            return dispatch({
                type: actionTypes.FETCH_SHIMPENTS_SUMMARY_SUCCESS,
                payload: {
                    details
                }
            });
        }
    },
    shipmentDetailsFetchFailure(dispatch) {
        return function (error) {
            return dispatch({
                type: actionTypes.FETCH_SHIPMENT_DETAILS_FAILURE,
                payload: {
                    error
                }
            });
        }
    },
    shipmentEventClicked(dispatch) {
        return function (eventIndex) {
            return dispatch({
                type: actionTypes.SHIPMENT_EVENT_CLICKED,
                payload: {
                    eventIndex
                }
            })
        }
    }
};

export default actions;