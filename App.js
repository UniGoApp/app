import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/auth';
import Navigation from './Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
