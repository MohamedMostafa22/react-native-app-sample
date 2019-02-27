import actionTypes from './navigationActionTypes';

const actions = {
    navigateToApp(dispatch) {
        return function () {
            return {
                type: actionTypes.navigateToApp,

            }
        }
    }
}