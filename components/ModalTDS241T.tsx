/* Componente Modal
 * Exibe um botão que, ao ser pressionado, abre um modal deslizante
 com um texto e um botão para fechar.
 * Situações de uso: Apresentar informações, confirmações,
 formulários...
*/

import React, {useState} from 'react';
import {Modal, View, Button, Text, StyleSheet} from 'react-native';

export default function ModalTDS241T(){
    /* Estado que controla se o modal está visivel ou não. Inicialmente 
    começamos com falso(fechado)*/

    const[visible, setVisible] = useState(false)
        return(
            <View style={style.click}>
                {/* Container com margem para o botão */}
                <Button title="Open modal" onPress={() => setVisible(true)} />
                {/* Botão que ao ser pressionado altera o estado do modal, o tornando
                visível */}
                <Modal visible={visible} transparent animationType='slide'>
                    {/* Modal que aparece conforme o estado 'visible',
                    com fundo transparente e animação deslizante */}
                    <View>
                        <View style={style.close}>
                            {/* Caixa branca com cantos arredondados e padding interno */}
                            <Text>Opened modal</Text>
                            <Button title="Close modal" onPress={() => setVisible(false)}/>
                        </View>
                    </View>
                </Modal>
            </View>
        )
}

const style = StyleSheet.create({
    click:{
        margin:10,
    },
    botao:{
        backgroundColor:'green',
        width:300,
        height:200
    },
    close:{
        marginTop:50
    }
})