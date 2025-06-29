import React from "react"
import { View} from "react-native-web"
import { Switch, Text } from 'react-native-paper';
import { ContainerConfig, ViewConfig, TextConfig } from "../../styles/style-geral";

export default function ConfigScreen(){

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [isSwitchOn2, setIsSwitchOn2] = React.useState(false);
    const [isSwitchOn3, setIsSwitchOn3] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);
    const onToggleSwitch3 = () => setIsSwitchOn3(!isSwitchOn3);
    return(

        <ContainerConfig>
            <ViewConfig>
                <TextConfig>Mostrar Notificações:</TextConfig>  
                <Switch color ="#E85316" value={isSwitchOn} onValueChange={onToggleSwitch} />
            </ViewConfig>
            <ViewConfig>
                <TextConfig>Mostrar Barra de Favoritos:</TextConfig>  
                <Switch color ="#E85316" value={isSwitchOn2} onValueChange={onToggleSwitch2} />
            </ViewConfig>
            <ViewConfig>
                <TextConfig>Manter usuário conectado:</TextConfig>  
                <Switch color ="#E85316" value={isSwitchOn3} onValueChange={onToggleSwitch3} />
            </ViewConfig>
        </ContainerConfig>
    )
}