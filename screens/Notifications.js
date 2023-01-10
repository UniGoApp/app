import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import SvgElement from '../components/SvgElement';
import SafeScreen from '../config/SafeArea';
import theme from '../config/theme';

const DATA = [
    {
        id: '1',
        date: 'Sábado, 06 sept',
        origin: 'Murcia',
        destination: 'Cartagena'
    },
    {
        id: '2',
        date: 'Domingo, 07 sept',
        origin: 'Cartagena',
        destination: 'Madrid'
    },
    {
        id: '6',
        date: 'Martes, 12 nov',
        origin: 'Cáceres',
        destination: 'Murcia'
    },
];

const Item = ({ item }) => (
    <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.date}</Text>
        <View style={styles.itemContent}>
            <Text style={styles.itemInfo}>{item.origin}</Text>
            <SvgElement name="right" />
            <Text style={styles.itemInfo}>{item.destination}</Text>
        </View>
    </View>
);

export default function Notifications({navigation}){
    const [refreshing, setRefreshing] = useState(false);
    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return(
        <SafeScreen>
            <View style={styles.container}>
                <Text>Ayuda a otros usuarios escribiendo una valoración sobre los viajes realizados.</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    refreshing = {refreshing}
                    onRefresh={()=>{
                        // search server with axios
                        // while asking server set refreshing to true
                        // update refreshing to false when new content received
                        setRefreshing(true);
                        setTimeout(() => setRefreshing(false), 1000);
                    }}
                />
            </View>
        </SafeScreen>
    );
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: theme.color.verde,
      padding: 12,
      marginVertical: 8,
      marginHorizontal: 8,
      borderRadius: 4,
    },
    itemTitle: {
      fontSize: 14,
      color: theme.color.azul,
    },
    itemContent: {
        padding: 12,
        paddingBottom: 6,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemInfo: {
        flex: 1,
        fontSize: 20,
        textAlign: 'center'
    }
});