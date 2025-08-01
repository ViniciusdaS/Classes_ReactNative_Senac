import React from "react";
import {View, StyleSheet} from 'react-native'
import SwitchTDS from "@/components/switchTDS";
// importamos o componente criado

export default function App(){
  return(
    <View style={styles.container}>
      {/** Título da tela  */}
      <SwitchTDS />
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