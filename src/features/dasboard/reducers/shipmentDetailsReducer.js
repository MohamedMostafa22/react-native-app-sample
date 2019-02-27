import actionTypes from '../actionTypes';

export default function (state = {}, action) {
    switch (action.payload) {
        case actionTypes.FETCH_SHIPMENT_DETAILS_SUCCESS:
            return {
                ...state,
                [action.payload.id]: action.payload.details
            };
        default:
            return state;
    }
};