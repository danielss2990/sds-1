import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Home from './src/pages/Home';
export default function App() {
  return (
    <View>
      <Header />
      <Home />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: '#0B1F34',
  }
});



