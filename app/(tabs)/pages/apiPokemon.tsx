import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

// Tipo que representa um item básico retornado pela primeira requisição API;
type PokemonItem ={
    name: string
    url: string
}

// Tipo para as informações completas de um pokemon
type PokemonDetalhes ={
    id: number
    name: string
    image: string
    types: string[] // Lista de tipos (Ex: Fogo, água);
    weight: number
}

// Componente principal
export default function Pokedex(){
    // Estado que guarda a lista de pokémon  detalhados
    const [pokemons, setPokemons] = useState<PokemonDetalhes[]>([])
    // useEffect executa quando o componente é montado (array vazio[])
    useEffect(() => {
        // Faz uma requisição para obter os primeiros 20 pokémons
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
        .then((res) => res.json())
        .then(async (data) => {
            // Para cada pokémon retornando, busca os detalhes individuais
            const detalhes = await Promise.all(
                data.results.map(async (poke: PokemonItem) => {
                    const res = await fetch(poke.url) // Busca os detalhes no link específico
                })
            )
        })
    })
}