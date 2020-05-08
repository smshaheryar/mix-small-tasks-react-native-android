import React,{Component} from 'react';
import {AppRegistry,ScrollView,Image,Text} from 'react-native';

export default class scroll extends Component{
  render(){
    return(
      <ScrollView>
      <Text style={{fontSize:40}}>Scroll me plz</Text>
      <Image source={require('C:/Users/Shaheryar Nadeem/reactnativehelloworld/android/app/src/download.jpg')}/>

<Text style={{fontSize:40}}>thankyou</Text>
      </ScrollView>
    );
  }
};
