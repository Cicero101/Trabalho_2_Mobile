import React from "react"
import { Button, TextInput, Text } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { Container, ViewMargin, TextRecup} from "../../styles/style-geral";


export default function RecuperarSenhaScreen(){

    const [email, setEmail] = useState("");

    const navigation = useNavigation();

    const recSenha2 = async () =>{
        if (email === "") {
            alert("Preencha o e-mail");
        return;
    }else{
        navigation.navigate("CodSenha");
    }
    }

    

    return(
        <Container>
            <TextRecup>Insira o e-mail para enviar o código de recuperação:</TextRecup>
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
            <ViewMargin>
                <Button textColor="#fff" buttonColor="#E85316" compact mode="contained" onPress={recSenha2}>
                    Enviar o código
                </Button>
            </ViewMargin>
        </Container>
    )
}