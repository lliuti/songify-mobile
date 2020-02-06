import React from 'react';
import { StatusBar } from 'react-native';

import Header from './src/components/Header/index';
import Routes from './src/routes';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor='#f5f5f5' barStyle='dark-content'/>
    <Header/>
    <Routes/>
    </>
  );
}
