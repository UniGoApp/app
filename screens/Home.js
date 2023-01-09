import React, { useContext } from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import { AuthContext } from '../context/auth';
import FooterTabs from "../components/FooterTabs";
import SafeViewAndroid from "../config/SafeArea";

export default function Home () {
    
    const [state, setState] = useContext(AuthContext);

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <Text> {JSON.stringify(state, null, 4)} </Text>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <FooterTabs />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});    
