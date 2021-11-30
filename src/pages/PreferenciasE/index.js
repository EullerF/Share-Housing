import React from 'react';

import firebase from '../../database/firebase';
import{useNavigation} from '@react-navigation/native';
import styles from './styles';
import { useState, useEffect } from 'react';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { View, Text, KeyboardAvoidingView,Platform, TouchableOpacity } from 'react-native';

export default function PrefenciasE ({route}) {
  const navigation = useNavigation ();
  const db = firebase.firestore();
  const iD = route.params.idUser;
  const nome = route.params.nome;


  const [alcool, setAlcool] = useState(route.params.alcool);
  const [animais, setAnimais] = useState(route.params.animais);
  const [atvDomesticas, setAtvD] = useState(route.params.atv_domesticas);
  const [festas, setFestas] = useState(route.params.festas);
  const [numMoradores, setNumM] = useState(route.params.num_moradores);
  const [media, setMedia] = useState(route.params.media);

  function edtPrefer(alcool,animais,atvD,festas,numM,media){
      db.collection('preferencias').doc(iD).update({
      alcool: alcool,
      animais: animais,
      atv_domesticas: atvD,
      festas: festas,
      media: media,
      num_moradores: numM,
      })
      navigation.navigate("List",{idUser:iD,contador:true});
      }

    return  <KeyboardAvoidingView
    behavior={Platform.OS=="ios" ? "padding" : "height"}
    style={styles.container}>
      <View>
      <Text style={styles.label}>Edite suas Prefencias</Text>
      <Text style={styles.textoR}>Deseja morar com quem consome alcool?</Text>
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

      <Text style={styles.textoR}>Deseja pagar pelas atividades domesticas?</Text>
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

      <Text style={styles.textoR}>Deseja morar com quem frequenta festas com frequencia?</Text>
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
      <Text style={styles.textoR}>Defina sua média de gastos</Text>
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

      <TouchableOpacity
      onPress={()=>{edtPrefer(alcool,animais,atvDomesticas,festas,numMoradores,media)}}
      style={styles.buttonNew}>
      <Text style={styles.texto}>Editar</Text>
      </TouchableOpacity>
      </View>

      </KeyboardAvoidingView>

}
