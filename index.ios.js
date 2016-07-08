'use strict';
import React, { Component } from 'react';
import {
  AlertIOS,
  AppRegistry,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  NavigatorIOS,
  View
} from 'react-native';
import TouchID from 'react-native-touch-id';
import PasscodeAuth from 'react-native-passcode-auth';
import styles from './styles/';
import { errors } from './constants/'
import CameraApp from './components/CameraAppComponent'
import InputCodeComponent from './components/InputCodeComponent'
import HeaderComponent from './components/HeaderComponent'


class TouchMyBits extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <HeaderComponent />
        <InputCodeComponent />

        <TouchableHighlight
          style={styles.btn}
          onPress={this._touchIDClickHandler}
          underlayColor="#0380BE"
          activeOpacity={1}
        >
          <Text style={styles.btnText}>
            Authenticate with Touch ID
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  _touchIDClickHandler() {
    console.log(TouchID);
    TouchID.isSupported()
      .then(authenticate)
      .catch(error => {
        passcodeAuth();
      });
  }

  _qRCodeClickHandler() {

  }
}

function authenticate() {
  return TouchID.authenticate()
    .then(success => {
      AlertIOS.alert('Authenticated Successfully');
    })
    .catch(error => {
      console.log(error)
      AlertIOS.alert(error.message);
    });
}

function passcodeAuth() {
  return PasscodeAuth.isSupported()
    .then(() => {
      return PasscodeAuth.authenticate()
    })
    .then(success => {
      AlertIOS.alert('Authenticated Successfully');
    })
    .catch(error => {
      AlertIOS.alert(error.message);
    });
}

AppRegistry.registerComponent('TouchMyBits', () => TouchMyBits);



// <TouchableOpacity onPress={this._qRCodeClickHandler}>
//   <Text>Read QRCode</Text>
//   <CameraApp onSuccess={(data)=>{console.log(data)}} />
// </TouchableOpacity>
