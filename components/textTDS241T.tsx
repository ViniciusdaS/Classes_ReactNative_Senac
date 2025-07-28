import React from 'react'; 
import {View, Text, StyleSheet} from 'react-native'; 

// Começamos a construir nosso componente
export default function TextTDS241T(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Olá turma 241T 😁</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20, 
    },
    texto:{
        fontFamily:'serif',
        fontSize: 24,
        color:'red', 
        fontWeight:'bold'
    }
})