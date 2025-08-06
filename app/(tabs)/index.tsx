import React from "react";
import {View, StyleSheet} from 'react-native'
import AnimeCard from "@/components/AnimeCard";
import { useState } from 'react';


// importamos o componente criado

type Anime = {
  id: number
  nome: string
  classificacao: string
}

export default function App(){
  const [animes, setAnimes] = useState<Anime[]>([])

  const [novoAnime, setNovoAnime] = useState<string>('')

  const adicionarAnime = () => {
    if(novoAnime.trim() === '') return

    setAnimes([
      ...animes,
      {id: Date.now(), nome: novoAnime, classificacao: 'legal'},
      
    ])
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 24,
  }
})