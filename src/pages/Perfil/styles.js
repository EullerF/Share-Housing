import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native';



const styles = StyleSheet.create({
  container1: {
   flex: 1,
   justifyContent: 'flex-start',
   marginHorizontal: 20,
   marginVertical: 15,
   marginTop: 50,
  },
  picker:{
    marginTop: -15,
    height: 30,
    width: 200,
    color:"#000000"
  },
  containerPic:{
    alignItems:'flex-start',
    flexDirection:"column",
    justifyContent:'flex-start',
    marginLeft: 8,
  },
  descri:{
    color:"#F92E6A",
    padding:10,
    fontSize: 15
   },
  label:{
    textAlign: 'center',
    width:"90%",
    marginTop: 30,
    fontSize:16,
    marginLeft: 10,
    color:"#F92E6A",
  },
  input:{
   color:"#F92E6A",
   width:"90%",
   marginTop:8,
   padding:10,
   height:50,
   borderBottomWidth: 1,
   borderBottomColor:"#F92E6A",
   marginLeft:"auto",
   marginRight:"auto",
   fontSize: 16
  },
  texto: {
   backgroundColor: '#4f5564' ,
   borderRadius: 20,
   color:"#F92E6A",
 },
 texto2: {
   backgroundColor: '#4f5564' ,
   borderRadius: 20,
   color:"#333",
 },

textoPrefer: {
    backgroundColor: '#4f5564' ,
    padding: 10,
    borderRadius: 20,
    color:"#F92E6A",
 },

  buttonPrefer:{
   backgroundColor: '#4f5564' ,
   borderRadius: 40,
   alignItems: 'center',
   marginHorizontal: 40,
   fontWeight: "bold",
   marginTop: 50,
   margin: 20,
   flexDirection: "column-reverse",
  },
  iconButton:{
   color:"#ffffff",
   fontSize:16,
   fontWeight:"bold",
  },
  contentAlert:{
   marginTop:20,
   flexDirection:"row",
   justifyContent:"center",
   alignItems:"center",

 },
 list:{
  flex: 1,
  padding: 10,
 },

 buttonEdt:{
  backgroundColor: '#4f5564' ,
  padding: 20,
  borderRadius: 50,
  alignItems: 'center',
  marginHorizontal: 75,
  fontWeight: "bold",
  marginTop: 25,
 },

 });

 export default styles
