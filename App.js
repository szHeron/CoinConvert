import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Home from './src/pages/Home/index'
import Colors from './src/styles/colors'

export default function App() {
  return(
    <SafeAreaView style={{flex:1}}>
      <LinearGradient
        style={{flex:1}}colors={[Colors.backgroundLinearTop,Colors.backgroundLinearBottom]}
      >
        <StatusBar hidden={true}/>
        <Home/>
      </LinearGradient>
    </SafeAreaView>
  );
}