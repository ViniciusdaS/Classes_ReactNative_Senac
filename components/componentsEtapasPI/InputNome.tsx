import React, { useState } from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

// Criando o componente

export default function InputNome(){
    const [nome, setNome] = useState('') 
    return(
        <View style={styles.container}>
            {/** Campo de entrada */}
            <TextInput 
            style={styles.input}
            placeholder="Digite seu nome"
            onChangeText={(texto) => setNome(texto)} //Atualiza o estado
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'whitesmoke',
        borderColor:'black'
    },
    label:{
        fontFamily:'serif',
        color:'black',
    },
    input:{
        fontFamily:'serif',
        color:'blue',
        padding:10
    },
    resultado:{
        fontFamily:'serif',
    }
})
