import userActionTypes from '../actionTypes';

export default function (state = {
    isLoaded: false
}, action) {
    switch (action.type) {
        case userActionTypes.INITIALIZE_AUTH_DATA:
            return {
                token: action.payload.token,
                refreshToken: action.payload.refreshToken,
                isLoaded: true
            };
        case userActionTypes.LOGOUT_SUCCESS:
            return {
                isLoaded: true
            };
        default:
            return state;
    }
};