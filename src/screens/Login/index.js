import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button, TextInput } from 'react-native-paper';
import usuarioService from "../../services/usuarioService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, Title, ViewMargin } from "../../styles/style-geral";


export default function LoginScreen(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const navigation = useNavigation();

    const salvarDados = async (token, usuario) =>{
    try {
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
    } catch (error) {
        console.error("Erro ao salvar dados", error);
    }  
    }

    const recSenha = async () =>{
        navigation.navigate("RecuperarSenha");
    }

    const logar = async () => {

    if (email === "" || senha === "") {
        alert("Preencha todos os campos");
        return;
    }

    try {
        const response = await usuarioService.login(email, senha);

        if (response.status === 200) {
            const {token, usuario} = response.data;
            await salvarDados(token, usuario);
            navigation.navigate("Home");
        }
    } catch (error) {
        alert("Erro ao realizar login");
    }
    }

    return (
        <Container>
            <Title>BookConnect</Title>
            <ViewMargin>
                <TextInput
                    outlineColor="#E85316"
                    activeOutlineColor="#E85316"
                    mode="outlined"
                    placeholder="exemplo@exemplo.com"
                    label="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </ViewMargin>
            
            <TextInput
                outlineColor="#E85316"
                activeOutlineColor="#E85316"
                mode="outlined"
                label="Senha"
                value={senha}
                onChangeText={text => setSenha(text)}
                secureTextEntry
            />

            <ViewMargin>
                <Button textColor="#fff" buttonColor="#E85316" mode="contained" onPress={logar}>
                    Entrar
                </Button>
            </ViewMargin>
            
            <Button textColor="#E85316" mode="text" onPress={recSenha}>
                Esqueci minha senha
            </Button>
            
        </Container>


    );
}