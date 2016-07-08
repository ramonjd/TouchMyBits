'use strict';
import React, { Component } from 'react';
import {
  AlertIOS,
  AppRegistry,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  NavigatorIOS,
  View,
  LinkingIOS,
  Linking
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
    this._onChangeText = this._onChangeText.bind(this);
    this._touchIDClickHandler = this._touchIDClickHandler.bind(this);
    this._handleDeepLink = this._handleDeepLink.bind(this);

  }


  componentDidMount() {
    Linking.addEventListener('url', this._handleDeepLink);
  }
  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleDeepLink);
  }
  _handleDeepLink(e) {
    const code = e.url.replace(/.*?:\/\//g, "");
    console.log(e);
    this.setState({
      code: code
    })
    AlertIOS.alert(`Deep link ${e.url} with code ${code}`);

  }

  _touchIDClickHandler() {
    const {code} = this.state
      if (!code) {
        AlertIOS.alert(`Enter a code you n00b`);
        return false;
      }
    TouchID.isSupported()
      .then(()=>{
        authenticate(code)
      })
      .catch(error => {
        passcodeAuth();
      });
  }

  _qRCodeClickHandler() {

  }

  _onChangeText(text){
    this.setState({
      code: text
    })
  }
  render() {
    const {code} = this.state
    return (
      <View style={styles.container}>

        <HeaderComponent />
        <InputCodeComponent defaultState={code} onChange={this._onChangeText}/>

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


}

function authenticate(code) {


  return TouchID.authenticate()
    .then(success => {

      authenticateCode(code)
      .then((response) => response.json())
      .then((responseJson) => {
        AlertIOS.alert(`Authenticated with code: ${code} with a success response of: ${responseJson.success}`);
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
