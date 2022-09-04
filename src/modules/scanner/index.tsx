'use strict';

import React, { useEffect } from 'react';
import { Link } from '@react-navigation/native';

import { URL } from '../../api/url';
import { verifyClient } from '../../api'
// import axios from 'axios';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ToastAndroid as Toast,
  Platform,
  Alert,
  View,
  Image
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera, BarCodeReadEvent } from 'react-native-camera';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> { }



export const ScanScreen = ({ navigation }: Props) => {

  console.log("Navigacion", navigation);

  const onSuccess = (e: BarCodeReadEvent) => {
    const idCliente = e.data.split("/")[0];
    verifyClientQr(idCliente);
  };


  const verifyClientQr = async (id: string) => {
    try {
      const resp = await verifyClient.post(URL.verficarCliente, { id: id });
      console.log("Cliente",resp.data);


      if (resp.data.success) {
        // Navegar hacia la otra pagina y mandar los datos por el navigate
        navigation.navigate('/Home', { data: resp.data.data });

        Platform.OS === 'ios' ? Alert.alert("Leido correctamente") : Toast.show("Leido correctamente", Toast.SHORT)
      } else {
        Platform.OS === 'ios' ? Alert.alert("Leido Correctamente", resp.data.message) : Toast.show(resp.data.message, Toast.SHORT);
      }

    } catch (error) {
      console.log(error)
    }

  }

  // useEffect(() => {
  //   verifyClientQr("2022612900003M");
  // }, [])

  return (
    <QRCodeScanner
      cameraStyle={{ height: '80%', width: '100%' }}
      onRead={onSuccess}
      showMarker={true}
      bottomContent={
        <View style={{ height: '100%', width: '100%' }}>
          <Text style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 10,
            textAlign: 'center',
            marginTop: -110
          }}> Coloque el codigo Qr de su carnet, en el cuadro verde que muestra la camara</Text>

          <View style={{ height: '20%', width: '100%', alignContent: 'center', alignItems: 'center', marginTop: 10 }}>
            <Image
              style={{ height: 100, width: 100 }}
              source={require('../../assets/scannQr.gif')}
              resizeMode="contain"
            />
          </View>
        </View>
      }
      containerStyle={{ backgroundColor: '#3498DB' }}

    />
  );
}


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});