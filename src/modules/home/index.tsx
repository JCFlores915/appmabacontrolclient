import { Platform, Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { ReactElement } from 'react';

import { List, Header } from '../../components';

const data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        titleContrato: 'First Item',
        mesPendiente:'MAYO PEDIENTE',  
        estadoPendiente: true,
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
        titleContrato: 'Second Item',
        mesPendiente:'',
        estadoPendiente: false
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d723',
        titleContrato: 'Third Item',
        mesPendiente:'',
        estadoPendiente:false
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
        titleContrato: 'First Item',
        mesPendiente:'',
        estadoPendiente:false
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
        titleContrato: 'Second Item',
        mesPendiente:'',
        estadoPendiente:false
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d726',
        titleContrato: 'Third Item',
        mesPendiente:'',
        estadoPendiente:false
    },
];

export const Home: React.FC = (): ReactElement => {

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.container_body}>
                <View style={styles.container_body_title}>
                    <Text style={styles.body_item_title}>
                        DATOS DEL CLIENTE
                    </Text>
                </View>

                <View style={styles.container_body_ditails}>
                    <Text style={styles.body_item_names}>
                        Nombres: Juan Carlos
                    </Text>

                    <Text style={styles.body_item_surnames}>
                        Apellidos: Flores Gutierez
                    </Text>

                    <Text style={styles.body_item_date}>
                        Fecha: 01/01/2020
                    </Text>

                    <Text style={styles.body_item_id}>
                        Identificacion: 123456789
                    </Text>
                </View>

                <View style={styles.container_body_title_contract}>
                    <Text style={styles.body_item_title_contract}>
                        CONTRATOS
                    </Text>
                </View>

                <List data={data} />

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container_body: {
        alignItems: 'center',
        backgroundColor: '#3498DB',
        width: '100%',
        height: '100%',
        borderRadius: 50
    },
    container_body_title: {
        marginTop: 20,
        alignItems: 'center',
        width: '100%'
    },
    body_item_title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    container_body_ditails: {
        paddingHorizontal: 25,
        marginTop: 15,
        width: '100%'
    },
    body_item_names: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    body_item_surnames: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    body_item_date: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    body_item_id: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },
    container_body_title_contract: {
        marginTop: 20,
        alignItems: 'center',
        width: '100%'
    },
    body_item_title_contract: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },

})