import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform, Image, ImageBackground } from 'react-native';
import backgroundScreen from './assets/background.jpg';

import Todos from './screens/todos';

export default function App() {
 
  const [count, setCount] = useState(0);
  const ViewAlert = () => {
    // Alert.alert(
    //   "Alert Title",
    //   "My Alert Msg",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //   ],
    //   { cancelable: true }
    // );

    Alert.prompt('FeedBack', 'Write Few lines of you experience', text => console.log(text))

  }

  return (
      // <ImageBackground style={styles.background} source={backgroundScreen} >
      //     <Image  style={styles.logo} source={require('./assets/logo-red.png')} />
      //     <Text style={styles.tagline}> Sell What you don't need! </Text>

      //     <View style={[styles.btn, styles.loginBg]}> 
      //       <Text style={styles.btnText}> Login </Text>
      //     </View>
      //     <View style={[styles.btn, styles.signupBg]}>
      //       <Text style={styles.btnText}>SignUp</Text>
      //     </View>
      // </ImageBackground>
      <Todos />
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  btnResult: {
    margin: 10 ,
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  btn:{
    width: "100%",
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBg: {
    backgroundColor: "#4ECDC4"
  },
  signupBg: {
    backgroundColor: "#fc5c65"
  },
  loginSection : {
    width: "100%"
  },
  btnText:{
    textAlign: "center",
    fontSize: 24
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 100
  },
  tagline: {
    position: "absolute",
    top: 220,
    color: '#0D0D0E'
  }
});
