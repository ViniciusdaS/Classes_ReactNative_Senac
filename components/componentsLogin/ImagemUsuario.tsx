import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default function ImagemUsuario(){
    return(
        <View style={styles.container}>
            {/**Exibe uma imagem vinda da internet */}
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/4675/4675159.png'}}
            style={styles.imagem}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:20
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
