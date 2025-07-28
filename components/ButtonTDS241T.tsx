import React from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native'; 

export default function ButtonTDS241T(){
    // Função executada quando o botão for pressionado
    const aoClicar = () => {
        Alert.alert('Você clicou aqui!')
    }
    return(
        <View style={styles.container}>
            <Button title="Clique aqui" onPress={aoClicar} color="red" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20
    }
})