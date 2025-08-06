import React from "react";
import {View, StyleSheet} from 'react-native'
import PedidoCafe from "@/components/PedidoCafe";


// importamos o componente criado

export default function App(){
  return(
    <View style={styles.container}>
      {/** Título da tela  */}
      <PedidoCafe />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    padding: 24,
  }
})