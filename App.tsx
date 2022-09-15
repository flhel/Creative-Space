import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InitialLogin1 from "./screens/InitialLogin1";
import InitialLogin2 from "./screens/InitialLogin2";
import * as Font from 'expo-font';
import AppLoading from "expo-app-loading"

const fetchFonts = () => {
  return Font.loadAsync({
  'roboto-700': require('./assets/fonts/roboto-700.ttf'),
  'roboto-regular': require('./assets/fonts/roboto-regular.ttf')
  });
};

export default function App() {
  const [dataLoaded, setdataLoaded] = useState(false);

  if(!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setdataLoaded(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <View style={styles.container}>
      <InitialLogin2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 