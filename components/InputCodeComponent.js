import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/';

class InputCodeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderText: 'e.g., 6HJJHKKK'
     };
     this._onChangeText = this._onChangeText.bind(this);

  }


    componentWillReceiveProps (nextProps) {
      if (nextProps.defaultState !== this.props.defaultState) {
        this.setState({
          text: nextProps.defaultState
        })
      }
    }


    _onChangeText(text){
      const { onChange } = this.props
      this.setState({
        text: text
      })
      onChange(text)
    }
  render() {
    return (

      <View style={styles.inputCodeFieldView}>
      <Text style={styles.instructions}>
        Please enter your code
      </Text>
      <TextInput
        autoFocus={true}
        style={styles.inputCodeField}
        onChangeText={this._onChangeText}
        value={this.state.text}
        placeholder={this.state.placeholderText}
      />
      </View>

    );
  }
}

export default InputCodeComponent
