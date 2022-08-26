'use strict';

import React from 'react';
import { Link } from '@react-navigation/native';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  ToastAndroid as Toast,
  Platform,
  Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera, BarCodeReadEvent } from 'react-native-camera';

export const  ScanScreen = (props:any) => {
    const onSuccess = (e:BarCodeReadEvent) => {
       Platform.OS === 'ios' ? Alert.alert("Alerta", e.data)  : Toast.show(e.data, Toast.SHORT);
    };    

    return (
      <QRCodeScanner
        cameraStyle={{ height: '80%', width: '100%' }}
        onRead={onSuccess}
        showMarker={true}
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Link to={{ screen: 'Cuote'}}>
               <Text style={styles.buttonText}>Ir a los planes!</Text>
            </Link>
          </TouchableOpacity>
        }
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