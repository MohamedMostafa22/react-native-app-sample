import actionTypes from '../actionTypes';

export default function (state = {
    shipments: []
}, action) {
    switch (action.type) {
        case actionTypes.FETCH_SHIMPENTS_SUMMARY_START:
            return {
                ...state,
                shipmentsSummaryLoading: true
            };
        case actionTypes.FETCH_SHIMPENTS_SUMMARY_SUCCESS:
            return {
                ...state,
                shipmentsSummaryLoading: false,
                shipments: action.payload.shipments
            };
        case actionTypes.FETCH_SHIMPENTS_SUMMARY_FAILURE:
            return {
                ...state,
                shipmentsSummaryLoading: false,
                error: action.payload.error
            };
        case actionTypes.SHIPMENT_EVENT_CLICKED:
        default:
            return state;
    }
};