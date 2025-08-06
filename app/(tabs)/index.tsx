import React from "react";
import {View, StyleSheet} from 'react-native'
import AnimeCard from "@/components/AnimeCard";
import { useState } from 'react';


// importamos o componente criado

export default function App(){
  return(
    <View style={styles.container}>
      {/** Título da tela  */}
      <AnimeCard nome="Demon Slayer" classificacao="legal" />
      <AnimeCard nome="Tokio Ghoul" classificacao="mediano"/>
      <AnimeCard nome="Boku no hero" classificacao="ruim"/>
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