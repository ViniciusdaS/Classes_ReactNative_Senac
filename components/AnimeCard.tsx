import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Props
// Define o tio de props que o componente vai receber
type Props = {
    nome: string
    classificacao: string
}

const AnimeCard: React.FC<Props> = ({ nome, classificacao}) => {
    let corFundo = 'gray' // Cor inicial
    if(classificacao === 'legal'){
        corFundo = 'green'
    }else if(classificacao === 'intermediario'){
        corFundo = 'yellow'
    }else if(classificacao === 'ruim'){
        corFundo = 'red'
    }
    return(
        <View style={[styles.card, {backgroundColor: corFundo}]}>
            {/* Container do card com estilos fixos + cor de fundo dinâmica */}
            <Text style={styles.nomeAnime}>{nome}</Text>
            <Text style={styles.classificacao}>{classificacao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderColor:'whitesmoke',
        borderBottomWidth:3,
        borderRightWidth:3,
        borderLeftWidth:3,
        borderTopWidth:3,
        borderRadius:10,
        marginTop:30,
        width:200,
        height:100,
    },
    nomeAnime:{
        fontSize:25,
        paddingTop:10,
        textAlign:'center',
        color:'black'
    },
    classificacao:{
        fontSize:20,
        paddingTop:10,
        textAlign:'center'
    }
})

export default AnimeCard;