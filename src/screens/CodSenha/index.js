import React from "react"
import { View, Text } from "react-native-web"
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, ViewMargin, TextRecup } from "../../styles/style-geral";

export default function CodSenhaScreen(){

    const [cod, setCod] = useState("");

    const navigation = useNavigation();

    const recSenha3 = async () =>{
        if (cod === "") {
            alert("Preencha o código");
        return;
    }else{
        navigation.navigate("NovaSenha");
    }
    }

    return(
        <Container>
            <TextRecup>Informe o código de recuperação:</TextRecup>
            <ViewMargin>
                <TextInput
                    outlineColor="#E85316"
                    activeOutlineColor="#E85316"
                    mode="outlined"
                    placeholder="X-X-X-X-X-X"
                    label="Código"
                    value={cod}
                    onChangeText={text => setCod(text)}
                />
            </ViewMargin>
            <ViewMargin>
                <Button textColor="#fff" buttonColor="#E85316" compact mode="contained" onPress={recSenha3}>
                    Avançar
                </Button>
            </ViewMargin>

        </Container>
    )
}