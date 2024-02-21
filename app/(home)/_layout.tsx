import { Tabs } from "expo-router";

import { Platform } from "react-native";

import Home from '@/assets/home.svg';
import History from '@/assets/history.svg'
import Profile from '@/assets/profile.svg'

import {  useTheme } from "native-base";

export default function LayoutHome(){
    const {sizes,colors,fonts} = useTheme();
    const iconsSizes = sizes[6];
    return(

        <Tabs initialRouteName="home.tsx" screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
                backgroundColor: colors.gray[500],
                height: Platform.OS === 'android'? 'auto': 96,
                paddingBottom: sizes[10],
                paddingTop: sizes[6],
                borderColor: 'transparent'
            },
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarIconStyle:{
                alignItems:'center',
                justifyContent: 'center',
            },
            headerStyle:{
                backgroundColor: colors.gray[600],
                height:120,
            },
            headerTitleStyle:{
                color: colors.gray[100],
                fontFamily: fonts.heading,
            },
            headerTitleAlign: 'center',
            headerBackgroundContainerStyle:{
                backgroundColor: 'black'
            },
            
          
        }}>
            <Tabs.Screen name="home" options={{
             tabBarIcon:({color})=><Home fill={color} width={iconsSizes} height={iconsSizes}/>,
             headerShown: false
            }}
            
            />
            <Tabs.Screen name="history" options={{
                 tabBarIcon:({color})=><History fill={color} width={iconsSizes} height={iconsSizes}/>,
                title: 'Histórico de exercicios'
            }}/>
            <Tabs.Screen name="profile" options={{
                 tabBarIcon:({color})=><Profile fill={color} width={iconsSizes} height={iconsSizes}/>,
                 title: 'Perfil'
            }}/>
            <Tabs.Screen name="exercicio" options={{
            tabBarButton: ()=>null,
            headerShown: false,
            }}/>
        </Tabs>

    )
}