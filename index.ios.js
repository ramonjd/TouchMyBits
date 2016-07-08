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
import authenticateCode from './lib/authenticateCode'

class TouchMyBits extends Component {

  constructor(props) {
    super(props);
    this.state = { code: '' };
  }

  render() {
    return (
      <View style={styles.container}>

        <HeaderComponent />
        <InputCodeComponent onChange={this._onChangeText}/>

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

      if (!this.state.code) {
        AlertIOS.alert(`Enter a code you n00b`);
        return false;
      }
    TouchID.isSupported()
      .then(authenticate)
      .catch(error => {
        passcodeAuth();
      });
  }

  _qRCodeClickHandler() {

  }

  _onChangeText(text){
    this.setState((state) => {
      return {
        code: text
      };
    });
  }
}

function authenticate() {


  return TouchID.authenticate()
    .then(success => {

      authenticateCode(this.state.code)
      .then((response) => response.json())
      .then((responseJson) => {
        AlertIOS.alert(`Authenticated Successfully with code: ${this.state.code} with a success response of: ${responseJson.success}`);
        return responseJson.success;
      })
      .catch((error) => {
       console.error(error);
      });

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
