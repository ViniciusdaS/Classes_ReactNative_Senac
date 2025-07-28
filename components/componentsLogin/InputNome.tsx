import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

// Criando o componente

export default function InputNome(){
    const [nome, setNome] = useState('') 
    return(
        <View style={styles.container}>
            {/** Campo de entrada */}
            <TextInput 
            style={styles.input}
            placeholder="Nome"
            onChangeText={(texto) => setNome(texto)} //Atualiza o estado
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'whitesmoke',
        borderRadius:10,
        borderColor:'whitesmoke',
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
