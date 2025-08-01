/* 
 * Esse componente exibe um interruptor que pode ser ligado ou desligado
 * Utiliza um hook useState para controlar o estado (ligado/desligado)
 * E é importante em formulários ou situações em que o usuário precisa
   ativar ou desativar uma situação
*/

import React, {useState} from 'react'; 
// useState para gerenciar os estados do componente
import {Switch, View, Text} from 'react-native';

export default function SwitchTDS(){
    // Estado booleano que controla se o switch está ligado ou desligado, inicialmente false
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled(previous => !previous)
    return(
        <View style={{margin:10}}>
            <Text>Interruptor está { isEnabled ? 'ligado':'desligado' }</Text>
            {/* Texto que exibe o estado atual do switch */}
            <Switch value={isEnabled} onValueChange={toggleSwitch} />
        </View>
    )
}

