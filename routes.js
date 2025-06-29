import 'react-native-gesture-handler';
import React from 'react';

import { CORES } from './src/constants/color';

//Importa as navegações
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


//Importa as páginas
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import ConfigScreen from './src/screens/Config';
import UserScreen from './src/screens/User';
import CatalogoScreen from './src/screens/Catalogo';
import RecuperarSenhaScreen from './src/screens/RecupSenha';
import NovidadesScreen from './src/screens/Novidades';
import CodSenhaScreen from './src/screens/CodSenha';
import NovaSenhaScreen from './src/screens/NovaSenha';

//Importa ícones para a Tab Bar
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

import AsyncStorage from "@react-native-async-storage/async-storage"
import usuarioService from './src/services/usuarioService';
import { Button, Avatar } from 'react-native-paper';


//Cria as const's das navegações
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



//Função para gerenciar as navegações
export default function Routers(){
    
    return(
        <NavigationContainer>
            <StackNaigate/>
        </NavigationContainer>
    )
}


//Controle da navegação em Stack
const StackNaigate = () =>{
    return (
    <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{
                headerShown : false,
            }}
        />
        <Stack.Screen 
            name="Home" 
            component={DrawerNaigate} 
            options={{
                headerShown : false,
            }}
        />
        <Stack.Screen
        options={{
            title: 'Recuperar Senha',
            headerTintColor:CORES.COR_SECUNDARIA,
        }}
        name="RecuperarSenha"
        component={RecuperarSenhaScreen}
        />
        <Stack.Screen
        options={{
            title: 'Recuperar Senha',
            headerTintColor:CORES.COR_SECUNDARIA,
        }}
        name="CodSenha"
        component={CodSenhaScreen}
        />
        <Stack.Screen
        options={{
            title: 'Recuperar Senha',
            headerTintColor:CORES.COR_SECUNDARIA,
        }}
        name="NovaSenha"
        component={NovaSenhaScreen}
        />
    </Stack.Navigator>
  );
}


//Controle da navegação em Tab
const TabNaigate = () =>{
    return(
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    headerShown : false,
                    tabBarActiveBackgroundColor: CORES.COR_SECUNDARIA,
                    tabBarInactiveBackgroundColor: CORES.COR_FUNDO,
                    tabBarActiveTintColor: CORES.COR_PRIMARIA,
                    tabBarInactiveTintColor: CORES.COR_SECUNDARIA,
                    tabBarIcon:() => <SimpleLineIcons name="home" size={24} color="black" />,
                }}
            />
            <Tab.Screen 
                name="Catalogo" 
                component={CatalogoScreen} 
                options={{
                    headerShown : false,
                    tabBarActiveBackgroundColor: CORES.COR_SECUNDARIA,
                    tabBarInactiveBackgroundColor: CORES.COR_FUNDO,
                    tabBarActiveTintColor: CORES.COR_PRIMARIA,
                    tabBarInactiveTintColor: CORES.COR_SECUNDARIA,
                    tabBarIcon:() => <SimpleLineIcons name="book-open" size={24} color="black" />,
                    
                }}
            />
            <Tab.Screen 
                name="Novidades" 
                component={NovidadesScreen} 
                options={{
                    headerShown : false,
                    tabBarActiveBackgroundColor: CORES.COR_SECUNDARIA,
                    tabBarInactiveBackgroundColor: CORES.COR_FUNDO,
                    tabBarActiveTintColor: CORES.COR_PRIMARIA,
                    tabBarInactiveTintColor: CORES.COR_SECUNDARIA,
                    tabBarIcon:() => <SimpleLineIcons name="envelope-letter" size={24} color="black" />,
                    tabBarBadge: 2,
                    tabBarBadgeStyle: {backgroundColor: 'red'},
                }}
            />
        </Tab.Navigator>
    )
}


//Controle da navegação em Drawer
const DrawerNaigate = () => {

    const logout = async () => {
        try {
            const response = await usuarioService.logout();

            if (response.status == 200) {
                console.log("Logout realizado com sucesso");
                await AsyncStorage.removeItem('usuario');
                await AsyncStorage.removeItem('token');
            }

            navigation.navigate("Login");
            } catch (error) {
                console.error("Erro ao realizar logout:", error);
            }
    }
    return(
        <Drawer.Navigator initialRouteName='Home'>
            
        <Drawer.Screen 
            name="Home" 
            component={TabNaigate} 
            options={{
                title: 'BookConnect',
                headerTintColor:CORES.COR_SECUNDARIA,
                drawerIcon: () =><SimpleLineIcons name="home" size={24} color="black" />,
                drawerActiveBackgroundColor: CORES.COR_SECUNDARIA,
                drawerInactiveBackgroundColor: CORES.COR_FUNDO,
                drawerActiveTintColor: CORES.COR_PRIMARIA,
                drawerInactiveTintColor: CORES.COR_SECUNDARIA,
                headerRight: () => (
                <Button textColor="#E85316" onPress={ logout }>Sair</Button>
                ),
            }}
        />
        <Drawer.Screen 
            name="Configurações" 
            component={ConfigScreen} 
            options={{
                headerTintColor:CORES.COR_SECUNDARIA,
                drawerIcon: () =><SimpleLineIcons name="equalizer" size={24} color="black" />,
                drawerActiveBackgroundColor: CORES.COR_SECUNDARIA,
                drawerInactiveBackgroundColor: CORES.COR_FUNDO,
                drawerActiveTintColor: CORES.COR_PRIMARIA,
                drawerInactiveTintColor: CORES.COR_SECUNDARIA,
                headerRight: () => (
                <Button textColor="#E85316" onPress={ logout }>Sair</Button>
                ),
            }}
        />
        <Drawer.Screen 
            name="Usuario" 
            component={UserScreen} 
            options={{
                headerTintColor:CORES.COR_SECUNDARIA,
                drawerIcon: () =><SimpleLineIcons name="user" size={24} color="black" />,
                drawerActiveBackgroundColor: CORES.COR_SECUNDARIA,
                drawerInactiveBackgroundColor: CORES.COR_FUNDO,
                drawerActiveTintColor: CORES.COR_PRIMARIA,
                drawerInactiveTintColor: CORES.COR_SECUNDARIA,
                headerRight: () => (
                <Button textColor="#E85316" onPress={ logout }>Sair</Button>
                ),
            }}
        />
        
    </Drawer.Navigator>
    )
}