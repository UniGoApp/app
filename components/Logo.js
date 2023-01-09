import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = ({children}) => {
    return (
    <View style={styles.container} >
        <View style={styles.subContainer}>
            {children ? (
                children
            ) : (
                <Image style={styles.logo} source={require('../assets/images/unigo.png')} />
            )}
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20
    },
    subContainer: {
        backgroundColor: 'transparent',
        height: 160,
        width: 160,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        width: 120,
        height: 120,
        marginVertical: 30,
        resizeMode: 'contain'
    }
});

export default Logo;