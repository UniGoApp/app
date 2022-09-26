import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import SvgElement from '../auth/SvgElement';
import theme from "../../config/theme";

const Tab = ({text, icon, size, handlePress, screenName, routeName}) => {
    
    const activeScreenColor = screenName === routeName && theme.color.verde;
    const activeStroke = screenName === routeName && theme.color.verde;
    return (
        <TouchableOpacity style={styles.tab} onPress={handlePress}>
            <SvgElement name={icon} color={activeScreenColor} size={size} stroke={activeStroke}/>
        </TouchableOpacity>
    );
}

const FooterTabs = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return(
        <View style={styles.container}>
            <Tab text="Home" icon="home" handlePress={()=> navigation.navigate("Home")} screenName="Home" routeName={route.name}/>
            <Tab text="Viajes" icon="search" handlePress={()=> navigation.navigate("Viajes")} screenName="Viajes" routeName={route.name}/>
            <Tab text="Publicar" icon="add" size="48" handlePress={()=> navigation.navigate("Publicar")} screenName="Publicar" routeName={route.name}/>
            <Tab text="Reservas" icon="reservas" handlePress={()=> navigation.navigate("Reservas")} screenName="Reservas" routeName={route.name}/>
            <Tab text="Account" icon="person" handlePress={()=> navigation.navigate("Account")} screenName="Account" routeName={route.name}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        backgroundColor: 'lightgray'
    },
    tab: {
        marginVertical: 30
    }
});

export default FooterTabs;