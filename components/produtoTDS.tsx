import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; 

// Definição das propriedades do componente

type ProdutoProps = {
    nome: string
    lote: string
    validade: string
}

// Componente 
const Produto: React.FC<ProdutoProps> =({nome, lote, validade}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Nome: {nome}</Text>
            <Text style={styles.text}> Lote: {lote}</Text>
            <Text style={styles.text}> Validade: {validade}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:12,
        margin:10,
        backgroundColor:'whitesmoke',
        borderRadius:8
    },
    text:{
        fontSize:12,
        color:'black',
        marginBottom:4
    }
})

export default Produto; 