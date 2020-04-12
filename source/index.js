import React from 'react';
import { StatusBar } from 'react-native';
import Calculator from './components/Calculator';

const App = function() {
  return (
    <>
      <StatusBar barStyle={'default'} backgroundColor="teal" />

      <Calculator />
    </>
  );
};

export default App;
