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
                {/* Botão que ao ser pressionado altera o estado do modal, o tornando
                visível */}
                <Modal visible={visible} transparent animationType='slide'>
                    {/* Modal que aparece conforme o estado 'visible',
                    com fundo transparente e animação deslizante */}
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <View style={{backgroundColor: 'white', padding:20, borderRadius:10}}>
                            {/* Caixa branca com cantos arredondados e padding interno */}
                            <Text style={{marginBottom:10}}>Este é um modal!</Text>
                            <Button title="Fechar modal" onPress={() => setVisible(false)}/>
                        </View>
                    </View>
                </Modal>
            </View>
        )
}