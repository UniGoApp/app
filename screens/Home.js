import React, { useContext } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { AuthContext } from "../context/auth";
import FooterTabs from "../components/nav/FooterTabs";
import SafeViewAndroid from "../config/SafeArea";

const Home = () => {

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

export default Home;