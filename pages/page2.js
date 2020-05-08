import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, { Component } from 'react';
import { StyleSheet,View,Text} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

//polygon
 export default class Map extends Component {
   constructor(props) {
  super(props);
  this.state = {

    latitude: 24.8670370,
    longitude:67.0809530,
    defaultLatitude: 24.867037,
    defaultLongitude: 67.0809530,
    defaultLatitudeDelta: 1,
    defaultLongitudeDelta: 1,

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
        Multiple markars</Text>
        <MapView
        provider = {PROVIDER_GOOGLE}
        style = {styles.Mapcontainer}
 				initialRegion={{
          latitude: this.state.defaultLatitude,
          longitude: this.state.defaultLongitude,
          latitudeDelta: this.state.defaultLatitudeDelta,
          longitudeDelta: this.state.defaultLongitudeDelta
              }}>
              <MapView.Polygon
                    coordinates={polygon}
                    fillColor="rgba(0, 200, 0, 0.5)"
                    strokeColor="rgba(0,0,0,0.5)"

                    strokeWidth={2}
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
