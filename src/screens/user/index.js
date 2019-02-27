import React from 'react';
import {
    View,
    Text
} from 'react-native';
import withGeneralLayout from '../../layout/hocs/withGeneralLayout';
function User() {
    return (
        <View>
            <Text>
                This is the user screen
            </Text>
        </View>
    )
}
export default withGeneralLayout(User);