import React from 'react'; 
import {ScrollView, Text, StyleSheet} from 'react-native';

const Lista = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.item}>Fechar o vs_code caso um erro bizarro aconteça</Text>
            <Text style={styles.item}>Apagar a virgula do ts-config caso ocorra um erro ali sem precendentes</Text>
            <Text style={styles.item}>É mais simples e mais organizado criar um componente de cada vez</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        width:200,
        height:500,
        paddingTop:70
    },
    item:{
        paddingTop:20,
        color:'blue',
        fontSize:20
    },
    texto:{

    }
})

export default Lista; 