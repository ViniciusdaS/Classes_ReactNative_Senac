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
        marginTop:100,
        backgroundColor:'black',
        width:200,
        height:200,
        borderBottomWidth:3,
        borderTopWidth:3,
        borderLeftWidth:3,
        borderRightWidth:3,
        borderColor:'blue',
        borderRadius:10,
        paddingTop:50
    },
    text:{
        padding:5,
        textAlign:'center',
        color:'blue',
        fontSize:15
    }
})

export default Perfil; 