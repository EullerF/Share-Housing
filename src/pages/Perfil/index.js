import React from 'react';
import firebase from '../../database/firebase';
import styles from "./styles";
import{useNavigation} from '@react-navigation/native';
import { useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, Text, TextInput, KeyboardAvoidingView,Platform, FlatList, TouchableOpacity } from 'react-native';
import {routers} from '../navigationRouters'


export default function Perfil ({route}) {

  const db = firebase.firestore();
  const [estudantes, setEstudante] = useState([]);
  const [nome, setNome] = useState(route.params.nome);
  const [curso, setCurso] = useState(route.params.curso);
  const [idade, setIdade] = useState(route.params.idade);
  const [instituicao, setinstituicao] = useState(route.params.inst);
  const [sexo, setSexo] = useState(route.params.sexo);
  const [email, setEmail] = useState(route.params.email);
  const navigation = useNavigation ();
  const [prefer, setPrefer] = useState([]);
  const iD = route.params.idUser;
  const [userP, setUserP] = useState({
      alcool: false,
      animais: false,
      atv_domesticas: false,
      festas: false,
      media: '',
      num_moradores: 2,
  })

  useEffect(() => {
    let mounted = true;
    db.collection("preferencias").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        if(doc.id==iD){
        list.push({ ...doc.data(), id: doc.id });
        userP.alcool=doc.data().alcool;
        userP.animais=doc.data().animais;
        userP.atv_domesticas=doc.data().atv_domesticas;
        userP.festas=doc.data().festas;
        userP.media=doc.data().media;
        userP.num_moradores=doc.data().num_moradores;
       }
      });
      if(mounted){
      setPrefer(list);
      }
    });
    return () => mounted = false;
  });


  function edit(nome,idade, curso, inst,sexo){
    db.collection("estudantes").doc(iD).update({
      nome: nome,
      idade: idade,
      curso: curso,
      instituicao: inst,
      sexo: sexo,
    })
    navigation.navigate("List",{idUser:iD});
  }


  return (
  <KeyboardAvoidingView
  behavior={Platform.OS=="ios" ? "padding" : "height"}
  style={styles.container1}>

      <View>
      <TextInput
      style={styles.input}
      value={nome}
      maxLength={18}
      onChangeText={(value) => setNome(value)}
      />
      <TextInput
      style={styles.input}
      value={idade}
      maxLength={2}
      keyboardType = 'number-pad'
      onChangeText={(value) => setIdade(value)}
      />
      <TextInput
      style={styles.input}
      value={curso}
      maxLength={25}
      onChangeText={(value) => setCurso(value)}
      />
      <View style={styles.containerPic}>
      <Text style={styles.descri}>Universidade</Text>
      <Picker
        selectedValue={instituicao}
        style={styles.picker}
        onValueChange={(itemValue) => setinstituicao(itemValue)}
      >
        <Picker.Item label="IFTM_UPT" value="IFTM_UPT" />
        <Picker.Item label="UFTM_CE" value="UFTM_CE" />
        <Picker.Item label="UFTM_ICTE" value="UFTM_ICTE" />
        <Picker.Item label="Uniube" value="Uniube" />
        <Picker.Item label="IFTM" value="IFTM" />
        <Picker.Item label="FACTHUS" value="FACTHUS" />
        <Picker.Item label="FAZU" value="FAZU" />
        <Picker.Item label="UNIPAC" value="UNIPAC" />
      </Picker>
      </View>

      <View style={styles.containerPic}>
      <Text style={styles.descri}>Sexo</Text>
        <Picker
        selectedValue={sexo}
        style={styles.picker}
        onValueChange={(itemValue) => setSexo(itemValue)}
        >
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Nao Binario" value="Nao Binario" />
      </Picker>
      </View>

      {nome === ""|| idade === "" || curso  === "" || instituicao  === "" || sexo  === ""
      ?
      <TouchableOpacity
      disabled={true}
      style={styles.buttonEdt}>
      <Text style={styles.texto2}>Editar</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity style={styles.buttonEdt}
      onPress={()=>{
        edit(nome,idade,curso,instituicao,sexo)
      }}>
      <Text style={styles.texto}>Editar</Text>
      </TouchableOpacity>
      }
      </View>
      <View>
      <TouchableOpacity style={styles.buttonUser}
      onPress = {() => {navigation.navigate('User', {idUser:route.params.idUser,email:email,nome:nome});}}>
      <Text style={styles.textoPrefer}>E-mail/Senha</Text>
      </TouchableOpacity>
      </View>
      {prefer.length === 0
      ?
      <View>
      <TouchableOpacity style={styles.buttonPrefer}
      onPress = {() => {navigation.navigate('Preferencias', {idUser:route.params.idUser,nome:nome});}}>
      <Text style={styles.textoPrefer}>Definir Prefencias</Text>
      </TouchableOpacity>
      </View>
      :
      <View>
      <TouchableOpacity style={styles.buttonPrefer}
      onPress = {() => {navigation.navigate('PreferenciasE', {idUser:route.params.idUser,nome:nome,alcool:userP.alcool,animais:userP.animais,atv_domesticas:userP.atv_domesticas,festas:userP.festas,media:userP.media,num_moradores:userP.num_moradores});}}>
      <Text style={styles.textoPrefer}>Prefencias</Text>
      </TouchableOpacity>
      </View>
      }

 </KeyboardAvoidingView>
 );
}
