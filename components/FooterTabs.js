import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import SvgElement from './SvgElement';
import theme from "../config/theme";

const Tab = ({text="", icon, size, handlePress, screenName, routeName}) => {
    
    const activeColor = screenName === routeName && theme.color.verde;
    const activeStroke = screenName === routeName && theme.color.verde;
    const activeBorder = screenName === routeName && theme.color.verde;

    return (
        <TouchableOpacity style={styles.tab} onPress={handlePress}>
            {activeBorder ? <View style={styles.activeTab} ></View> : <></>}
            <SvgElement name={icon} color={activeColor} size={size} stroke={activeStroke}/>
            <Text style={{color: activeColor}}>{text}</Text>
        </TouchableOpacity>
    );
}

const FooterTabs = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return(
        <View style={styles.container}>
            <Tab text="Inicio" icon="home" handlePress={()=> navigation.navigate("Home")} screenName="Home" routeName={route.name}/>
            <Tab text="Buscar" icon="search" handlePress={()=> navigation.navigate("Viajes")} screenName="Viajes" routeName={route.name}/>
            <Tab text="Nuevo" icon="add" handlePress={()=> navigation.navigate("Publicar")} screenName="Publicar" routeName={route.name}/>
            <Tab text="Reservas" icon="reservas" handlePress={()=> navigation.navigate("Reservas")} screenName="Reservas" routeName={route.name}/>
            <Tab text="Perfil" icon="person" handlePress={()=> navigation.navigate("Account")} screenName="Account" routeName={route.name}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        // flex: 1,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: 'stretch',
        alignSelf: "flex-end",
        backgroundColor: theme.background.app,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tab: {
        width: 360/5,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        // paddingTop: 12,
        // paddingBottom: 20
    },
    activeTab: {
        position: "absolute",
        top: -1,
        width: '50%',
        height: 5,
        backgroundColor: theme.color.verde,
        borderBottomStartRadius: 6,
        borderBottomEndRadius: 6
    }
});

export default FooterTabs;