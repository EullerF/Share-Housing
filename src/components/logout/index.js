import React  from 'react';
import { Text } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import{useNavigation} from '@react-navigation/native';
import firebase from '../../database/firebase';
import {
  Container,
  Button,
} from './styles';
import { log } from 'react-native-reanimated';

export default function Logout() {

  function logout() {

  firebase.auth().signOut().then(() => {
  navigation.navigate('Login')
  }).catch((error) => {
    // An error happened.
  });
}
  const navigation = useNavigation ();
  return(
    <Container>
      <Button onPress = {() => {logout()}}>
      <Text style={{color:"#FFFFFF"}}>SAIR </Text>
      <FeatherIcon name="corner-down-left" size={20} color="#F92E6A" />
      </Button>
    </Container>
  );
}
