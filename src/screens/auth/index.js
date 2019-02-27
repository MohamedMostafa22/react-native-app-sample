import React from 'react';
import {
    View,
    Text
} from 'react-native';

import authActions from '../../features/user/actions/authenticationActions';

import withGeneralLayout from '../../layout/hocs/withGeneralLayout';

function Login(props) {
    //Temporarily log the user in
    props.login('user@example.com', '123xyz');
}

function mapDispatchToProps(dispatch) {
    return {
        login: authActions.loginStart(dispatch)
    };
};

export default withGeneralLayout(connect(null, mapDispatchToProps)(Login));