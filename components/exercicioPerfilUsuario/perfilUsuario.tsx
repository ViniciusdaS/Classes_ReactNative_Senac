import React from 'react'; 
import {View, Text, StyleSheet} from 'react-native';

type PerfilUsuario = {
    nome: string
    idade: number
    cidade: string
}

const Perfil: React.FC<PerfilUsuario> = ({nome, idade, cidade}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}> Nome: {nome}</Text>
            <Text style={styles.text}> Idade: {idade}</Text>
            <Text style={styles.text}> Cidade: {cidade}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'whitesmoke',
        width:200,
        height:200,
        borderRadius:10,
        paddingTop:60
    },
    text:{
        padding:5,
        textAlign:'center',
        color:'black',
        fontSize:15
    }
})

export default Perfil; 