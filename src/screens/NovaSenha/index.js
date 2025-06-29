import React from "react"
import { View, Text } from "react-native-web"
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, ViewMargin, TextRecup } from "../../styles/style-geral";


export default function NovaSenhaScreen(){


    const [senha, setSenha] = useState("");
    const [senha2, setSenha2] = useState("");
    const navigation = useNavigation();

    const recSenha4 = async () =>{
        if (senha === "" || senha2 === "") {
            alert("Preencha os campos");
        return;
    }else if( senha != senha2){
        alert("As senhas não conferem");
        return;
    }else{
        navigation.navigate("Login");
    }
    }


    return(
        <Container>
            <TextRecup>Preencha a nova senha:</TextRecup>
            <ViewMargin>
                <TextInput
                    outlineColor="#E85316"
                    activeOutlineColor="#E85316"
                    mode="outlined"
                    label="Nova Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={text => setSenha(text)}
                />
            </ViewMargin>
            <TextInput
                outlineColor="#E85316"
                activeOutlineColor="#E85316"
                mode="outlined"
                label="Confirme a Senha"
                secureTextEntry
                value={senha2}
                onChangeText={text => setSenha2(text)}
            />
            <ViewMargin>
                <Button textColor="#fff" buttonColor="#E85316" compact mode="contained" onPress={recSenha4}>
                    Mudar a senha
                </Button>
            </ViewMargin>
        </Container>
    )
}