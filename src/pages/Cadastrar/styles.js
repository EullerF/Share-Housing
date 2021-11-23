import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'


export const Container1 = styled.View`
  flex: 1;
  align-items: center;
  background: #333;
`;


const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'flex-start',
  marginHorizontal: 20,
  marginVertical: 15,

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
  fontSize: 15
 },
 descri:{
  color:"#F92E6A",
  padding:10,
  fontSize: 15
 },
 texto: {
  backgroundColor: '#4f5564' ,
  padding: 10,
  borderRadius: 20,
  color:"#F92E6A",
},
texto2: {
  backgroundColor: '#4f5564' ,
  padding: 10,
  borderRadius: 20,
  color:"#333",
},
 buttonNew:{
  backgroundColor: '#4f5564' ,
  padding: 5,
  borderRadius: 40,
  alignItems: 'center',
  marginHorizontal: 40,
  fontWeight: "bold",
  marginTop:20
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


});



export default styles
