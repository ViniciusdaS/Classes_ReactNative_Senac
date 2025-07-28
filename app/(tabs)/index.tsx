import React from "react";
import {View, StyleSheet} from 'react-native'
// importamos o componente criado
import TextoApresentation from "@/components/componentsEtapasPI/TextoApresentation";
import InputNome from "@/components/componentsEtapasPI/InputNome";
import TextoLista from "@/components/componentsEtapasPI/TextoLista";
import Lista from "@/components/componentsEtapasPI/Lista";

export default function App(){
  return(
    <View style={styles.container}>
      {/** Título da tela  */}
      <TextoApresentation />
      <InputNome />
      <TextoLista />
      <Lista />
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