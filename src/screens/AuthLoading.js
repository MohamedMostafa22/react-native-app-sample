import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import withGeneralLayout from '../layout/hocs/withGeneralLayout';
import actions from '../features/user/actions/authenticationActions';

function AuthLoading(props) {
    props.getAuthData();
    return <View isLoaded={props.isLoaded} />
}

function mapStateToProps(state) {
    return {
        isLoaded: state.auth.isLoaded
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAuthData: actions.getAuthData(dispatch)
    };
}

export default withGeneralLayout(connect(mapStateToProps, mapDispatchToProps)(AuthLoading));