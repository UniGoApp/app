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
import Notifications from './screens/Notifications'
import Account from './screens/Account'
import Trips from './screens/Trips'
import Reservations from './screens/Reservations'
import Settings from './screens/Settings'
import New from './screens/New'
import Legal from './screens/Legal'
import Ticket from './screens/Ticket'
import Support from './screens/Support'
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
                    <Stack.Screen name="Notifications" component={Notifications} options={{
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: theme.background.app,
                          },
                        title: 'Notificaciones',
                    }}/>
                    <Stack.Screen name="Trips" component={Trips} />
                    <Stack.Screen name="New" component={New} />
                    <Stack.Screen name="Reservations" component={Reservations} />
                    <Stack.Screen name="Ticket" component={Ticket}/>
                    <Stack.Screen name="Account" component={Account} options={{
                        headerShown: true,
                        title: 'Mi perfil',
                        headerRight: () => <LogOut />
                    }} />
                    {/* ACCOUNT SCREENS: */}
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="Legal" component={Legal} />
                    <Stack.Screen name="Support" component={Support} />
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
