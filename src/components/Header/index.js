import 'react-native-gesture-handler';
import { HContainer ,HText } from './styles';
import React from 'react';
import { Image, Text } from 'react-native';
import Options from '../../components/Options/index';
import Logout from '../../components/logout/index';
//import Logo from '../assets/logo.jpg';

const Header = () => {

return (
  <HContainer>
  <Logout/>
  </HContainer>
);

};
export default Header;
