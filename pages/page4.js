import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, { Component } from 'react';
import { StyleSheet,View,Text} from 'react-native';

//style markar with circle Component
 export default class page4 extends Component {
   constructor(props) {
  super(props);
  this.state = {

    latitude: 24.8670370,
    longitude:67.0809530,
    defaultLatitude: 24.8670370,
    defaultLongitude: 67.0809530,
    defaultLatitudeDelta: 1,
    defaultLongitudeDelta: 1,
  };
}



  render() {
      return(
        <View style={styles.container}>
        <Text style={styles.text}>
        marker with circle styling</Text>
          <MapView
            provider = {PROVIDER_GOOGLE}
            style = {styles.Mapcontainer}
            initialRegion= {{
              latitude: this.state.defaultLatitude,
              longitude: this.state.defaultLongitude,
              latitudeDelta: this.state.defaultLatitudeDelta,
              longitudeDelta: this.state.defaultLongitudeDelta
            }}>


            <MapView.Marker
            coordinate = {{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              }} >
              <View style= {styles.radius}>
                  <View style={styles.markar}/>
              </View>
            </MapView.Marker>

          </MapView>
  </View>
      );
  }
}

const styles = StyleSheet.create({
  radius:{
    height:50,
    width:50,
    borderRadius:50/2,
    overflow:'hidden',
    backgroundColor:'rgba(0,122,255,0.1)',
    borderWidth:1,
    borderColor:'rgba(0,122,255,0.3)',
    alignItems:'center',
    justifyContent:'center'
  },
  markar:{
    height:20,
    width:20,
    borderWidth:3,
    borderColor:'black',
    borderRadius:20/2,
    overflow:'hidden',
    backgroundColor:'#007AFF'

  },
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
