import React from 'react';

import { Container,Texto,PContainer, Campo ,Button,ButtonText, TituloTexto} from './styles';
import firebase from '../../database/firebase';
import{useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { useState, useEffect } from 'react';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { View, Text, TextInput, KeyboardAvoidingView,Platform, FlatList, TouchableOpacity } from 'react-native';

export default function Prefencias ({route}) {
  const navigation = useNavigation ();
  const db = firebase.firestore();
  const iD = route.params.idUser;
  const nome = route.params.nome;


  const [alcool, setAlcool] = React.useState(true);
  const [animais, setAnimais] = React.useState(true);
  const [atvDomesticas, setAtvD] = React.useState(true);
  const [festas, setFestas] = React.useState(true);
  const [numMoradores, setNumM] = useState(2);
  const [media, setMedia] = useState('');
  const [prefer, setPrefer] = useState([]);
  const [universidades, setUniversidades] = useState([])
  const [uni, setUni] = useState('')

  function addPrefer(){
      db.collection('preferencias').doc(iD).set({
      alcool: alcool,
      animais: animais,
      atv_domesticas: atvDomesticas,
      festas: festas,
      media: media,
      num_moradores: numMoradores,
      })
      navigation.navigate("List",{idUser:iD,contador:true});
      }


 useEffect(() => {
    let mounted = true;
    db.collection("preferencias").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        if(doc.id==iD){
        list.push({ ...doc.data(), id: doc.id });

       }
      });
      if(mounted){
      setPrefer(list);
      }
    });
    return () => mounted = false;
  });


    return  <KeyboardAvoidingView
    behavior={Platform.OS=="ios" ? "padding" : "height"}
    style={styles.container}>
      {prefer.length === 0
      ?
      <View>
      <Text style={styles.label}>Defina suas Prefencias</Text>
      <Text style={styles.textoR}>Deseja morar com quem consome álcool?</Text>
      <View style={styles.containerRadio}>
      <Text> Sim </Text>
        <RadioButton
        status={ alcool === true ? 'checked' : 'unchecked' }
        onPress={() => setAlcool(true)}
      />
      <Text> Não </Text>
      <RadioButton
        status={ alcool === false ? 'checked' : 'unchecked' }
        onPress={() => setAlcool(false)}
      />
      </View>

      <Text style={styles.textoR}>Deseja ter animais de estimação?</Text>
      <View style={styles.containerRadio}>
      <Text> Sim </Text>
        <RadioButton
        status={ animais === true ? 'checked' : 'unchecked' }
        onPress={() => setAnimais(true)}
      />
      <Text> Não </Text>
      <RadioButton
        status={ animais === false ? 'checked' : 'unchecked' }
        onPress={() => setAnimais(false)}
      />
      </View>

      <Text style={styles.textoR}>Deseja pagar pelas atividades domésticas?</Text>
      <View style={styles.containerRadio}>
      <Text> Sim </Text>
        <RadioButton
        status={ atvDomesticas === true ? 'checked' : 'unchecked' }
        onPress={() => setAtvD(true)}
      />
      <Text> Não </Text>
      <RadioButton
        status={ atvDomesticas === false ? 'checked' : 'unchecked' }
        onPress={() => setAtvD(false)}
      />
      </View>

      <Text style={styles.textoR}>Deseja morar com quem frequenta festas com frequência?</Text>
      <View style={styles.containerRadio}>
      <Text> Sim </Text>
        <RadioButton
        status={ festas === true ? 'checked' : 'unchecked' }
        onPress={() => setFestas(true)}
      />
      <Text> Não </Text>
      <RadioButton
        status={ festas === false ? 'checked' : 'unchecked' }
        onPress={() => setFestas(false)}
      />
      </View>
      <Text style={styles.textoR}>Defina sua média de gastos, em reais:</Text>
      <View style={styles.containerPic}>
        <Picker
        selectedValue={media}
        style={styles.picker}
        onValueChange={(itemValue) => setMedia(itemValue)}
        >
        <Picker.Item label="De 0 a 500" value="De 0 a 500" />
        <Picker.Item label="De 500 a 1000" value="De 500 a 1000" />
        <Picker.Item label="De 1000 a 1500" value="De 1000 a 1500" />
        <Picker.Item label="De 1500 a 2000" value="De 1500 a 2000" />
        <Picker.Item label="Acima de 2000" value="Acima de 2000" />
      </Picker>
      </View>

      <Text style={styles.textoR}>Qual número de moradores ideal ?</Text>
      <View style={styles.containerPic}>
        <Picker
        selectedValue={numMoradores}
        style={styles.picker}
        onValueChange={(itemValue) => setNumM(itemValue)}
        >
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
        <Picker.Item label="6 ou mais" value={6} />
      </Picker>
      </View>


      {media === ""
      ?
      <TouchableOpacity
      disabled={true}
      style={styles.buttonNew}>
      <Text style={styles.texto2}>Cadastrar</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity
      onPress={addPrefer}
      style={styles.buttonNew}>
      <Text style={styles.texto}>Cadastrar</Text>
      </TouchableOpacity>
      }

      </View>
      :
      <View><Text style={styles.label}>Estas são suas preferencias</Text></View>
      }
      </KeyboardAvoidingView>

}
