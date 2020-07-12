import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => {
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

                <AppStack.Screen component={Home} name='Home' />

            </AppStack.Navigator>

        </NavigationContainer>
    );
}

export default AppRoutes;