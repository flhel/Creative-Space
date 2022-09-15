import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, TextInput } from 'react-native'
import SwitchButton from '../components/SwitchButton'

function InitialLogin1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <Image
        source={require('../assets/images/LogoStartTab1.png')}
        resizeMode="contain"
        style={styles.logo}
      ></Image>
      <Image
        source={require('../assets/images/BaumlinieStart1_1.png')}
        resizeMode="contain"
        style={styles.imageTop}
      ></Image>
      <View style={styles.group2}>
        <Text style={styles.infoTextMail}>
          Kurze Frage, wie ist {'\n'}deine Email Adresse?
        </Text>
        <TextInput
          placeholder=" E-Mail eingeben"
          placeholderTextColor="rgba(99,99,99,1)"
          inlineImagePadding={2}
          textBreakStrategy="simple"
          style={styles.emailInput}
        ></TextInput>
        <Text style={styles.infoTextSafety}>
          Die E-Mail brauchst du als Absicherung!{'\n'}Um deinen CreativePlace
          nicht zu {'\n'}verlieren!
        </Text>
      </View>
      <Image
        source={require('../assets/images/BaumlinieStart1_2.png')}
        resizeMode="contain"
        style={styles.imageMiddle}
      ></Image>
      <View style={styles.group}>
        <SwitchButton style={styles.SwitchButton}></SwitchButton>
        <Text style={styles.infoTextNews}>
          Wenn du möchtest können wir dir auch gerne Updates zuschicken, wenn du
          uns unterstützen möchtest würde uns das freuen!
        </Text>
      </View>
      <Image
        source={require('../assets/images/BaumlinieStart1_3.png')}
        resizeMode="contain"
        style={styles.imageBottom}
      ></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(255,177,0,1)',
    justifyContent: 'space-between',
  },
  rect: {
    height: 20,
    alignSelf: 'stretch',
  },
  logo: {
    width: '90%',
    height: 180,
    alignSelf: 'center',
  },
  imageTop: {
    width: '100%',
    height: '15%',
    alignSelf: 'center',
  },
  group2: {
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
  },
  infoTextMail: {
    fontFamily: 'roboto-700',
    color: '#121212',
    fontSize: 27,
    width: 276,
    height: 66,
    textAlign: 'center',
    alignSelf: 'center',
    margin: 5,
  },
  emailInput: {
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
  infoTextSafety: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 54,
    width: 267,
    textAlign: 'center',
    fontSize: 12,
    alignSelf: 'center',
    margin: 5,
  },
  imageMiddle: {
    width: '100%',
    height: '10%',
    alignSelf: 'center',
    padding: 0,
  },
  group: {
    alignSelf: 'center',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: '90%',
  },
  SwitchButton: {
    width: 91,
    height: 23
  },
  infoTextNews: {
    fontFamily: 'roboto-700',
    color: '#121212',
    height: 90,
    fontSize: 15,
    textAlign: 'left',
    letterSpacing: 2,
    alignSelf: 'center',
    flex: 1,
    padding: 0,
    margin: 10,
  },
  imageBottom: {
    width: '100%',
    height: '20%',
    alignSelf: 'center',
  },
})

export default InitialLogin1