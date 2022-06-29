import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'

export const Header = () => {
    return (
        <>
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
        height: 80
    },
    logo: {
        width: 130,
        height: "100%"
    },
})