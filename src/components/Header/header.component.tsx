import { StyleSheet, Text, View, Image, Platform, TouchableOpacity } from 'react-native'
import React from 'react'

interface props {
    navegation: any
}

export const Header = ({navegation}:props) => {

    return (
        <>
            <View style={styles.container_header}>
                <TouchableOpacity onPress={()=>{
                    navegation.goBack();
                }}>
                    <Image
                        style={styles.header_icon}
                        source={require('../../assets/arrow-left.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.container_logo}>
                <Image
                    style={styles.logo}
                    source={require('../../assets/logoMabaControl.jpg')}
                    resizeMode="contain"
                />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
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
        height: 80,
        marginBottom: 20
    },
    logo: {
        width: 130,
        height: "100%"
    },
})