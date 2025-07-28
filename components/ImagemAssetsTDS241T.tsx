import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
// Importando a imagem

import SenacImagem from '../assets/images/icon.png';

export default function ImagemAssetsTDS241T(){
    return(
        <View style={styles.container}>
            <Image source={SenacImagem} style={styles.imagem} />
            <Text style={styles.legenda}> Imagem local Senac</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    },
    imagem:{
        width:100,
        height:100,
        marginBottom:10
    },
    legenda:{
        fontSize:16,
        color:'red'
    }
})