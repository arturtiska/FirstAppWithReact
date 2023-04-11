import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Estrela from "./Estrela";



export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,

}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);



    // QUANTIDADE DE ESTRELAS E PREENCHIMENTO, VINDO DO ARQUIVO ESTRELA.
    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <Estrela
                    key={i}
                    onPress={() => setQuantidade(i + 1)}
                    desabilitada={!editavel}
                    preenchida={i < quantidade}
                    grande={grande} />
            );
        }

        return listaEstrelas;

    }

    // RENDEREIZANDO A LOGICA APLICADA A CIMA NA VIEW
    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>

}
const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: 'row'

    },
})