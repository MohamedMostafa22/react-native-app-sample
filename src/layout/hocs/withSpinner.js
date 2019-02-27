import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';

export default function ComponentWithSpinner(Component) {
    return function (props) {
        return (
            !props.isLoaded ?
                <View>
                    <ActivityIndicator size="large" />
                </View> :
                <Component {...props} />
        )
    }
}