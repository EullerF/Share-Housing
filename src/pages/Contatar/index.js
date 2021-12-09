import React from 'react';
import firebase from '../../database/firebase';
import { Container } from './styles';
import { useState, useEffect } from 'react';
import styles from "./styles";
import FeatherIcon from 'react-native-vector-icons/Feather';
import { View, Text, TextInput, KeyboardAvoidingView,Platform, FlatList, TouchableOpacity,Linking } from 'react-native';

export default function Contatar ({route}) {
  const idUser = route.params.idUser;
  const iD = route.params.idPessoa;
  const db = firebase.firestore()
  const [estudantes, setEstudantes] = useState([])
  const [email, setEmail] = useState('')
  const [pessoa, setPessoa] = useState({
    nome:'',
    curso:'',
    idade:'',
    instituicao:'',
    sexo:'',
    email:'',
  })
  const [preferencias, setPrefer] = useState({
      alcool: false,
      animais: false,
      atv_domesticas: false,
      festas: false,
      media: '',
      num_moradores: 0,
  })

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
          pessoa.nome=doc.data().nome;
          pessoa.idade=doc.data().idade;
          pessoa.instituicao=doc.data().instituicao;
          pessoa.curso=doc.data().curso;
          pessoa.sexo=doc.data().sexo;
          pessoa.email=doc.data().email;
        }
      });
      if(mounted){
      setEstudantes(null);
      setEstudantes(list);
      console.log(pessoa);
      }
    });
    return () => mounted = false;
  }, []);


  useEffect (() => {
    let mounted = true;
    db.collection("preferencias").onSnapshot((query) => {

      const list = [];
      query.forEach((doc) => {
        if(doc.id!=iD){
        list.push({ ...doc.data(), id: doc.id });
        }
        // eslint-disable-next-line no-empty
        else{
        preferencias.alcool=doc.data().alcool;
        preferencias.animais=doc.data().animais;
        preferencias.atv_domesticas=doc.data().atv_domesticas;
        preferencias.festas=doc.data().festas;
        preferencias.media=doc.data().media;
        preferencias.num_moradores=doc.data().num_moradores;
        }

      });
      if(mounted){
      setEstudantes(null);
      console.log(preferencias);
      }
    });
    return () => mounted = false;
  }, []);

  return   <View style={styles.container1}>
            <Text style={styles.label}>{pessoa.nome} Pretende</Text>
            {preferencias.num_moradores===0
            ?
            <Text style={styles.dados}> {pessoa.nome} ainda não definiu suas preferencias </Text>
            :
            <View>
              <Text style={styles.dados}>
                Ter media mensal de gastos: {preferencias.media} reais
              </Text>
              <Text style={styles.dados}>
               Dividir a residência com {preferencias.num_moradores} pessoas.
              </Text>
              {preferencias.atv_domesticas===true
              ?
              <Text style={styles.dados}>Pagar pela realização de atividades domésticas</Text>
              :
              <Text style={styles.dados}>Realizar as atividades domésticas</Text>
              }
              {preferencias.animais===true
              ?
              <Text style={styles.dados}>Ter animais de estimação em casa</Text>
              :
              <Text style={styles.dados}></Text>
              }

            <TouchableOpacity style={styles.button}
            onPress={() => Linking.openURL('mailto:'+ pessoa.email)}>
              <Text style={styles.texto}>Enviar e-mail</Text>
              <FeatherIcon name="mail" size={25} color="#F92E6A" ></FeatherIcon>
            </TouchableOpacity>

            </View>
            }
          </View>




}
