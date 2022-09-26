import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from 'expo-secure-store';
import {API_url} from '../config/apiEndpoint';
import { useNavigation } from '@react-navigation/native';


const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [state, setState] = useState({
        user: null,
        token: ""
    });

    const navigation = useNavigation();

    const token = state && state.token ? state.token : '';
    //Configure axios defaults to all api calls
    axios.defaults.baseURL = API_url;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    //Handle expired tokens or 401 error
    axios.interceptors.response.use(
        async function (response){
            return response;
        },
        async function(error){
            let res = error.response;
            if(res.status === 401 && res.config && !res.config.__isRetryRequest){
                await SecureStore.deleteItemAsync('authToken');
                setState({user: null, token: ''});
                navigation.navigate('SignIn');
            }
        }
    );

    useEffect(() => {
        const getToken = async () => {
            let data = await SecureStore.getItemAsync('authToken');
            const as = JSON.parse(data);
            if(!!as) {
                setState({...state, user: as.user, token: as.token});
            }
        };
        getToken();
    }, []);

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};