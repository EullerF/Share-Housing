import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView,Platform, Text} from "react-native";
import {Picker} from '@react-native-picker/picker';
import firebase from '../../database/firebase';
import styles from "./styles";
import{useNavigation} from '@react-navigation/native';

export default function Cadastrar() {

  const db = firebase.firestore()
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [idade, setIdade] = useState('');
  const [instituicao, setinstituicao] = useState('IFTM_UPT');
  const [email, setEmail] = useState('');
  const [sexo, setSexo] = useState('Feminino');
  const [password, setPassword] = useState('');
  const navigation = useNavigation ();
  const [errorLogin, setError] = useState({
    isVisible: false,
    message: '',
  })

  function limpaEstado() {
    setNome('');
    setCurso('')
    setIdade('');
    setinstituicao('IFTM_UPT')
    setSexo('Feminino')
    setEmail('');
    setPassword('');
    setError(false);
  }

  //Adicionar estudante + Autenticação
  function addEstudante(){
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    //let user = userCredential.user;
    const uid = userCredential.user.uid;
    db.collection('estudantes').doc(uid).set({
    email:email,
    nome: nome,
    curso: curso,
    idade: idade,
    instituicao: instituicao,
    sexo: sexo,
    },navigation.navigate("List",{idUser:uid}))
    }).catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      errorLogin.isVisible(true);
      errorLogin.message(errorMessage);

        // ..
      });
  }
return(
    <KeyboardAvoidingView
    behavior={Platform.OS=="ios" ? "padding" : "height"}
    style={styles.container}>
      <Text style={styles.label}>Insira seus dados</Text>
      <TextInput
        label="Email"
        placeholderTextColor="#ffffff"
        placeholder= "Digite seu e-mail"
        type="text"
        keyboardType = 'email-address'
        value={email}
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        secureTextEntry={true}
        placeholderTextColor="#ffffff"
        placeholder= "Senha com mais 6 caracteres"
        type="text"
        value={password}
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
      />
      <TextInput
      style={styles.input}
      placeholderTextColor="#ffffff"
      placeholder="Nome e último sobrenome"
      onChangeText={setNome}
      value={nome}
      maxLength={22}
      />
      <TextInput
      placeholderTextColor="#ffffff"
      style={styles.input}
      maxLength={2}
      placeholder="Idade"
      keyboardType = 'number-pad'
      type="number"
      onChangeText={setIdade}
      value={idade}
      />
      <TextInput
      placeholderTextColor="#ffffff"
      style={styles.input}
      placeholder="Curso"
      onChangeText={setCurso}
      value={curso}
      maxLength={25}
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
        <Picker.Item label="UNIUBE" value="UNIUBE" />
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

      {errorLogin === true
      ?
      <View style={styles.contentAlert}>
      <Text> Dados inválidos {errorLogin.message}</Text>
      </View>
      :
      <View/>
      }

      {email === ""|| password === "" || nome === ""|| idade === "" || curso  === "" || instituicao  === "" || sexo  === ""
      ?
      <TouchableOpacity
      disabled={true}
      style={styles.buttonNew}>
      <Text style={styles.texto2}>Cadastrar</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity
      onPress={addEstudante}
      style={styles.buttonNew}>
      <Text style={styles.texto}>Cadastrar</Text>
      </TouchableOpacity>
      }

    </KeyboardAvoidingView>
  );
}
