/* Componente Modal
 * Exibe um botão que, ao ser pressionado, abre um modal deslizante
 com um texto e um botão para fechar.
 * Situações de uso: Apresentar informações, confirmações,
 formulários...
*/

import React, {useState} from 'react';
import {Modal, View, Button, Text} from 'react-native';

export default function ModalTDS241T(){
    /* Estado que controla se o modal está visivel ou não. Inicialmente 
    começamos com falso(fechado)*/

    const[visible, setVisible] = useState(false)
        return(
            <View style={{margin: 10}}>
                {/* Container com margem para o botão */}
                <Button title="Abrir modal" onPress={() => setVisible(true)} />
            </View>
        )
}