import React from "react"
import { ScrollView } from "react-native-web"
import { Searchbar, Card, Text } from "react-native-paper"
import { ContainerHome, ViewHome, CardCat, ImageCat, CardCat2 } from "../../styles/style-geral"

export default function CatalogoScreen(){
    return(
        <ScrollView>
            <ContainerHome>

                <ViewHome>
                    <Searchbar iconColor="#E85316" placeholderTextColor="#E85316" elevation={3} placeholder="Pesquisar..."/>
                </ViewHome>

                <ViewHome>
                    <Card>                           
                        <Card.Content>
                            <CardCat>
                                <ImageCat
                                source={{uri: 'https://m.media-amazon.com/images/I/4138uiy6ghL._UF1000,1000_QL80_.jpg'}}
                                />
                            </CardCat>
                            <CardCat2>
                                <Text variant="titleLarge">Código Limpo</Text>
                                <Text variant="bodyMedium">Robert C. Martin</Text>
                            </CardCat2>
                        </Card.Content>
                    </Card>
                </ViewHome>

                <ViewHome>
                    <Card>                           
                        <Card.Content>
                            <CardCat>
                                <ImageCat
                                source={{uri: 'https://m.media-amazon.com/images/I/71ZLavBjpRL._UF1000,1000_QL80_.jpg'}}
                                />
                            </CardCat>
                            <CardCat2>
                                <Text variant="titleLarge">O Senhor dos Anéis</Text>
                                <Text variant="bodyMedium">Tolkien, J. R. R.</Text>
                            </CardCat2>
                        </Card.Content>
                    </Card>
                </ViewHome>

                <ViewHome>
                    <Card>                           
                        <Card.Content>
                            <CardCat>
                                <ImageCat
                                source={{uri: 'https://cdl-static.s3-sa-east-1.amazonaws.com/covers/gg/9788535928846/as-cidades-invisiveis.jpg'}}
                                />
                            </CardCat>
                            <CardCat2>
                                <Text variant="titleLarge">As cidades invisíveis</Text>
                                <Text variant="bodyMedium">Italo Calvino </Text>
                            </CardCat2>
                        </Card.Content>
                    </Card>
                </ViewHome>

                <ViewHome>
                    <Card>                           
                        <Card.Content>
                            <CardCat>
                                <ImageCat
                                source={{uri: 'https://m.media-amazon.com/images/I/61YNpOiCpbL._UF1000,1000_QL80_.jpg'}}
                                />
                            </CardCat>
                            <CardCat2>
                                <Text variant="titleLarge">Absolute Sandman</Text>
                                <Text variant="bodyMedium">Neil Gaiman</Text>
                            </CardCat2>
                        </Card.Content>
                    </Card>
                </ViewHome>

                <ViewHome>
                    <Card>                           
                        <Card.Content>
                            <CardCat>
                                <ImageCat
                                source={{uri: 'https://m.media-amazon.com/images/I/91HJU0OjHML._UF1000,1000_QL80_.jpg'}}
                                />
                            </CardCat>
                            <CardCat2>
                                <Text variant="titleLarge">O Aleph</Text>
                                <Text variant="bodyMedium">Jorge Luis Borges</Text>
                            </CardCat2>
                        </Card.Content>
                    </Card>
                </ViewHome>

                <ViewHome>
                    <Card>                           
                        <Card.Content>
                            <CardCat>
                                <ImageCat
                                source={{uri: 'https://m.media-amazon.com/images/I/712+LQxBDHL._UF1000,1000_QL80_.jpg'}}
                                />
                            </CardCat>
                            <CardCat2>
                                <Text variant="titleLarge">O Anti-Édipo</Text>
                                <Text variant="bodyMedium"> Deleuze, Guattari</Text>
                            </CardCat2>
                        </Card.Content>
                    </Card>
                </ViewHome>

                <ViewHome>
                    <Card>                           
                        <Card.Content>
                            <CardCat>
                                <ImageCat
                                source={{uri: 'https://m.media-amazon.com/images/I/916WkSH4cGL.jpg'}}
                                />
                            </CardCat>
                            <CardCat2>
                                <Text variant="titleLarge">Crime e Castigo</Text>
                                <Text variant="bodyMedium">Fiódor Dostoéviski</Text>
                            </CardCat2>
                        </Card.Content>
                    </Card>
                </ViewHome>

                <ViewHome>
                    <Card>                           
                        <Card.Content>
                            <CardCat>
                                <ImageCat
                                source={{uri: 'https://m.media-amazon.com/images/I/A1bYc7NWsPL.jpg'}}
                                />
                            </CardCat>
                            <CardCat2>
                                <Text variant="titleLarge">Retrato de Dorian Gray</Text>
                                <Text variant="bodyMedium">Oscar Wilde</Text>
                            </CardCat2>
                        </Card.Content>
                    </Card>
                </ViewHome>

            </ContainerHome>
        </ScrollView>
    )
}