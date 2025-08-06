import React from "react";
import {View, StyleSheet} from 'react-native'
import AnimeCard from "@/components/AnimeCard";


// importamos o componente criado

export default function App(){
  return(
    <View style={styles.container}>
      {/** Título da tela  */}
      <AnimeCard nome="Demon Slayer" classificacao="legal" />
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