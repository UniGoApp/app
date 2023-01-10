import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { AuthContext } from "../context/auth";
import FooterTabs from "../components/FooterTabs";
import SafeScreen from "../config/SafeArea";

export default function Trips() {

    const [state, setState] = useContext(AuthContext);

    return (
        <SafeScreen>
            <Text>Viajes</Text>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <FooterTabs />
            </View>
        </SafeScreen>
    );
}