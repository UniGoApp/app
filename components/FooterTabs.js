import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import SvgElement from './SvgElement';
import theme from "../config/theme";

const screen = Dimensions.get("screen");

const Tab = ({text="", icon, size, handlePress, screenName, routeName}) => {
    
    const activeColor = screenName === routeName && theme.color.verde;
    const activeStroke = screenName === routeName && theme.color.verde;

    return (
        <TouchableOpacity style={styles.tab} onPress={handlePress}>
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
            <Tab text="Buscar" icon="search" handlePress={()=> navigation.navigate("Trips")} screenName="Trips" routeName={route.name}/>
            <Tab text="Nuevo" icon="add" handlePress={()=> navigation.navigate("New")} screenName="New" routeName={route.name}/>
            <Tab text="Reservas" icon="reservas" handlePress={()=> navigation.navigate("Reservations")} screenName="Reservations" routeName={route.name}/>
            <Tab text="Perfil" icon="person" handlePress={()=> navigation.navigate("Account")} screenName="Account" routeName={route.name}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
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
        width: screen.width/5,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    }
});

export default FooterTabs;