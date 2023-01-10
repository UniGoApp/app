import React, { useContext, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, Pressable} from 'react-native';

import { AuthContext } from '../context/auth';
import FooterTabs from "../components/FooterTabs";
import SafeScreen from "../config/SafeArea";
import SvgElement from '../components/SvgElement';
import theme from '../config/theme';

export default function Home ({navigation}) {
    const [state, setState] = useContext(AuthContext);
    const [noti, setNoti] = useState(1);

    return (
        <SafeScreen>
            <View style={styles.userContainer} >
                <View>
                    <Text style={{fontSize: 14, color: theme.color.grey}}>Hola,</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{state.user.username}</Text>
                </View>
                <Pressable onPress={() => navigation.navigate('Notifications')}>
                    <SvgElement name="bell" />
                    {noti != 0 ? <Text style={styles.numberNotifications}>{noti}</Text> : <></>}
                </Pressable>
            </View>
            <Text> {JSON.stringify(state, null, 4)} </Text>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <FooterTabs />
            </View>
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    userContainer: {
        width: '100%',
        // flex: 1,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    numberNotifications: {
        fontSize: 9,
        backgroundColor: theme.color.verde,
        width: 14,
        height: 14,
        borderRadius: 100,
        position: 'absolute',
        top:3,
        right: 0,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});    
