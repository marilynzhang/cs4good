import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Constants } from 'expo';

export default class MyTextInput extends Component {

  onChangeText = (inValue) => {
    this.setState({ inputValue: inValue });
    this.props.textInput(inValue);
  };
  
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter your query here."
          value={this.state.inputValue}
          onChangeText={(value) => {this.onChangeText(value);} }
          style={{ width: 300, height: 100, padding: 8, borderWidth: 1, borderColor: '#ccc', color:'#21618C'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
  },
});
