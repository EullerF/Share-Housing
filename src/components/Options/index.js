import React  from 'react';
import { Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import{useNavigation} from '@react-navigation/native';
import {
  Container,
  Button,
} from './styles';
import {View, StyleSheet} from 'react-native';

export default function Options({route}) {

  const navigation = useNavigation ();
  return(
    <Container>
      <Button onPress = {() => {/*navigation.navigate('Perfil',route)*/console.log(route)}}>
      <FeatherIcon name="user" size={20} color="#F92E6A" />
      </Button>
    </Container>
  );
}
