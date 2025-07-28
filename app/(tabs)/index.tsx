import React from "react";
import {View, StyleSheet} from 'react-native'
// importamos o componente criado
import ModalTDS241T from "@/components/ModalTDS241T";

export default function App(){
  return(
    <View style={styles.container}>
      {/** Título da tela  */}
      <ModalTDS241T />
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