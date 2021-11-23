import 'react-native-gesture-handler';
import React from 'react';
import Routes from './routes';
import { StatusBar } from 'react-native';
import { BackHandler } from 'react-native';
const App = () => (

<>
  <StatusBar barStyle="light-content" backgroundColor="#312e38" />
  <Routes/>
</>

);
export default App;
