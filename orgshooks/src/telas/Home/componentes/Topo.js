import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { carregaTopo } from '../../../servicos/carregaDados';
import logo from '../../../assets/logo.png';

class Topo extends React.Component {
    state = {
        topo: {
            boasVindas: '',
            legenda: ''
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno })
    }

    componentDidMount() {
        this.atualizaTopo();
    }

    render() {
        return <View style={estilos.topo}>
            <Image source={logo} style={estilos.imagem} />
            <Text style={estilos.bosVindas}>{this.state.topo.boasVindas}</Text>
            <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
        </View>
    }
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: '#F6F6F6',
        padding: 16,
        elevation: 4
    },
    imagem: {
        width: 70,
        height: 28,
    },
    bosVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        color: '#464646',

    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: '#a3a3a3'
    }
});

export default Topo;