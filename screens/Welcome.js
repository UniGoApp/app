import React from 'react';
import { View, Text, StyleSheet, Image, Pressable} from 'react-native';
import SafeScreen from '../config/SafeArea';

export default function Welcome ({navigation}) {
    const handlePess = () => navigation.navigate('SignIn');

    return (
        <SafeScreen>
            <View style={styles.container}>
                <View>
                    <Image 
                    source={require('../assets/images/bus-stop.png')}
                    style={styles.welcomeImage}
                    />
                    <Text style={styles.title}>Una nueva forma de ir a la universidad!</Text>
                </View>
                <View style={{alignSelf: 'flex-end'}}>
                    <Pressable style={styles.button} onPress={handlePess}>
                        <Text  style={styles.text}>Siguiente</Text>
                    </Pressable>
                </View>
            </View>
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30
    },
    welcomeImage: {
        width: 320,
        height: 440,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 8,
        borderColor: '#000',
        borderWidth: 2,
        paddingVertical: 16,
        paddingHorizontal: 32,
    },
    text:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});    
