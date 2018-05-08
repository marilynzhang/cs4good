import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
// import { Constants } from 'expo';


export default class MyTextOutput extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.props.textOutput}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    maxHeight: 200,
    marginBottom: 20,
    width: 300,
    height: 200
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
    color: '#21618C',
  },
});
