import 'react-native-gesture-handler';
import{useNavigation} from '@react-navigation/native';
import {FeatherIcon} from 'react-native-vector-icons/Feather';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Platform, KeyboardAvoidingView, TouchableOpacity, TextInput, Text,Image} from 'react-native';
import firebase from '../../database/firebase';
import auth from '@react-native-firebase/auth';
import {routers} from '../navigationRouters'
import styles from "./styles";
import foto from '../../assets/foto.jpeg';


export default function User() {

  const navigation = useNavigation ();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setError] = useState({
    isVisible: false,
    message: '',
  })

  const loginFirebase = () =>{

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
      navigation.navigate("List", {idUser:user.uid,mail:user.email});
    // ...
  })
  .catch((error) => {
    setError(true)
    let errorCode = error.code;
    let errorMessage = error.message;
      // ..
    });
  }

  useEffect(()=>{

    firebase.auth().onAuthStateChanged(function (user) {

      if (user) {
        navigation.navigate('List', {idUser:user.uid,mail:user.email});
      }

    })

  },[]);

  return(
    <KeyboardAvoidingView
    behavior={Platform.OS=="ios" ? "padding" : "height"}
    style={styles.container}
    >
      <View style={styles.Containerfoto}>
       <Image source={foto} style={styles.foto}/>
      </View>
      <TextInput
        label="Email"
        placeholder= "Digite seu e-mail"
        type="text"
        value={email}
        style={styles.input}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        secureTextEntry={true}
        placeholder= "Digite sua senha"
        type="text"
        value={password}
        style={styles.input}
        onChangeText={(value) => setPassword(value)}
      />

      {errorLogin === true
      ?
      <View style={styles.contentAlert}>
      <Text> E-mail ou senha inválidos</Text>
      </View>
      :
      <View/>
      }

      {email === ""|| password === ""
      ?
      <TouchableOpacity
      disabled={true}
      style={styles.botao}>
      <Text style={styles.texto2}>Login</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity
      onPress={loginFirebase}
      style={styles.botao}>
      <Text style={styles.texto}>Login</Text>
      </TouchableOpacity>
      }

      <TouchableOpacity style={styles.botao}>
        <Text
        style={styles.texto}
        onPress={()=>{navigation.navigate('Cadastrar')}}
        >Cadastrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}




