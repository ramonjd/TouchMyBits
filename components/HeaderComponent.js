import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles/';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.headerView}>

              <Image source={require('../assets/sky-logo.png')} style={styles.logo}/>
                <Text style={styles.welcome}>
                  Authenticate your TouchyBits
                </Text>
      </View>

    );
  }
}

export default HeaderComponent
