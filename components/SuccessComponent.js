import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../styles/';

class SuccessComponent extends Component {
  constructor(props) {
    super(props);
    this.state ={
      successState:false,
      codeText:''
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.successState !== this.props.successState) {
      this.setState({
        successState: nextProps.successState,
        codeText: nextProps.codeText
      })
    }
  }

  render() {
    const {successState, codeText} = this.state
    return (
      <View style={styles.successView}>
          <Image source={require('../assets/nowtv-logo.png')} style={styles.logo}/>
                <Text style={styles.welcome}>
                  Success with {codeText}! Here is your banana
                </Text>
          <Image source={require('../assets/banana.png')} style={styles.banana}/>
      </View>

    );
  }
}

export default SuccessComponent
