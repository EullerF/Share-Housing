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
  const [Rsenha, setRsenha] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLogin, setError] = useState({
    isVisible: false,
    message: '',
  })

  function limpaEstado() {
    setRsenha(false);
    setEmail('');
    setPassword('');
    setError(false);
  }

  function ResetSenha (email) {

    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      setRsenha(true);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }

  const loginFirebase = () =>{

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
      navigation.navigate("List", {idUser:user.uid,mail:user.email});
      limpaEstado();
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
        keyboardType = 'email-address'
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

      {email === ""
      ?
      <View>
      <TouchableOpacity disabled={true} style={styles.buttonPrefer}
      onPress={()=>{
        ResetSenha(email)
      }}>
      <Text style={styles.texto2}>Redefinir senha por e-mail</Text>
      </TouchableOpacity>
      </View>
      :
      <View>
      <TouchableOpacity style={styles.buttonPrefer}
      onPress={()=>{
        ResetSenha(email)
      }}>
      <Text style={styles.texto}>Redefinir senha por e-mail</Text>
      </TouchableOpacity>
      </View>
      }
      {Rsenha === true
      ?
      <View style={styles.contentAlert}>
      <Text> E-mail enviado </Text>
      </View>
      :
      <View/>
      }
      <TouchableOpacity style={styles.botao}>
        <Text
        style={styles.texto}
        onPress={()=>{navigation.navigate('Cadastrar'),limpaEstado()}}
        >Cadastrar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}




