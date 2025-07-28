import React from 'react'; 
import {View, Text, StyleSheet, Image} from 'react-native'; 

// Começamos a construir nosso componente
export default function TextoLista(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>O que foi aprendido de React</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:20, 
    },
    texto:{
        fontSize: 24,
        color:'blue', 
        fontWeight:'bold'
    }
})