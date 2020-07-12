import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/contexts/Auth';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar translucent barStyle='dark-content' backgroundColor='transparent' />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}


