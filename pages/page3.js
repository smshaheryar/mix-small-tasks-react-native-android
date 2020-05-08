import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, { Component } from 'react';
import { StyleSheet,View,Text} from 'react-native';
//Polyline

 export default class page3 extends Component {
   constructor(props) {
  super(props);
  this.state = {

    latitude: 24.8670370,
    longitude:67.0809530,
    defaultLatitude: 24.867037,
    defaultLongitude: 67.0809530,
    defaultLatitudeDelta: 1,
    defaultLongitudeDelta: 1,
      zoom:500,
polygon: [
       	{
        latitude: 24.8670370,
        longitude:67.0809530,
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
        latitude: 24.7856442,
        longitude:67.3543625,
      },
      {
        latitude: 24.6856442,
        longitude:67.2543625,
      },
    ],


};

}
  render() {
     const { polygon } = this.state;
      return(
        <View style={styles.container}>
        <Text style={styles.text}>
        PAGE 1</Text>
        <MapView
        provider = {PROVIDER_GOOGLE}
        style = {styles.Mapcontainer}
 				initialRegion={{
          latitude: this.state.defaultLatitude,
          longitude: this.state.defaultLongitude,
          latitudeDelta: this.state.defaultLatitudeDelta,
          longitudeDelta: this.state.defaultLongitudeDelta
              }}>
              <MapView.Polyline
                coordinates={polygon}
                strokeColor="#FF0000" // default color red
                strokeWidth={3}
              />
 			    </MapView>
  </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {

       justifyContent: 'flex-end',
       alignItems: 'center',
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
