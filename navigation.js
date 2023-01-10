import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from './context/auth';
import LogOut from './components/LogOut';

const Stack = createNativeStackNavigator();

import Welcome from './screens/Welcome'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import ForgotPassword from './screens/ForgotPassword'

import Home from './screens/Home'
import Account from './screens/Account'
import Viajes from './screens/Viajes'
import Reservas from './screens/Reservas'
import Ajustes from './screens/Ajustes'
import Publicar from './screens/Publicar'
import Sugerencias from './screens/Sugerencias'
import Legal from './screens/Legal'
import Billete from './screens/Billete'
import Soporte from './screens/Soporte'
import theme from './config/theme';

export default function Navigation() {
    const [state, setState] = useContext(AuthContext);
    const authenticated = state && (state.token !== "") && (state.user !== null);

    return (
        <Stack.Navigator
            initialRouteName={authenticated ? 'Home' : 'Welcome'}
            screenOptions={{
                animationTypeForReplace: 'push',
                animation: 'fade',
                orientation: 'portrait_up',
                headerTitleAlign: 'center',
                headerBackTitle: '',
                navigationBarColor: theme.background.app,
                headerShown: false
            }}
        >
            {authenticated ? (
                <>
                    {/* MENU SCREENS: */}
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Viajes" component={Viajes} />
                    <Stack.Screen name="Publicar" component={Publicar} />
                    <Stack.Screen name="Reservas" component={Reservas} />
                    <Stack.Screen name="Billete" component={Billete}/>
                    <Stack.Screen name="Account" component={Account} options={{
                        headerShown: true,
                        title: 'Mi perfil',
                        headerRight: () => <LogOut />
                    }} />
                    {/* ACCOUNT SCREENS: */}
                    <Stack.Screen name="Ajustes" component={Ajustes} />
                    <Stack.Screen name="Sugerencias" component={Sugerencias} />
                    <Stack.Screen name="Legal" component={Legal} />
                    <Stack.Screen name="Soporte" component={Soporte} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                    <Stack.Screen name="Legal" component={Legal} />
                    
                </>
            )}
            
        </Stack.Navigator>
    );
}
