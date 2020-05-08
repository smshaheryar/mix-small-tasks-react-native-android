import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, TextInput } from 'react-native';

export default class login extends Component {
  _onPressButton1() {
    Alert.alert('details acknowledged!')
  }
  _onPressButton2() {
    Alert.alert('you are required to enter the detatails')
  }

  render() {
    return (
      <View style={{padding: 50}}>
        <TextInput
          style={{height: 40}}
          placeholder="NAME"
          onChangeText={(text) => this.setState({text})}
        />
        <View style={styles.buttonContainer}>
        </View>
        
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton2}
            title="cancel"
          />
          <Button
            onPress={this._onPressButton1}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  buttonContainer: {
    margin: 5
  },
  alternativeLayoutButtonContainer: {
    margin: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
