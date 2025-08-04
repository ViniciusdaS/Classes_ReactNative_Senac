import React from "react";
import {View, StyleSheet} from 'react-native'
import Perfil from "@/components/exercicioPerfilUsuario/perfilUsuario";


// importamos o componente criado

export default function App(){
  return(
    <View style={styles.container}>
      {/** Título da tela  */}
      <Perfil nome="Vinicius" idade={19} cidade="São Leopoldo" />
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