import React from 'react';
import { Provider } from 'react-redux';

import store from '../../flux/AppStore';
import AppLayout from '../views/AppLayout';

export default function withGeneralLayout(ScreenComponent) {
    return function () {
        return (
            <Provider store={store}>
                <AppLayout>
                    <ScreenComponent />
                </AppLayout>
            </Provider>
        );
    }
}; 