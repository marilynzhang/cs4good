import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import MyButton from './components/MyButton';
import MyTextInput from './components/MyTextInput';
import MyTextOutput from './components/MyTextOutput';

// or any pure javascript modules available in npm
// import { Card } from 'react-native-elements'; // Version can be specified in package.json

//containerStyle={{width: Dimensions.get('screen').width}, {height: Dimensions.get('screen').height}}
// var { Dimensions } = require('react-native')

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textIn: 'Enter your query here.',
      processedText: 'Your output will appear here.',
    };
  }

  textI = textin => {
    this.setState({ textIn: textin });
  };

  entered = () => {
    this.setState({ processedText: this.state.textIn });
    //actually do the proccessing
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          CS + Social Good
        </Text>
        <Image source={require('./assets/Logo.png')} style={{flex:1, height: 100, width: 100}} resizeMode="contain" />
        <Text style={styles.small}>
          What would you like to know?
        </Text>
        <MyTextInput textInput={value => this.textI(value)} />
        <MyButton bool={() => this.entered()} />
        <MyTextOutput textOutput={this.state.processedText} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#EAFAF1',
  },
  small: {
    fontSize: 18,
    marginBottom: 20,
    color: '#21618C',
    fontFamily: 'Times New Roman',
  },
  heading: {
    fontSize: 32,
    margin: 20,
    color: '#21618C',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});
