import React, {useState, useContext} from 'react';
import {KeyboardAvoidingView, Text, Image, StyleSheet, ScrollView, Alert} from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import Logo from '../components/auth/Logo';
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import theme from '../config/theme';
import {AuthContext} from '../context/auth';

const ForgotPassword = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMSG, setError] = useState('');
    const [visible, setVisible] = useState(false);
    const [resetCode, setResetCode] = useState('');

    const [state, setState] = useContext(AuthContext);

    const handleSubmit = async () => {
        setLoading(true);
        setError('');
        if(!email || !email.includes('@')){
            setError('Email no válido');
            setLoading(false);
            return;
        }
        try {
            const {data} = await axios.post('/forgot-password', {
                email,
            });
            setLoading(false);
            if(data.error){
                setError(data.error);
                return;
            }else if(data.info){
                Alert.alert(
                    `${data.info}`,
                    "Mire en su bandeja de entrada e introduzca el código proporcionado a continuación.",
                    [
                      {
                        text: "Continuar",
                        style: "default",
                        onPress: () => setVisible(true)
                      }
                    ]
                );
            }
            
        } catch(err) {
            setError('Ha ocurrido un error, inténtelo de nuevo más tarde.');
            console.log('err :>> ', err);
            setLoading(false);
        }
    }

    const handleChange = async () => {
        setLoading(true);
        setError('');
        if(!resetCode || resetCode.length != 6 || !newPassword || newPassword.length < 8){
            setError('Introduzca una contraseña de almenos 8 caracteres, o reintroduzca el código cuidadosamente.');
            setLoading(false);
            return;
        }
        try{
            const {data} = await axios.post('/reset-password', {
                email, newPassword, resetCode
            })
            if(data.error){
                setError(data.error);
                setLoading(false);
            }else{
                setError('');
                setLoading(false);
                Alert.alert(
                    'Proceso finalizado',
                    `${data.info}`,
                    [
                      {
                        text: "Continuar",
                        style: "default",
                        onPress: () => navigation.navigate('SignIn')
                      }
                    ]
                );
            }
        }catch(err){
            console.log('err :>> ', err);
            setLoading(false);
            setError('Algo ha ido como no debía. Prueba de nuevo.')
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <ScrollView style={{zIndex: 10}}>
                <Logo>
                    <Image source={require('../assets/recoverPassword.png')} style={{width: 150, height: 150, borderRadius: 100, marginTop: 40}}/>
                </Logo>
                <Text style={styles.text}>Rellena los campos a continuación</Text>
                 
                <UserInput
                name="Dirección de correo"
                value={email}
                setValue={setEmail}
                autoCompleteType='email'
                keyboardType='email-address'
                editable={!visible} />

                {visible && <>
                    <UserInput
                    name="Nueva contraseña"
                    value={newPassword}
                    setValue={setNewPassword}
                    secureTextEntry={true}
                    autoCompleteType='password' />

                    <UserInput
                    name="Password Reset Code"
                    value={resetCode}
                    setValue={setResetCode}
                    secureTextEntry={true}
                    autoCompleteType='password' />
                </>}

                <SubmitButton
                title={visible ? 'Cambiar contraseña' : 'Obtener código'}
                handleSubmit={visible ? handleChange : handleSubmit}
                loading={loading} />

                <Text style={styles.error}>{errorMSG}</Text>
                
                <Text style={{color:theme.color.azul, alignSelf: 'center'}} onPress={() => {navigation.navigate('SignIn')}}>Cancelar</Text>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 28,
        marginBottom: 40,
        textAlign: 'center'
    },
    error: {
        color: theme.color.error,
        marginVertical: 10,
        marginLeft: 20
    }
});    


export default ForgotPassword;