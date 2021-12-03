import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;

`;

export const PContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 52px;
  border-radius: 5px;


`;
export const PList = styled(FlatList).attrs({
  numColmns: 1,
})`
flex: 1;
padding: 15px 40px;
opacity: 0.6;
`;

export const ContainerOpt = styled.View`

  position: absolute;
  top: 5px;
  background: #333;
  right: 5px;
  padding: 5px 5px;
  border-radius: 50px;
  align-items: flex-end;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ButtonOpt = styled.TouchableOpacity`
flex: 1;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 20px 20px;
`;

export const Person = styled.TouchableOpacity`
flex:1;
margin: 8px;
background: #626878;
padding: 8px 4px;
border-radius: 25px;
`;

export const Pinfo = styled.Text`
color: #b9c0d2;
font-size: 14px;
margin-top: 4px;
font-weight: 400;
line-height: 20px;
letter-spacing: 1px;
text-align: center;
padding: 0px 0px 2px 5px;
`;

export const PName = styled.Text`
color: #f3f9ff;
font-size: 22px;
margin-top: 5px;
font-weight: 400;
line-height: 40px;
letter-spacing: 3.5px
text-align: center;
`;

export const DadosContainer = styled.View`
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
margin-top: auto;
padding: 2px;
`;

export const PercentContainer = styled.View`
flex-direction: row-reverse;
align-items: center;
justify-content: space-between;
margin-top: auto;
top: -20px;
padding: -10px 25px -10px;
`;
export const Percent = styled.Text`
color: #f3f9ff;
font-size: 14px;
font-weight: bold;
text-align: center;
`;

export const Loading = styled.Text`
color: #f3f9ff;
font-size: 20px;
font-weight: bold;
margin-top: 30px;
text-align: center;
`;

export const Loading2 = styled.Text`
color: #F92E6A;
font-size: 17px;
font-weight: bold;
margin-top: 100px;
text-align: center;
`;


export const Button = styled.TouchableOpacity`
background: #333;
border-radius: 50px;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 15px 15px;
`;

export const ButtonText = styled.Text`
color: #b9c0d2;
font-weight: 800;
padding: 5px 4px;
font-size: 12px;
text-transform: uppercase;

`;


const styles = StyleSheet.create({
  texto2: {
    backgroundColor: '#4f5564' ,
    padding: 3,
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
  containerAleta:
  {
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',
    width:'75%',

  },
});

export default styles
