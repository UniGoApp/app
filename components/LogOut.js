import React, { useContext } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/auth';
import * as SecureStore from 'expo-secure-store';
import SvgElement from './SvgElement';

function LogOut() {
    const [state, setState] = useContext(AuthContext);
    const signOut = async () =>{
        setState({token:'', user: null});
        await SecureStore.deleteItemAsync('authToken');
    }

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={signOut}>
                <SvgElement name="exit" type='caution' size="20" />
            </TouchableOpacity>
        </SafeAreaView> 
    );
}

export default LogOut;