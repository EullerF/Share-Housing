import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'


export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const PContainer = styled.ScrollView`
  flex-direction: column;
  margin-top: 40px;
  padding: 10px 60px;
  border-radius: 20px;
  background: #626878;
  `;

export const Person = styled.View`
 flex:1;
 margin: 8px;
 background: #626878;
 padding: 32px 12px;
 border-radius: 25px;
`;
  export const Campo = styled.Text`
  font-size: 15px;
  margin-top: 2px;
  letter-spacing: 3.5px
  text-align: left;
  border-radius: 10px;
  color: #333;
  `;
  export const Texto = styled.Text`
  font-size: 20px;
  margin-top: 3px;
  letter-spacing: 3.5px
  text-align: left;
  `;

  export const TituloTexto = styled.Text`
  font-size: 25px;
  margin-top: 5px;
  letter-spacing: 3.5px
  text-align: center;
  color: #FF0000;
  text-transform: uppercase;
  `;

  export const Button = styled.TouchableOpacity`
  background: #4f5564;
  padding: 4px 8px;
  border-radius: 50px;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  `;

export const ButtonText = styled.Text`
color: #b9c0d2;
font-weight: 800;
padding: 0 4px;
font-size: 15px;
text-transform: uppercase;
`;


const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'flex-start',
   marginHorizontal: 15,
   marginVertical: 10,
   backgroundColor:'#626878',
   borderRadius: 50,
   marginTop: 22,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  picker:{
    height: 50,
    width: 200
  },
  containerPic:{
    alignItems:'baseline',
    justifyContent:'flex-start',
    marginLeft: 8,
  },

  containerRadio:
  {
    flexDirection:'row',
    alignItems:'baseline',
    justifyContent:'flex-start',
    flexWrap: 'wrap',
    marginLeft: 20,
  },
  label:{
    textAlign: 'center',
    width:"90%",
    marginTop: 10,
    fontSize:18,
    marginLeft: 10,
    color:"#F92E6A",
    height:30,
  },
  input:{
   color:"#F92E6A",
   width:"90%",
   marginTop:8,
   padding:10,
   height:50,
   borderBottomWidth: 1,
   borderBottomColor:"#f3f9ff",
   marginLeft:"auto",
   marginRight:"auto",
   fontSize: 16
  },
  textoR:{
    color:"#f3f9ff",
    width:"90%",
    marginTop:6,
    marginLeft:20,
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
   marginTop:10
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

 }

 });

 export default styles
