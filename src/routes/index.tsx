import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import { AuthContext } from '../contexts/Auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {

    const { signed, loading } = useContext(AuthContext);
    
    if(loading){
        return <ActivityIndicator style={{ flex: 1 }} />
    }

    return signed ? <AppRoutes /> : <AuthRoutes />;

}

export default Routes;