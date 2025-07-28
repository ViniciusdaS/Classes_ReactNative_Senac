import React, { useState } from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

// Criando o componente

export default function InputPesquisa(){
    const [pesquisa, setPesquisa] = useState('') 
    return(
        <View style={styles.container}>
            {/** Campo de entrada */}
            <TextInput 
            style={styles.input}
            placeholder="Área de pesquisa"
            onChangeText={(texto) => setPesquisa(texto)} //Atualiza o estado
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
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
