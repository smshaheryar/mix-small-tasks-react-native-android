import React, { Component } from 'react';
import {Alert, Text, View,Button,AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Access extends Component{
  constructor(props) {
      super(props)
  }

  static navigationOptions = {
    title:'access page'
  }
  onPressButton(){
    this.props.navigation.navigate('Signup', {});
  }

  render(){
    return(
      <View>
      <Text>login accessed successfully</Text>
      <Text style={{padding: 25, fontSize: 18}}>
      </Text>
      <Button
      onPress={()=>this.onPressButton()}
      title="sign up"
      />
      </View>


    );
  }
}
