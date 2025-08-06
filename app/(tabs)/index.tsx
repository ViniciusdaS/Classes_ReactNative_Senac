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
    setNovoAnime('') // Limpa o campo após adicionar
  }
  // Função para atualizar a classificação de um anime especifico

const avaliarAnime = (id: number, novaClassificacao: string) => {
      setAnimes((prevAnimes) => 
      prevAnimes.map((anime) => 
      anime.id === id
      ? {...anime, novaClassificacao: novaClassificacao}
      :anime
    ))
  }
}
