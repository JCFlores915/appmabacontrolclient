import { StyleSheet, Text, View } from 'react-native'
import React, { ReactElement, useState, useEffect } from 'react'

import { Header, List } from '../../components';


import { URL } from '../../api/url';
import { verifyClient } from '../../api'

import { NativeStackScreenProps } from '@react-navigation/native-stack';

const data = [
  {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
      titleMes: 'First Item',
      monto:'$100',
      cancelado: '1', // 0 = pendiente de pagar, 1 = pagado, 2 = cancelado
  },
  {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
      titleMes: 'Second Item',
      monto:'$100',
      cancelado: '1', // 0 = pendiente de pagar, 1 = pagado, 2 = cancelado
  },
  {
      id: '58694a0f-3da1-471f-bd96-145571e29d723',
      titleMes: 'Third Item',
      monto:'$100',
      cancelado: '1', // 0 = pendiente de pagar, 1 = pagado, 2 = cancelado
  },
  {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
      titleMes: 'First Item',
      monto:'$100',
      cancelado: '2', // 0 = pendiente de pagar, 1 = pagado, 2 = cancelado
  },
  {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
      titleMes: 'Second Item',
      monto:'$100',
      cancelado: '0', // 0 = pendiente de pagar, 1 = pagado, 2 = cancelado
  },
  {
      id: '58694a0f-3da1-471f-bd96-145571e29d726',
      titleMes: 'Third Item',
      monto:'$100',
      cancelado: '0', // 0 = pendiente de pagar, 1 = pagado, 2 = cancelado
  },
];

interface Props extends NativeStackScreenProps<any, any> { }

export const Cuote = ({route, navigation}:Props) => {

  console.log("ID DEL COINTRATO", route);
  const idContrato = route?.params?.id;
  const [cuote, setCoute] = useState([])

  const listCuote = async (id: any) => {

    try {
      const resp = await verifyClient.post(URL.listCuote,{ id:id});
      setCoute(resp.data.data);
      console.log("CUOTAS",resp);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{

    if(idContrato){
      console.log(idContrato);
      listCuote(idContrato);
    }

  },[idContrato]);

  return (
    <View style={styles.container}>
      <Header navegation={navigation} />
      <View style={styles.container_body}>
        <View style={styles.container_body_title}>
          <Text style={styles.body_item_title}>
            {/* MENSUALIDADES PLAN DE AHORRO */}
            MENSUALIDADES
          </Text>
        </View>
        <View style={styles.container_body_ditails}>
        
          {/* Hacer tres circulos uno rojo, verde y blanco con texto al lado en una sola linea*/}
          <View style={styles.container_body_ditails_item}>
            <View style={styles.container_body_ditails_item_circle_success}>
            </View>
            <Text style={styles.body_item_names}>
                PAGADO
              </Text>
            <View style={styles.container_body_ditails_item_circle_danger}>
              
            </View>
            <Text style={styles.body_item_names}>
                VENCIDO
              </Text>
            <View style={styles.container_body_ditails_item_circle_info}>
              
            </View>
            <Text style={styles.body_item_names}>
                ESPERA
              </Text>
          </View>
          {/* Hacer tres titulos en una sola fila */}
          <View style={styles.container_body_ditails_item_title}>
              <Text style={styles.body_item_title}>
                Mensualidad
              </Text>
              <Text style={styles.body_item_title}>
                Subtotal
              </Text>
              <Text style={styles.body_item_title}>
                Estado
              </Text>
            </View>
        </View>
        <List data={cuote} />
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
  },
  body_item_title: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },
  container_body_ditails: {
    paddingHorizontal: 25,
    marginTop: 5,
    width: '100%'
  },
  container_body_ditails_item_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10
  },

  container_body_ditails_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
  container_body_ditails_item_circle_success: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#28B463',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container_body_ditails_item_circle_danger: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#E74C3C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container_body_ditails_item_circle_info: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body_item_names: {
    fontSize: 13,
    color: 'black',
    fontWeight: 'bold'
  }

})