import React, {useState, useContext} from "react";
import { SafeAreaView, FlatList, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";

import SvgElement from "../components/SvgElement";
import FooterTabs from "../components/FooterTabs";
import SafeViewAndroid from "../config/SafeArea";
import theme from "../config/theme";
import { AuthContext } from "../context/auth";
import Loader from "../components/Loader";
import SafeScreen from "../config/SafeArea";

const data = [];
// const data = [
//       {
//         id: 'vd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
//         fecha: 'Lunes 05 sept',
//         origen: 'Murcia',
//         destino: 'Campus La Muralla',
//         uni: 'UPCT',
//         hora: '12:15'
//       },
//       {
//         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
//         fecha: 'Lunes 06 sept',
//         origen: 'Murcia',
//         destino: 'Campus La Muralla',
//         uni: 'UPCT',
//         hora: '12:15'
//       },
//       {
//       id: 'nd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
//       fecha: 'Lunes 17 sept',
//       origen: 'Murcia',
//       destino: 'Campus La Muralla',
//       uni: 'UPCT',
//       hora: '12:15'
//     },
//     {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       fecha: 'Lunes 07 sept',
//       origen: 'Murcia',
//       destino: 'Campus La Muralla',
//       uni: 'UPCT',
//       hora: '12:15'
//     },
//     {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       fecha: 'Lunes 08 sept',
//       origen: 'Murcia',
//       destino: 'Campus La Muralla',
//       uni: 'UPCT',
//       hora: '12:15'
//     },
// ];

export default function Reservas({navigation}){

    const [state, setState] = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    // const {data} = axios.get('/reservas')
    // .then( console.log('data :>> ', data) )
    // .finally(setLoading(false));

    const onPress = (id) => {
        data.map( billeteDATA => {
            if(billeteDATA.id === id) navigation.navigate("Billete", {billeteDATA});
        });
        
    };

    const Card = (props) => (
        <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => onPress(props.item.id)}
        >
            <View style={styles.card}>
                <View style={{flex: 8}}>
                    <Text style={styles.bold}>{props.item.fecha}</Text>
                    <View style={{flex: 1, flexDirection:'row', justifyContent:'flex-start', marginVertical: 10}}>
                        <View>
                            <Text>{props.item.origen}</Text>
                            <Text style={styles.bold}>{props.item.hora}</Text>
                        </View>
                        <View style={{marginHorizontal: 15}}>
                            <SvgElement name="rightLong" />
                        </View>
                        <View>
                            <Text>{props.item.destino}</Text>
                            <Text>{props.item.uni}</Text>
                        </View>
                    </View>
                </View>
                <SvgElement name="right" color={theme.color.verde} size={48} style={{flex: 2, margin:0, padding: 0}}/>
            </View>
        </TouchableOpacity>
    );

    return(
        <SafeScreen style={{flex: 1}} >
            <View style={styles.container}> 
                <Text style={styles.title}>Viajes previstos:</Text>
                <View style={styles.subrayado}></View>
                <View style={styles.cardContainer}>
                    {loading ? (<Loader />) : (
                        <FlatList
                        data={data}
                        renderItem={( props ) =>  <Card {...props} /> }
                        keyExtractor={item => item.id}
                        ListEmptyComponent={() => <Text style={{fontSize: theme.size.body, textAlign: 'center'}}>No hay viajes previstos</Text>}
                        />
                    )}
                </View>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <FooterTabs />
            </View>
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    bold:{
        fontWeight: theme.weight.bold
    },
    title:{
        fontSize: theme.size.title,
        marginLeft: 16
    },
    subrayado: {
        width: 48,
        height: 4,
        backgroundColor: theme.color.verde,
        margin: 16, 
    },
    container:{
        flex: 11,
        contentContainerS: 'flex-start',
        paddingVertical: 25
    },
    cardContainer: {
        marginVertical: 10,
        flex: 1,
        flexBasis: '93%'
    },
    card:{
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 6,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowRadius: 3,
        shadowOpacity: 0.2,
        elevation: 3
    }
});