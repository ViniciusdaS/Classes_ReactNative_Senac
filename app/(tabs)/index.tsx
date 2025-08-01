import React from "react";
import {View, StyleSheet} from 'react-native'
import Produto from "@/components/produtoTDS";


// importamos o componente criado

export default function App(){
  return(
    <View style={styles.container}>
      {/** Título da tela  */}
      <Produto nome="faca" lote="22" validade="10/09/2050" />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 24,
  }
})