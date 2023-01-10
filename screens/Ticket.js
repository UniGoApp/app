
import React, {useState, useContext} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import SvgElement from "../components/SvgElement";
import theme from "../config/theme";
import { AuthContext } from "../context/auth";

export default function Ticket({route, navigation}){

    const {billeteDATA} = route.params;
    const [state, setState] = useContext(AuthContext);

    const onPressDelete = () => {
        Alert.alert(
            "Cancelar viaje",
            "¡Está a punto de desapuntarse del viaje! Si se ha cobrado el viaje se reintegrará en las próximas 48 horas.",
            [
              {
                text: "Cancelar",
                style: "default"
              },
              { text: "Eliminar",
                style: "destructive",
                onPress: async () => {
                    //Call API
                    Alert.alert(
                        "Viaje cancelado",
                        "Se ha borrado del viaje exitosamente.",
                        [
                          {
                            text: "Aceptar",
                            style: "default"
                          }
                        ],
                        {
                          cancelable: true
                        }
                    );
                    navigation.navigate("Home");
                }
             }
            ],
            {
              cancelable: true
            }
        );
    };
    const onPressSave = () => {
        Alert.alert(
            "Guardar en Wallet",
            "¡Disponible próximamente!",
            [
              {
                text: "Aceptar",
                style: "default"
              }
            ],
            {
              cancelable: true
            }
        );
    };

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.centered}>Muestra esto al conductor</Text>
                <View style={styles.ticket}>
                    <View style={styles.qr}>
                        <Text style={[styles.centered, {marginBottom: 12, fontSize: theme.size.body}]}>{billeteDATA.fecha}</Text>
                        <Image source={require('../assets/icon.png')} style={{width: 150, height: 150}}/>
                        <Text>{billeteDATA.id}</Text>
                    </View>
                    <View style={{ borderTopWidth: 2, borderStyle: 'dashed', borderColor: theme.color.light}}>
                        <View style={styles.dotLeft}></View>
                        <View style={styles.dotRight}></View>
                    </View>
                    <View style={styles.info}>
                        <View style={styles.userInfo}>
                            <View style={styles.row}>
                                <SvgElement name="person" color={theme.color.verde} style={{flex: 2, margin:0, padding: 0}}/>
                                <Text style={{flex: 8, marginLeft: 12}}>{state.user.username}</Text>
                            </View>
                            <View style={styles.row}>
                                <SvgElement name="clock" color={theme.color.verde} style={{flex: 2, margin:0, padding: 0}} />
                                <Text style={{flex: 8, marginLeft: 12}}>{billeteDATA.hora}</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, justifyContent:'flex-start', marginVertical: 10}}>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                                <SvgElement name="location" color={theme.color.verde}/>
                                <SvgElement name="rightLong" color={theme.color.verde}/>
                                <SvgElement name="flag" color={theme.color.verde}/>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start'}}>
                                <Text style={[{flex:1}, styles.centered]}>{billeteDATA.origen}</Text>
                                <Text style={{flex: 1}}></Text>
                                <Text style={[{flex:1}, styles.centered]}>{billeteDATA.destino}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.botones}>
                    <TouchableOpacity style={styles.boton}
                    onPress={onPressSave}>
                        <SvgElement name="wallet" size={36} color={theme.color.verde}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.boton, styles.boton2]} onPress={onPressDelete}>
                        <SvgElement name="delete" size={36} type="caution" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 8
    },
    centered: {
        textAlign: 'center'
    },
    ticket:{
        flex: 4,
        marginHorizontal: 20,
        justifyContent: 'flex-start',
        borderRadius: 16,
        backgroundColor: '#fff',
        marginVertical: 12,

    },
    qr:{
        alignItems: 'center',
        marginVertical: 24
    },
    dotRight: {
        position: "absolute",
        top:-15,
        left:-15,
        width: 30,
        height: 30,
        backgroundColor: 'rgb(242,242,242)',
        borderRadius: 100,
        zIndex: 1
    },
    dotLeft: {
        position: "absolute",
        right:-15,
        top:-15,
        width: 30,
        height: 30,
        backgroundColor: 'rgb(242,242,242)',
        borderRadius: 100,
        zIndex: 1
    },
    info: {
        flex:1,
        justifyContent: 'flex-start',
        margin: 15
    },
    userInfo: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    row:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
        marginVertical: 16
    },
    botones: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 18
    },
    boton: {
        width: 64,
        height: 64,
        borderRadius: 100,
        backgroundColor: theme.color.light
    },
    boton2: {
        backgroundColor: theme.background.caution
    }
});