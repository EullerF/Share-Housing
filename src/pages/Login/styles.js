import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #333;
  align-items: center;
  `;


export const Button = styled.TouchableOpacity`
background: #4f5564;
padding: 8px;
border-radius: 40px;
margin-top: 10px;
align-items: center;
`;

export const LoginContainer = styled.View`
  flex-direction: column;
  margin-top: 400px;
  border-radius: 5px;
  `;


export const ButtonText = styled.Text`
color: #b9c0d2;
font-weight: 900;
padding: 2px;
font-size: 15px;
text-align: center;
text-transform: uppercase;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 15,

  },
  botao: {
  backgroundColor: '#4f5564' ,
  padding: 10,
  borderRadius: 40,
  alignItems: 'center',
  marginHorizontal: 40,
  fontWeight: "bold",
  marginTop:20
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
  foto:{
    width: 150,
    height: 150,
    borderRadius: 50,
    alignItems:'center',
    justifyContent:'center',
    alignContent:"center",
  },
  Containerfoto:{
    alignItems:'center',
    justifyContent:'center',
    alignContent:"center",
  },
  input:{
  color:"#F92E6A",
  width:300,
  marginTop:10,
  padding:10,
  height:50,
  borderBottomWidth: 1,
  borderBottomColor:"#F92E6A",
  marginLeft:"auto",
  marginRight:"auto",
  fontSize: 16,
  marginVertical: 10
  },
  contentAlert:{
    marginTop:20,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",

  }
});
export default styles
