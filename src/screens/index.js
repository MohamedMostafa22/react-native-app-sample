import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
    createMaterialTopTabNavigator
} from 'react-navigation';

import DashboardScreen from './dashboard';
import UserScreen from './user';
import LoginScreen from '../screens/auth/index';
import AuthLoadingScreen from './AuthLoading';

const DashboardStackNavigator = createStackNavigator({
    Home: {
        screen: DashboardScreen
    }
});

const UserStackNavigator = createStackNavigator({
    Home: {
        screen: UserScreen
    }
});

const AppStack = createMaterialTopTabNavigator({
    Dashboard: DashboardStackNavigator,
    User: UserStackNavigator
});

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: () => null,
        },
    }
});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));