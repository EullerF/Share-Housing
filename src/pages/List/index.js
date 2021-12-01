import 'react-native-gesture-handler';
import {
  Container,
  PContainer,
  Person,
  PercentContainer,
  DadosContainer,
  Pinfo,
  Button,
  PList,
  Percent,
  PName,
  ContainerOpt,
  ButtonOpt,
} from './styles';
import styles from "./styles";
import React, { useRef } from 'react';
import{useNavigation} from '@react-navigation/native';
import { useState, useEffect } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import firebase from '../../database/firebase';
import {routers} from '../navigationRouters'
import { limitToLast } from '@firebase/firestore';
import { View, Text, TextInput, KeyboardAvoidingView,Platform, FlatList, TouchableOpacity,Linking } from 'react-native';


export default function App({route}){

  const db = firebase.firestore()
  const [estudantes, setEstudantes] = useState([])
  const [preferEstudantes, setpreferEstudantes] = useState([])
  const [preferCompativel, setpreferCompativel] = useState([])
  const [listaFiltrada, setListaFiltrada]= useState([])
  const [counter,setCounter] = useState(0);
  const [load,setLoad] = useState(true);
  const [primeiro,setPrimeiro] = useState(false);
  const [user, setUser] = useState({
    nome:'',
    curso:'',
    idade:'',
    instituicao:'',
    sexo:'',
    email:'',

  })
  const [prefer, setPrefer] = useState({
      alcool: false,
      animais:false ,
      atv_domesticas: false,
      festas: false,
      media: '',
      num_moradores: 1,

  })
  const iD = route.params.idUser;
//Pega todos os perfis de estudantes e separa o do User logado
  useEffect (() => {
    let mounted = true;
    const list = [];
    db.collection("estudantes").onSnapshot((query) => {
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

    });
    if(mounted){
      setEstudantes(null);
      setEstudantes(list);
      setPrimeiro(true);
    }
    navigation.addListener('focus', ()=>setLoad(!load))
    return () => mounted = false;
  },[load, navigation])

  useEffect(()=>{
         let mounted = true;
         const list = [];
        //Pega todas as preferencias dos estudantes e separa a preferencias do User logado
        db.collection("preferencias").onSnapshot((query) => {

          query.forEach((doc) => {
            if(doc.id!=iD){
            list.push({ ...doc.data(), id: doc.id });
            }
            // eslint-disable-next-line no-empty
            else{
              prefer.alcool=doc.data().alcool;
              prefer.animais=doc.data().animais;
              prefer.festas=doc.data().festas;
              prefer.atv_domesticas=doc.data().atv_domesticas;
              prefer.media=doc.data().media;
              prefer.num_moradores=doc.data().num_moradores;
            }
          });

        });
        if(mounted){
          console.log('Preferencias mudaram');
          const list4 = []
          setpreferEstudantes(list4);
          setpreferEstudantes(list);
          console.log(preferEstudantes);

          //Filtro de preferencias
          const list1 = [];
          if(prefer.media!=''){
          preferEstudantes.forEach((pf)=>{
          var percent = 0;
          if(pf.alcool == prefer.alcool)
          {
            percent=percent+20;
          }
          if(pf.festas==prefer.festas)
          {
            percent=percent+20;
          }
          if(pf.animais == prefer.animais)
          {
            percent=percent+20;
          }
          if(pf.atv_domesticas == prefer.atv_domesticas)
          {
            percent=percent+20;
          }
          if(pf.media == prefer.media)
          {
            percent=percent+20;
          }
          if(percent>=60)
          {

            list1.push({id:pf.id,percent:percent});
          }

        });
        const list2 = [];
        setpreferCompativel(list2);
        setpreferCompativel(list1);
        console.log('Compativel');
        console.log(preferCompativel);

        const ArrayFinal = [];
        preferCompativel.forEach((a)=>estudantes.forEach((b)=>
    {
      if(a.id==b.id)
      {
        ArrayFinal.push({id:b.id,nome:b.nome,curso:b.curso,idade:b.idade,instituicao:b.instituicao,email:b.email,sexo:b.sexo,percent:a.percent});
        //console.log(ArrayFinal);
      }
    }
    ));
    if(prefer.media!=''){
      const list3 = [];
      setListaFiltrada(list3);
      setListaFiltrada(ArrayFinal);
      console.log('Filtrada');
      console.log(listaFiltrada);
      setCounter(2);
      console.log('----');
      }
    }
        }
        return () => mounted = false;
  },[counter]);


setTimeout(()=>{
  console.log('Tempo')
  if(counter==0)
  {
    console.log('Chamou a função de filtro');
    setCounter(counter + 1);
  }
},1500)

useEffect(()=>{
setCounter(0);
navigation.addListener('focus', ()=>setLoad(!load))
},[load, navigation])

const navigation = useNavigation ();
  return (
<Container>
    <ContainerOpt>
    <ButtonOpt onPress = {() => {navigation.navigate('Perfil', {idUser:route.params.idUser, curso:user.curso, idade:user.idade, inst:user.instituicao, nome:user.nome,sexo:user.sexo,email:user.email});}}>
    <FeatherIcon name="user" size={22} color="#F92E6A" />
    </ButtonOpt>
    </ContainerOpt>
  <PContainer>
    {listaFiltrada.length===0
    ?
    <View>
    <Percent>Analisando perfis compativeis</Percent>
    {prefer.media==='' && prefer.num_moradores===1 && primeiro===true
    ?
    <Percent>Verifique suas preferencias</Percent>
    :
    <View/>
    }
    </View>
    :
    <PList
    data={listaFiltrada}
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
        <PercentContainer>
          <Button>
          <Percent>{item.percent}%</Percent>
          </Button>
        </PercentContainer>
      </Person>
    )}
    />
  }
  </PContainer>

</Container>

  );

}
