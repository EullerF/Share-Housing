import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { BackHandler } from 'react-native';
import {useEffect} from 'react';

import List from './pages/List/index';
import Header from './components/Header/index';
import Contatar from './pages/Contatar/index';
import Login from './pages/Login/index';
import Perfil from './pages/Perfil/index';
import User from './pages/User/index';
import Preferencias from './pages/Preferencias/index';
import PreferenciasE from './pages/PreferenciasE/index';
import Cadastrar from './pages/Cadastrar/index';
import Options from './components/Options/index';
const Stack = createStackNavigator();


export default function Routes()
{
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);
  return(

    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {backgroundColor:'#313746'},

      }}
      initialRouteName='Login'

      >
        <Stack.Screen
          name = "Login"
          component={Login}
          options={{
            headerTransparent: true,
            headerShown: false,
            // eslint-disable-next-line react/display-name
          }}

       />
        <Stack.Screen
          name = "List"
          component={List}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerLeft: null,
            headerTitle: false,
            // eslint-disable-next-line react/display-name
          }}

       />
       <Stack.Screen
       name = "Contatar"
       component={Contatar}
       options={{
         headerTransparent: true,
         headerShown: true,
         headerTitle: false,
         headerTintColor:'#F92E6A',
         // eslint-disable-next-line react/display-name
       }}
       />
       <Stack.Screen
       name = "Perfil"
       component={Perfil}
       options={{
         headerTransparent: true,
         headerShown: true,
         headerTintColor:'#F92E6A',
         // eslint-disable-next-line react/display-name
         headerTitle: () => <Header />
       }}

       />
       <Stack.Screen
       name = "Preferencias"
       component={Preferencias}
       options={{
         headerTransparent: true,
         headerShown: false,
         // eslint-disable-next-line react/display-name
       }}
       />

      <Stack.Screen
       name = "User"
       component={User}
       options={{
        headerTransparent: true,
         headerShown: true,
         headerTitle: false,
         headerTintColor:'#F92E6A',
         // eslint-disable-next-line react/display-name
       }}
       />
      <Stack.Screen
       name = "PreferenciasE"
       component={PreferenciasE}
       options={{
         headerTransparent: true,
         headerShown: true,
         headerTitle: false,
         headerTintColor:'#F92E6A',
         // eslint-disable-next-line react/display-name
       }}
       />

        <Stack.Screen
       name = "Cadastrar"
       component={Cadastrar}
       options={{
        headerTransparent: true,
        headerShown: true,
        headerTitle: false,
        headerTintColor:'#F92E6A',
         // eslint-disable-next-line react/display-name
       }}
       />
       <Stack.Screen
       name = "Options"
       component={Options}
       />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
