import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
  View,
  VibrationIOS
} from 'react-native';
import styles from '../styles/';
import Camera from 'react-native-camera';

class CameraApp extends Component {
  constructor(props) {
    super(props);
  }

  _onBarCodeRead (result) {
    const { onSuccess } = this.props
    setTimeout(() => {
      VibrationIOS.vibrate();
      onSucess(result.data);
    }, 1000);
  }
  // <NavigatorIOS
  //   style={styles.container}
  //   initialRoute={{
  //     title: 'Index',
  //     backButtonTitle: 'Back',
  //     component: Index,
  //   }}
  // />
  render() {

    return (
      <View>
      <Camera onBarCodeRead={this._onBarCodeRead} style={styles.camera}>

      </Camera>
      </View>
    );
  }
}


export default CameraApp
