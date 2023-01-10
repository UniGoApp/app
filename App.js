import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/auth';
import Navigation from './Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
