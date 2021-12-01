import React from 'react';
import firebase from '../../database/firebase';
import styles from "./styles";
import{useNavigation} from '@react-navigation/native';
import { useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import { View, Text, TextInput, KeyboardAvoidingView,Platform, FlatList, TouchableOpacity } from 'react-native';
import {routers} from '../navigationRouters'
import { getAuth, updateEmail } from "firebase/auth";
import Logout from '../../components/logout/index';

export default function User ({route}) {

  const db = firebase.firestore();
  const iD = route.params.idUser;
  const [nome, setNome] = useState(route.params.nome);
  const navigation = useNavigation ();
  const [email, setEmail] = useState(route.params.email);
  const [senha, setSenha] = useState(false);
  const [password, setPassword] = useState('');
  const [errorLogin, setError] = useState({
    isVisible: false,
    message: '',
  })

  function edit(email) {
  const user = firebase.auth().currentUser;

  user.updateEmail(email).then(() => {
    console.log(email);
    db.collection("estudantes").doc(iD).update({
      email: email,
    })
    navigation.navigate('List')
  }).catch((error) => {
    console.log('Não foi');
    setError(true)
    let errorCode = error.code;
    let errorMessage = error.message;
  });
  }

function ResetSenha () {

  firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
    setSenha(true);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

function logout() {

  firebase.auth().signOut().then(() => {
  navigation.navigate('Login')
  }).catch((error) => {
    // An error happened.
  });
}
  return (
  <KeyboardAvoidingView
  behavior={Platform.OS=="ios" ? "padding" : "height"}
  style={styles.container1}>

      <View>
      <TextInput
      keyboardType = 'email-address'
      style={styles.input}
      value={email}
      onChangeText={(value) => setEmail(value)}
      />
      {errorLogin === true
      ?
      <View style={styles.contentAlert}>
      <Text> Alteração negada, talvez você precise fazer login novamente antes de alterar o e-mail </Text>
      <TouchableOpacity style={styles.buttonPrefer}
      onPress={()=>{
        logout()
      }}>
      <Text style={styles.textoPrefer}>Logout</Text>
      </TouchableOpacity>
      </View>
      :
      <View/>
      }
      <View>
      <TouchableOpacity style={styles.buttonPrefer}
      onPress={()=>{
        edit(email)
      }}>
      <Text style={styles.textoPrefer}>Editar</Text>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.buttonPrefer}
      onPress={()=>{
        ResetSenha()
      }}>
      <Text style={styles.textoPrefer}>Redefinir senha por e-mail</Text>
      </TouchableOpacity>
      </View>
      {senha === true
      ?
      <View style={styles.contentAlert}>
      <Text> E-mail enviado </Text>
      </View>
      :
      <View/>
      }
      </View>

 </KeyboardAvoidingView>
 );
}
