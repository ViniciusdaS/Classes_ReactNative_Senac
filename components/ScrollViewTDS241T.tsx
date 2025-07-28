import React from 'react'; 
import {ScrollView, Text, StyleSheet} from 'react-native';

const ScrollViewTDS241T = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.texto}>item 1</Text>
            <Text style={styles.texto}>item 2</Text>
            <Text style={styles.texto}>item 3</Text>
            <Text style={styles.texto}>item 4</Text>
            <Text style={styles.texto}>item 5</Text>
            <Text style={styles.texto}>item 6</Text>
            <Text style={styles.texto}>item 7</Text>
            <Text style={styles.texto}>item 8</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:70
    },
    texto:{
        color:'red',
        fontSize:30
    }
})

export default ScrollViewTDS241T; 