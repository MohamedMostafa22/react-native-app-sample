import userActionTypes from '../actionTypes';

const actions = {
    loginStart(dispatch) {
        return function (username, password, tokenCode) {
            return dispatch({
                type: userActionTypes.LOGIN_START,
                payload: {
                    username,
                    password,
                    tokenCode
                }
            });
        };
    },
    loginSuccess(dispatch) {
        return function (token, refreshToken) {
            return dispatch({
                type: userActionTypes.LOGIN_SUCCESS,
                payload: {
                    token,
                    refreshToken
                }
            });
        };
    },
    loginFailure(dispatch) {
        return function (error) {
            return dispatch({
                type: userActionTypes.LOGIN_FAILURE,
                payload: {
                    error
                }
            });
        };
    },
    getAuthData(dispatch) {
        return function () {
            return dispatch({
                type: userActionTypes.GET_AUTH_DATA
            });
        };
    },
    logoutStart(dispatch) {
        return function () {
            return dispatch({
                type: userActionTypes.LOGOUT_START
            });
        };
    },
    logoutSuccess(dispatch) {
        return function () {
            return dispatch({
                type: userActionTypes.LOGIN_SUCCESS
            });
        };
    },
    logoutFailure(dispatch) {
        return function () {
            return dispatch({
                type: userActionTypes.LOGOUT_FAILURE
            });
        };
    }
}

export default actions;