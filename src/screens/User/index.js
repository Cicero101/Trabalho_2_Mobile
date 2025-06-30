import React from "react"
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ContainerUser, ViewMargin, ViewAvatar } from "../../styles/style-geral"
import { TextInput, Avatar } from 'react-native-paper';


export default function UserScreen(){

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

    return(
        <ContainerUser>
            <ViewAvatar>
                <Avatar.Image size={120} source={usuario?.foto}/>
            </ViewAvatar>
            <ViewMargin>
                <TextInput
                    disabled
                    mode="outlined"
                    label="Usuario"
                    value={usuario?.nome}
                />
            </ViewMargin>
            <ViewMargin>
                <TextInput
                    disabled
                    mode="outlined"
                    label="Email"
                    value={usuario?.email}
                />
            </ViewMargin>
            <ViewMargin>
                <TextInput
                    disabled
                    mode="outlined"
                    label="Data de Cadastro"
                    value={usuario?.dataCadastro}
                />
            </ViewMargin>
            
        </ContainerUser>
    )
}