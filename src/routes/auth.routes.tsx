import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Login from '../pages/Login';

const AppStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <NavigationContainer>

            <AppStack.Navigator
                headerMode='none'
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#FFFFFF'
                    }
                }}
            >

                <AppStack.Screen component={Welcome} name='Welcome' />
                <AppStack.Screen component={Login} name='Login' />

            </AppStack.Navigator>

        </NavigationContainer>
    );
}

export default AuthRoutes;