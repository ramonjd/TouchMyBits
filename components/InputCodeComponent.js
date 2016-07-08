import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/';

class InputCodeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { placeholderText: 'e.g., 6HJJHKKK' };
  }

  render() {
    return (

      <View style={styles.inputCodeFieldView}>
      <Text style={styles.instructions}>
        Please enter your code
      </Text>
      <TextInput
        style={styles.inputCodeField}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        placeholder={this.state.placeholderText}
      />
      </View>

    );
  }
}

export default InputCodeComponent
