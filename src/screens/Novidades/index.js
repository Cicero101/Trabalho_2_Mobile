import React from "react"
import { ScrollView } from "react-native-web"
import { Card, Text } from "react-native-paper"
import { ViewHome, ContainerHome } from "../../styles/style-geral"


export default function NovidadesScreen(){
    return(
        <ScrollView>
            <ContainerHome>

                <ViewHome>
                    <Card>                           
                        <Card.Content>
                            <Text variant="titleLarge">Livro da lista de desejos chegou!</Text>
                            <Text variant="bodyMedium">Código Limpo, chegou na loja dia 20/06/2025</Text>
                        </Card.Content>
                    </Card>
                </ViewHome>

                <ViewHome>
                    <Card>                           
                        <Card.Content>
                            <Text variant="titleLarge">Livro da lista de desejos chegou!</Text>
                            <Text variant="bodyMedium">O Senhor dos Anéis, chegou na loja dia 12/06/2025</Text>
                        </Card.Content>
                    </Card>
                </ViewHome>

            </ContainerHome>
        </ScrollView>
    )
}