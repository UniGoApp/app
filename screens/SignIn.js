import React, {useState, useContext} from 'react';
import {KeyboardAvoidingView, Text, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import Logo from '../components/auth/Logo';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import theme from '../config/theme';
import {AuthContext} from '../context/auth';

const SignIn = ({navigation}) => {

    const [email, setEmail] = useState('joseto.lopez00@gmail.com');
    const [password, setPassword] = useState('12345678');
    const [loading, setLoading] = useState(false);
    const [errorMSG, setError] = useState('');

    const [state, setState] = useContext(AuthContext);

    const handleSubmit = async () => {
        setLoading(true);
        setError('');
        if(!email || !password || password.length < 8 || !email.includes('@')){
            setError('All fields are required');
            setLoading(false);
            return;
        }

        try {
            const {data} = await axios.post('/signin', {
                email,
                password
            });

            setState(data);
            await SecureStore.setItemAsync('authToken', JSON.stringify(data));
            //Redirect to other page and save token on async storage
            navigation.navigate("Home");

        } catch(err) {
            setError('Ha ocurrido un error, inténtelo de nuevo más tarde.');
            setLoading(false);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView style={{zIndex: 10}}>
                <Logo />
                <Text style={styles.text}>Iniciar sesión</Text>

                <UserInput
                    name="Dirección de correo"
                    value={email}
                    setValue={setEmail}
                    autoCompleteType='email'
                    keyboardType='email-address' />
                <UserInput
                    name="Contraseña"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                    autoCompleteType='password' />

                <Text style={styles.forgot} onPress={() => {navigation.navigate('ForgotPassword')}}>
                    ¿Has olvidado la contraseña?
                </Text>

                <SubmitButton
                title='Acceder'
                handleSubmit={handleSubmit}
                loading={loading} />

                <Text style={styles.error}>{errorMSG}</Text>
                
                <Text style={styles.signupText}>
                    Todavía no tengo cuenta... <Text style={{color:theme.color.azul}} onPress={() => {navigation.navigate('SignUp')}}>¡Regístrate!</Text>
                </Text>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 80,
        zIndex: 1,
        backgroundColor: 'transparent'
    },
    text: {
        fontSize: 28,
        marginBottom: 20,
        textAlign: 'center'
    },
    forgot: {
        marginBottom: 40,
        marginTop: -10,
        marginLeft: 20,
        color: theme.color.azul
    },
    error: {
        color: theme.color.error,
        marginVertical: 10,
        marginLeft: 20
    },
    signupText: {
        textAlign: 'center'
    }
});    

export default SignIn;