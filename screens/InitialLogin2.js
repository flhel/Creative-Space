import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TextInput } from 'react-native'
import SwitchButton from '../components/SwitchButton'

function InitialLogin2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <Image
        source={require('../assets/images/LogoStartTab2.png')}
        resizeMode="contain"
        style={styles.logo}
      ></Image>
      <Image
        source={require('../assets/images/BaumlinieStart2_1.png')}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <View style={styles.group1}>
        <Text style={styles.wieIstDeinName}>Wie ist dein Name?</Text>
        <TextInput
          placeholder="Vorname"
          placeholderTextColor="rgba(99,99,99,1)"
          inlineImagePadding={2}
          textBreakStrategy="simple"
          style={styles.nameInput1}
        ></TextInput>
        <View style={styles.group2}>
        <SwitchButton style={styles.SwitchButton}></SwitchButton>
        <Text style={styles.nameAnzeigen}>
          Persönlichen Name im Profil Anzeigen.
        </Text>
      </View>
      </View>
      <Text style={styles.infoTextName1}>
        Du kannst deinen Namen jederzeit wechseln! Dieser wird in Konversationen angezeigt!
      </Text>
      <Text style={styles.infoTextName2}>
        Den Persönlichen Namen eines Künstlers zu {'\n'} 
        Kennen ist ein wahres Privileg, manchmal ist es {'\n'} 
        aber wichtig verdeckt zu Arbeiten...
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: 'rgba(232,167,167,1)',
    justifyContent: 'space-between',
  },
  rect: {
    height: 20,
    alignSelf: 'stretch',
  },
  logo: {
    width: "90%",
    height: 100,
    alignSelf: 'center',
  },
  image1: {
    width: "100%",
    height: 110,
    alignSelf: 'center',
  },
  group1: {
    width: "100%",
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  wieIstDeinName: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 27,
    textAlign: 'center',
    alignSelf: 'center',
    margin: 10,
  },
  nameInput1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(0,0,0,1)',
    textAlign: 'left',
    width: 272,
    height: 36,
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'rgba(122,122,122,1)',
    borderStyle: 'solid',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.06,
    shadowRadius: 0,
    backgroundColor: 'rgba(230, 230, 230,1)',
    alignSelf: 'center',
    margin: 5,
    padding: 5,
  },
  group2: {
    width: "80%",
    flexDirection: 'row',
    height: 61,
    alignItems: 'center',
    alignSelf: 'center',
  },
  SwitchButton: {
    width: 91,
    height: 23,
  },
  nameAnzeigen: {
    fontFamily: 'roboto-700',
    color: '#121212',
    alignSelf: 'center',
    fontSize: 15,
    width: 187,
    height: 37,
  },
  infoTextName1: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 69,
    width: 267,
    textAlign: 'center',
    fontSize: 12,
    alignSelf: 'center',
    margin: 5,
  },
  infoTextName2: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 69,
    width: 267,
    textAlign: 'center',
    fontSize: 12,
    alignSelf: 'center',
    margin: 5,
  },
})

export default InitialLogin2
