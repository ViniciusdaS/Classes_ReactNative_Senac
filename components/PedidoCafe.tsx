import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';

export default function PedidoCafe(){
    // Estado: começa com um café
    const [cafes, setCafes] = useState(1)
    return(
        <View style={{ padding:20 }}>
            <Text style={{ fontSize:18 }}>Você pediu {cafes}</Text>
            {/* Botão para pedir mais café */}
            <Button title="Pedir mais um café" onPress={() => setCafes(cafes + 1)} />
        </View>
    )
}