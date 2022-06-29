import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

// interface Props
interface Props {
  data: any[]
}



export const List = ({ data }: Props) => {


  const renderItem = ({ item }: any) => {

    return (
      <TouchableOpacity onPress={() => { }} style={styles.flatlist_item}>
        {item?.titleContrato ? <Text style={[styles.flatlist_item_title]}>{item.titleContrato}</Text> : <Text style={[styles.flatlist_item_title]}>{item.titleMes}</Text>}
        {/* PLAN */}
        {/* CUANDO SE PASA UN MES PENDIENTE SE MUESTRA EN EL TEXTO */}
        {item?.titleContrato ? <Text style={[styles.flatlist_item_alert]}>{item.mesPendiente}</Text> : null}
        {/* CUANDO SE PASA UN ESTADO PENDIENTE SE MUESTRA EN EL CIRCULO */}
        {item?.titleContrato ? <View style={ item?.estadoPendiente ? styles.flatlist_item_circle_danger : styles.flatlist_item_circle_success}></View> : null}

        {/* CUOTAS */}
        {/* CUANDO PASAMOS UN MONTO*/}
        {item?.titleMes && <Text style={ item?.cancelado === '0' ? [styles.flatlist_item_monto_white] :
         ( item?.cancelado === '1' ? [styles.flatlist_item_monto_green] : [styles.flatlist_item_monto_red]) }>{item.monto}</Text>}

        {/* CUANDO PASAMOS CANCELADO CIRCULO*/}
        {item?.titleMes && <View style={item?.cancelado === '0' ? [styles.flatlist_item_circle_white] :
         ( item?.cancelado === '1' ? [styles.flatlist_item_circle_success] : [styles.flatlist_item_circle_danger]) }></View>}

      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container_body_contract}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}


const styles = StyleSheet.create({

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
  flatlist_item_circle_success: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#28B463',
    marginRight: 15
  },
  flatlist_item_circle_danger: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E74C3C',
    marginRight: 15
  },
  flatlist_item_circle_white: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 15
  },
  flatlist_item_monto_white: {
    fontSize: 16,
    marginLeft: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  flatlist_item_monto_red: {
    fontSize: 16,
    marginLeft: 15,
    color: 'red',
    fontWeight: 'bold'
  },
  flatlist_item_monto_green: {
    fontSize: 16,
    marginLeft: 15,
    color: 'green',
    fontWeight: 'bold'
  }
})