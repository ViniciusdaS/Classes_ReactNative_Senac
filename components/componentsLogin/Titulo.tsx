import React from 'react'; 
import {View, Text, StyleSheet} from 'react-native'; 

// Começamos a construir nosso componente
export default function Texto(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Identificação</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20, 
    },
    texto:{
        fontSize: 24,
        color:'black', 
        fontWeight:'bold'
    }
})