import 'react-native-gesture-handler';
import {
  Container,
  PContainer,
  Person,
  Button,
  DadosContainer,
  Pinfo,
  PList,
  PPrice,
  PName,
  ButtonText,
  ContainerOpt,
  ButtonOpt,
} from './styles';
import React, { useRef } from 'react';
import{useNavigation} from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import firebase from '../../database/firebase';
import {routers} from '../navigationRouters'
import { limitToLast } from '@firebase/firestore';


export default function App({route}){


  const db = firebase.firestore()
  const [estudantes, setEstudantes] = useState([])
  const [user, setUser] = useState({
    nome:'',
    curso:'',
    idade:'',
    instituicao:'',
    sexo:'',
    email:'',

  })
  const iD = route.params.idUser;

  useEffect (() => {
    let mounted = true;
    db.collection("estudantes").onSnapshot((query) => {

      const list = [];
      query.forEach((doc) => {
        if(doc.id!=iD){
        list.push({ ...doc.data(), id: doc.id });
        }
        // eslint-disable-next-line no-empty
        else{
          user.nome=doc.data().nome;
          user.idade=doc.data().idade;
          user.instituicao=doc.data().instituicao;
          user.curso=doc.data().curso
          user.sexo=doc.data().sexo
          user.email=doc.data().email
        }
      });
      if(mounted){
      setEstudantes(null);
      setEstudantes(list);
      console.log(user);
      console.log(route)
      }
    });
    return () => mounted = false;
  }, []);

const navigation = useNavigation ();
  return (
<Container>
    <ContainerOpt>
    <ButtonOpt onPress = {() => {navigation.navigate('Perfil', {idUser:route.params.idUser, curso:user.curso, idade:user.idade, inst:user.instituicao, nome:user.nome,sexo:user.sexo,email:user.email});}}>
    <FeatherIcon name="user" size={22} color="#F92E6A" />
    </ButtonOpt>
    </ContainerOpt>
  <PContainer>
    <PList
    data={estudantes}
    keyExtractor={(item) => item.id}
    ListFooterComponent={<View/>}
    ListFooterComponentStyle={{
      height: 80,
    }}
    renderItem = {({item})=>(
      <Person onPress = {() => {navigation.navigate('Contatar', {idUser:route.params.idUser,idPessoa:item.id});}} >
        <PName>{item.nome}</PName>
        <DadosContainer>
        <Pinfo>Curso: {item.curso} </Pinfo>
        <Pinfo>Universidade: {item.instituicao}</Pinfo>
        <Pinfo>Idade: {item.idade}</Pinfo>
        <Pinfo>Sexo: {item.sexo}</Pinfo>
        </DadosContainer>
      </Person>
    )}
    />
  </PContainer>

</Container>

  );

}
