import React from "react";
import {Text, StyleSheet} from 'react-native';
import ImageExample from '@/components/ImagemTDS241T'; 

// Definimos o tipo de propriedade que será recebido 
type Props = {
    texto: string
}
// Este componente recebe uma mensagem como texto e a exibe
export default function Mensagem({ texto}: Props){
    return(
        <Text style={styles.texto}>{texto} </Text>
    )
}
const styles = StyleSheet.create({
    texto: {
        fontSize:18,
        color: 'red',
        marginBottom: 20,
        textAlign: 'center'
    }
})