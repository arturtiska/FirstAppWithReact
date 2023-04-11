import React, { useEffect, useState } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import { carregaProdutores } from "../../../servicos/carregaDados";
import Produtor from './Produtor';
import useProdutores from '../../../hooks/useProdutores';


export default function Produtores({ topo: Topo }) {
    // UTILIZAÇÃO DO HOOKS CRIADO PARA FAZER O SERVIÇO ABAIXO
    const [titulo, lista] = useProdutores();

    // CONTROLE DE ESTADO DO PRODUTOS E SUA LISTA
    // const [titulo, setTitulo] = useState('');
    // const [lista, setLista] = useState([]);

    // useEffect(() => {
    //     const retorno = carregaProdutores();
    //     setTitulo(retorno.titulo);
    //     setLista(retorno.lista);
    // }, []);

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }


    return <FlatList
        data={lista}
        renderItem={({ item }) => <Produtor {...item} />}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={TopoLista} />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }

})