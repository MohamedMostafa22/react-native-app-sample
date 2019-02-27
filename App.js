import React from 'react';
import NavigatorContainer from './src/screens';
import { setTopLevelNavigator } from './src/utils/navigatorService';

function AppContainer() {
    return (
        <NavigatorContainer ref={navigatorRef => {
            setTopLevelNavigator(navigatorRef);
        }} />
    )
}

export default AppContainer;