import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

// Criando o componente

export default function TextInputTDS241T(){
    const [nome, setNome] = useState('') // Estado para armazenar o nome
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Digite seu nome:</Text>
            {/** Campo de entrada */}
            <TextInput 
            style={styles.input}
            placeholder="Digite um nome"
            onChangeText={(texto) => setNome(texto)} //Atualiza o estado
            />
            {/**Mostra o que foi digitado */}
            <Text style={styles.resultado}>Você digitou: {nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },
    label:{
        fontFamily:'serif',
        color:'red'
    },
    input:{
        fontFamily:'serif',
        color:'red'
    },
    resultado:{
        fontFamily:'serif',
        color:'red'
    }
})
