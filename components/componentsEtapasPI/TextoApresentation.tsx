import React from 'react'; 
import {View, Text, StyleSheet, Image} from 'react-native'; 

// Começamos a construir nosso componente
export default function TextoApresentation(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Olá mundo! Bem-vindo á aula de React da professora Dalvana</Text>
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'}}
            style={styles.imagem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:10,
        alignItems:'center',
        padding:10 
    },
    texto:{
        fontSize: 24,
        color:'blue', 
        fontWeight:'bold'
    },
    imagem:{
        borderRadius:50,
        width:100,
        height:100
    }
})