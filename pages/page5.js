import React, { Component } from 'react';
import {Alert, Text, View,StyleSheet,AppRegistry,ScrollView,Button,TouchableOpacity, AsyncStorage} from 'react-native';
import getDirections from 'react-native-google-maps-directions'

export default class maps extends Component {

  handleGetDirections = () => {
    const data = {
       source: {
        latitude: 24.867037,
        longitude: 67.080953
      },
      destination: {
        latitude: 24.927354,
        longitude: 67.132280,
          zoom:500
      },
      params: [
        {
          key: "dirflg",
          value: "w"
        }
      ]
    }

    getDirections(data)
  }

  render() {
    return (
      <View >
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}
