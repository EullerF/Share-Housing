import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #333;
`;
const styles = StyleSheet.create({
  container1: {
   flex: 1,
   justifyContent: 'flex-start',
   marginHorizontal: 15,
   flexDirection:'column',
   alignItems:'flex-start',
   marginVertical: 12,
   marginTop: 25,
   backgroundColor:'#ffffff',
   borderRadius:50,
  },

  label:{
    textAlign: 'center',
    width:"90%",
    marginTop: 12,
    margin: 15,
    fontSize:18,
    marginLeft: 10,
    color:"#F92E6A",
  },
  dados:{
   textAlign: 'left',
   padding: 10,
   fontSize: 14,
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
 button:{
  backgroundColor: '#4f5564' ,
  padding: 15,
  borderRadius: 50,
  alignItems: 'center',
  marginHorizontal: 75,
  fontWeight: "bold",
  marginTop: 40,
  justifyContent:'center',
  alignContent:'center'
 },

 });

 export default styles
