import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView ,TextInput } from "react-native";
import SubmitButton from "../components/auth/SubmitButton";

const Publicar = () => {

    const [link, setLink] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <Text>Publicar</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Publicar;