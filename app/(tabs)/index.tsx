import React from "react";
import {View, StyleSheet, TextInput, Button} from 'react-native'
import AnimeCard from "@/components/AnimeCard";
import { useState } from 'react';
import { ScrollView } from "react-native-gesture-handler";


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
  return(
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="digite o nome do anime" value={novoAnime} onChangeText={setNovoAnime} />
      <Button title="Adicionar anime" onPress={adicionarAnime} />


      <ScrollView style={{width:'100%', marginTop:20}} />
      {animes.map((anime) => (
      <View key={anime.nome} classificacao={anime.classificacao}>
        <AnimeCard nome={anime.nome} classificacao={anime.classificacao} />
        <View style={styles.botoes}>
          <Button title="legal" onPress={() => avaliarAnime(anime.id, 'legal')}></Button>
        </View>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    height:'100%', 
  },
  input:{
    paddingTop:150,
  }
})