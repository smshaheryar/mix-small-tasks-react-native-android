import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View,Button,Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:'',
      password: ''
    }
  }

  static navigationOptions = {
    title:'homescreen'
  };

  onPressButton1(){
if (this.state.username =='Shaheryar') {
  if (this.state.password=='123'){
    this.props.navigation.navigate('Access', {});
  }
  else {
    Alert.alert('you entered the wrong password')

  }
}
  else {
    Alert.alert('you entered the wrong username')

  }
}
  onPressButton2(){
    this.props.navigation.navigate('Signup', {});
  }

  render() {
    return (
      <View style={{padding: 30}}>
      <TextInput
      style={{height: 60}}
      placeholder="username"
      onChangeText={(username) => this.setState({username})}
      />
      <TextInput
      style={{height: 60}}
      placeholder="password!"
      onChangeText={(password) => this.setState({password})}
      />
      <Text style={{padding: 20, fontSize: 42}}>
      </Text>
      <Button
      onPress={() => this.onPressButton1()}

      title="sign in"

      />
      <Button
      onPress={() => this.onPressButton2()}
      title="signup"


      />

      </View>


    );
  }

}
