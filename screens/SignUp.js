import React, {useState, useContext} from 'react';
import {KeyboardAvoidingView, Text, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import Logo from '../components/auth/Logo';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import {AuthContext} from '../context/auth';
import theme from '../config/theme';

const SignUp = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMSG, setError] = useState('');

    const [state, setState] = useContext(AuthContext);

    const handleSubmit = async () => {
        setLoading(true);
        setError('');
        if(!name || !email || !password || !phone || password.length < 8 || !email.includes('@')){
            setError('Por favor complete todos los campos correctamente.');
            setLoading(false);
            return;
        }

        try {
            const {data} = await axios.post('/signup', {
                name,
                email,
                phone,
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

                <Text style={styles.text}>Nuevo usuario</Text>

                <UserInput
                    name="Nombre"
                    value={name}
                    setValue={setName}
                    autoCapitalize='words'
                    autoCorrect={false} />
                <UserInput
                    name="Dirección de correo"
                    value={email}
                    setValue={setEmail}
                    autoCompleteType='email'
                    keyboardType='email-address' />
                <UserInput
                    name="Teléfono"
                    value={phone}
                    setValue={setPhone}
                    autoCompleteType='tel'
                    keyboardType='phone-pad' />
                <UserInput
                    name="Contraseña"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                    autoCompleteType='password' />

                <SubmitButton
                title='Completar registro'
                handleSubmit={handleSubmit}
                loading={loading} />

                <Text style={styles.error}>{errorMSG}</Text>
                
                <Text style={styles.loginText}>
                    Ya tengo cuenta... <Text style={styles.login} onPress={() => {navigation.navigate('SignIn')}}>Acceder</Text>
                </Text>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        zIndex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 28,
        textAlign: 'center'
    },
    error: {
        color: 'red',
        marginVertical: 10,
        marginLeft: 20
    },
    loginText: {
        textAlign: 'center'
    },
    login: {
        color: theme.color.azul
    }
});    

export default SignUp;