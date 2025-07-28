import React from 'react';
import {View, Button, StyleSheet, Alert} from 'react-native'; 

export default function ButtonCadastrar(){
    // Função executada quando o botão for pressionado
    const aoClicar = () => {
        Alert.alert('Cadastrar')
    }
    return(
        <View style={styles.container}>
            <Button title="Cadastrar" onPress={aoClicar} color="red" />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:50
    }
})