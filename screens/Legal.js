import React, { useState } from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet, TouchableHighlight} from 'react-native';
import theme from '../config/theme';

export default function Legal(){

    const [privacidad, setPrivacidad] = useState(false);
    const [terminos, setTerminos] = useState(false);

    return(
        <SafeAreaView style={{flex: 1, justifyContent: 'flex-start'}}>
            <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => setPrivacidad(!privacidad)} >
                <Text style={styles.textButton}>Política de Privacidad</Text>
            </TouchableHighlight>
            {privacidad ? 
                <View style={styles.textContainer}>
                    <Text>Texto de la política de privacidad...</Text>
                </View> : <></>
            }
            
            <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            style={styles.button}
            onPress={() => setTerminos(!terminos)} >
                <Text style={styles.textButton}>Términos y condiciones</Text>
            </TouchableHighlight>
            {terminos ? 
                <View style={styles.textContainer}>
                    <Text>Texto de los Términos y condiciones...</Text>
                    </View> : <></>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 18,
        backgroundColor: theme.color.light
    },
    textButton: {
        fontSize: theme.size.title,
        textAlign: 'center'
    },
    textContainer:{
        padding: 10
    }
});