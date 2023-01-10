import React, { useContext } from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import { AuthContext } from '../context/auth';
import FooterTabs from "../components/FooterTabs";
import SafeScreen from "../config/SafeArea";

export default function Home () {
    const [state, setState] = useContext(AuthContext);

    return (
        <SafeScreen>
            <Text> {JSON.stringify(state, null, 4)} </Text>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <FooterTabs />
            </View>
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});    
