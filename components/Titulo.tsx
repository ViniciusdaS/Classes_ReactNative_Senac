import React from 'react'; 
import {Text, StyleSheet} from 'react-native'; 

// Estilo aplicado ao titulo

const style = StyleSheet.create({
    texto:{
        fontFamily:'serif',
        fontSize:30,
        color: 'red',
        marginBottom: 20,
        textAlign: 'center' 
    }
})

// Este componente mostra o titulo na tela. 

export default function Titulo() {
    return(
        <Text style={style.texto}>Hey buddy, look up! 🦸‍♂️</Text>
    )
}

