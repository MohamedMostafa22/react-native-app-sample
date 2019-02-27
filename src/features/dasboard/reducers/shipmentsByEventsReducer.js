import actionTypes from '../actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case actionTypes.FETCH_SHIPMENTS_FOR_EVENT_SUCCESS:
            return {
                ...state,
                [action.payload.event]: action.payload.shipments,
                currentlySelected: action.payload.event
            };
        default:
            return state;
    }
}