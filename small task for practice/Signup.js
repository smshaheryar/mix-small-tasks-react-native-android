import React, { Component } from 'react';
import {Alert, Text, View,Button,AppRegistry,TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Signup extends Component{
  constructor(props) {
    super(props);
    this.state={
      fullname:'',
      lastname:''
    }
  }
  static navigationOptions = {
    title:'signup'
  }
  render(){
    return(
      <View>
      <TextInput
      //style={{height: 60}}
      placeholder="fullname"
      onChangeText={(fullname) => this.setState({fullname})}
      />
      <TextInput
placeholder="lastname"
onChangeText={(lastname) => this.setState({lastname})}

   />
      </View>

    );
  }
}
