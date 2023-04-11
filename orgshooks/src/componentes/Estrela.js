import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import estrela from '../assets/estrela.png'
import estrelaCinza from '../assets/estrelaCinza.png'

export default function Estrela({
    onPress,
    desabilitada = true,
    preenchida,
    grande = false,
}) {
    const estilos = estiloFuncao(grande);

    const getImagem = () => {
        if (preenchida) {
            return estrela;
        }
        return estrelaCinza;
    }

    // CLICK ESTRELA, TIRANDO OU COLOCANDO COR NAS ESTRELAS
    return <TouchableOpacity
        onPress={onPress}
        disabled={desabilitada}>
        <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>

}

//FUÇÃO DE ESTILOS, PARA APLICAR LOGICA DE QUANDO É GRANDE OU PEQUENO
const estiloFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    }
});