import React, { useState } from "react";
import { View, Text } from "react-native";
import FooterTabs from "../components/FooterTabs";
import SafeScreen from "../config/SafeArea";

const Publicar = () => {

    const [link, setLink] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        
    };

    return (
        <SafeScreen>
                <Text>Publicar</Text>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <FooterTabs />
                </View>
        </SafeScreen>
    );
}

export default Publicar;