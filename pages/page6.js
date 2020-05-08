import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, { Component } from 'react';
import { StyleSheet,View,Text,Image} from 'react-native';
import {StackNavigator} from 'react-navigation';

//multiple markars

 export default class page1 extends Component {
   constructor(props) {
  super(props);
  this.state = {

    latitude: 24.8670370,
    longitude:67.0809530,
    defaultLatitude: 24.8670370,
    defaultLongitude: 67.0809530,
    defaultLatitudeDelta:1,
    defaultLongitudeDelta: 1,
    markars: [
           	{
            latitude: 24.8670370,
            longitude:67.0809530,
            title:"anum empire",
            description:"here is my office",

            image : require('C:/Users/Shaheryar Nadeem/maps/src/assets/portapottylogo.png'),
            photo:require('C:/Users/Shaheryar Nadeem/maps/src/assets/office.png'),
         	},
        	{
            latitude: 24.9284230,
            longitude:67.1358250,
        	},
          {
            latitude: 24.7856442,
            longitude:67.2543625,
          },
          {
            latitude: 24.5856442,
            longitude:67.1358250,
          }
        ],
  };
}
static navigationOptions = { header: null };
  render() {
 const { markars } = this.state;

      return(

        <View style={styles.container}>
        <Text style={styles.text}>
        Multiple markars</Text>
          <MapView
            provider = {PROVIDER_GOOGLE}
            style = {styles.Mapcontainer}

            initialRegion= {{
              latitude: this.state.defaultLatitude,
              longitude: this.state.defaultLongitude,
              latitudeDelta: this.state.defaultLatitudeDelta,
              longitudeDelta: this.state.defaultLongitudeDelta,
            }}>
            <MapView.Marker  coordinate={markars[0]}
            title="anum empire"
            description="here is my office"
            >
            <View>
              <Image source={markars[0].image}/>
              <Text>{markars[0].title}</Text>
              </View>
              <MapView.Callout>
              <View>
              <Image source={markars[0].photo}/>
              <Text>{markars[0].title}</Text>
              <Text>{markars[0].description}</Text>
            </View>
            </MapView.Callout>
              </MapView.Marker>
            <MapView.Marker  coordinate={markars[1]}
            title="gulistane johar"
            description="home"
            />
            <MapView.Marker  coordinate={markars[2]}/>
            <MapView.Marker  coordinate={markars[3]}/>

          </MapView>
  </View>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'black'
  },
  text:{
    color:'white'
  },
  Mapcontainer:{
    //alignSelf: 'center',
    paddingTop: 10,

    margin: 10,
    height: 550,
    width: '100%'
  }
})
