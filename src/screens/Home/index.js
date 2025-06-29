import React from "react"
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { TextHome, ContainerHome, ViewHome, ImageHome } from "../../styles/style-geral";
import { ScrollView } from 'react-native';
import { Avatar, Button, Card, Text } from 'react-native-paper';

export default function HomeScreen(){


    const [usuario, setUsuario] = useState(null);

    const obterUsuario = async () =>{
        try {
            const usuario = await AsyncStorage.getItem('usuario');
            if(usuario) {
                return JSON.parse(usuario);
            }
            return null;
        } catch (error) {
            console.error("Erro ao obter usuario:", error);
            return null;
        }
    }

    useEffect ( async () =>{
        let usuarioStorage = await obterUsuario();
        setUsuario(usuarioStorage);
        
    },[]);

    return (
        <ScrollView>
            <ContainerHome>
                <ViewHome>
                    <Card>
                        <Card.Content>
                            <ImageHome
                                source={{uri: 'https://classic.exame.com/wp-content/uploads/2019/08/gettyimages-1061868580.jpg'}}
                            />
                            <Text variant="titleLarge">Evento dia 12/07/2025</Text>
                            <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non justo sed tortor porta rhoncus. Proin sit amet turpis sit amet mi vestibulum porta at vitae ligula. Nam ipsum eros, cursus ac magna vel, pellentesque egestas arcu. Duis mauris diam, rutrum a urna a, ultrices scelerisque arcu. Aliquam gravida laoreet nibh sed consequat.</Text>
                        </Card.Content>
                    </Card>
                </ViewHome>
                <ViewHome>
                    <Card>
                        <Card.Content>
                            <ImageHome
                                source={{uri: 'https://www.voltologo.net/wp-content/uploads/2019/01/melhores-livrarias-em-sp.jpg'}}
                            />
                            <Text variant="titleLarge">Novos livros chegando a partir do mês que vem:</Text>
                            <Text variant="bodyMedium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non justo sed tortor porta rhoncus.</Text>
                        </Card.Content>
                    </Card>
                </ViewHome>
                <ViewHome>
                    <Card>
                        <Card.Content>
                            <ImageHome
                                source={{uri: 'https://pbs.twimg.com/profile_images/1468006883902558226/YV2Ablpr_400x400.jpg'}}
                            />
                            <Text variant="titleLarge">Promoção de férias!</Text>
                            <Text variant="bodyMedium">Nam ipsum eros, cursus ac magna vel, pellentesque egestas arcu. Duis mauris diam, rutrum a urna a, ultrices scelerisque arcu. Aliquam gravida laoreet nibh sed consequat. Nam consectetur tempor lectus, ut venenatis augue blandit eu. Ut vehicula ipsum vel eros fermentum feugiat vitae sit amet mauris.</Text>
                        </Card.Content>
                    </Card>
                </ViewHome>
            </ContainerHome>
        </ScrollView>
    );
}