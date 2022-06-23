import { Platform, Text, StyleSheet, View, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { ReactElement } from 'react';

const data = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d723',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d726',
        title: 'Third Item',
    },
];

export const Home: React.FC = (): ReactElement => {

    const renderItem = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => {} } style={styles.flatlist_item}>
                <Text style={[styles.flatlist_item_title]}>{item.title}</Text>
                {/* <Text style={styles.flatlist_item_alert}>(MAYO PEDIENTE)</Text> */}
                {/* Dibujar un circulo */}
                <View style={styles.flatlist_item_circle}></View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.container_header}>
                <Image
                    style={styles.header_icon}
                    source={require('../../assets/arrow-left.png')}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.container_logo}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                />
            </View>
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

                <View style={styles.container_body_contract}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container_header: {
        marginTop: Platform.OS === 'ios' ? 40 : 5,
        backgroundColor: '#fff',
        width: '100%',
        height: 50
    },
    header_icon: {
        width: 20,
        height: "100%",
        marginLeft: 20
    },
    container_logo: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: 80
    },
    logo: {
        width: 130,
        height: "100%"
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
    container_body_contract: {
        paddingHorizontal: 10,
        marginTop: 15,
        width: '100%',
        height: '100%'
    },
    flatlist_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#34495E',
        padding: 15,
        marginVertical: 8,
        borderRadius: 50,
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    flatlist_item_title: {
        fontSize: 16,
        marginLeft: 15,
        color: 'white',
        fontWeight: 'bold'

    },
    flatlist_item_alert: {
        fontSize: 12,
        marginLeft: 35,
        color: 'red',
        fontWeight: 'bold'
    },
    flatlist_item_circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#28B463',
        marginRight: 15
    }
})