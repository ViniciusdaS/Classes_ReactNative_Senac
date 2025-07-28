import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function ImagemTDS241T(){
    return(
        <View style={styles.container}>
            {/**Exibe uma imagem vinda da internet */}
            <Image source={{uri:'https://www.nasa.gov/wp-content/uploads/2024/07/x25th-casa.jpg'}}
            style={styles.imagem}/>
            <Text style={styles.legenda}>Cassiopeia A</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        alignItems:'center',
    },
    imagem:{
        width:200,
        height:200,
        marginBottom:10,
    },
    legenda:{
        textAlign:'center',
        fontSize: 7,
        color:'red'
    }
})
