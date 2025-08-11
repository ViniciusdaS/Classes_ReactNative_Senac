import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Touchable} from 'react-native';
// Componente funcional ContadorBasico 

export default function ContadorBasico(): React.ReactElement{
    // Estado para armazenar o valor do contador 
    const [contador, setContador] = useState<number>(0)
    // Estado para controlar se o contador está ativo/rodando ou pausado
    const [ativo, setAtivo] = useState<boolean>(true)
    // useEffect para criar o intervalo que atualiza o contador a cada segundo
    useEffect(() => {
        // Se o contador não estiver ativo, não cria o timer
        if(!ativo) return
        // Cria um timer que incrementa o contador a cada 1000ms
        const timer = setInterval(() => {
            // Atualiza o estado do contador incrementando em 1
            setContador((c) => c + 1)
        }, 1000)
        // Função de limpeza que é executada quando o componente desmonta
        // ou quando o ativo muda, para evitar multiplos timers
        return() => clearInterval(timer)
    }, [ativo]) // O efeito depende do estado 'ativo'
    return(
        <View style={styles.container}>
            {/* Exibe o valor atual do contador */}
            <Text style={styles.contador}>{contador}</Text>
            {/* Container para os botões */}
            <View style={styles.botoes}>
                {/* Botão para pausar ou continuar o contador */}
                <TouchableOpacity style={[
                    styles.botao,
                    // A cor muda conforme o estado: verde se ativo, ou vermelho se pausado
                    {backgroundColor: ativo ? "green" : "red"}
                ]}
                // Ao clicar inverte o estado
                onPress={() => setAtivo((a) => !a)}>
                    {/* Texto do botão muda conforme o estado */}
                    <Text style={styles.textBotao}>{ativo ? "pausar" : "continuar"}</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:50,
        height:50
    },
    contador:{
        color:'red',
        fontSize:20
    },
    botoes:{
        width:40,
        height:20
    },
    botao:{

    },
    textBotao:{
        
    }
})