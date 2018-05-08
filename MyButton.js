import React, { Component } from 'react';
import {AppRegistry, Button, StyleSheet, View } from 'react-native';

export default class MyButton extends Component {
  constructor(props) {
    super(props);
     this.state = {
      screen1: true,
    };
  }
  
  clicked = () => {
    this.props.bool(true);
  };
  
  changeState = () => {
    this.setState(previousState => {return {screen1: !previousState.screen1}; });
  };
  
  pressed = () => {
    this.clicked();
    this.changeState();
  };
  

  render() {
    // console.log(this.state.screen1);
    //lodash.assign(this.state,
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
              onPress={() => this.pressed()}
              color='#21618C'
              title="Submit">
          </Button> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 10
  },
  // alternativeLayoutButtonContainer: {
  //   margin: 20,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between'
  // }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => MyButton);
