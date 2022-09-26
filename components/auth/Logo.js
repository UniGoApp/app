import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = ({children}) => {
    return (
    <View style={styles.container} >
        <View style={styles.subContainer}>
            {children ? (
                children
            ) : (
                <Image style={styles.logo} source={require('../../assets/logos/unicarC.png')} />
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
        width: 100,
        height: 100,
        marginVertical: 30
    }
});

export default Logo;