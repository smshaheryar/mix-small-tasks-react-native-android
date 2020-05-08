import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, { Component } from 'react';
import { StyleSheet,View,Text} from 'react-native';


 export default class page7 extends Component {
    constructor(props) {
     super(props);
     this.state = {

       latitude:24.86146,
       longitude:67.00994,
       defaultLatitude: 24.86146,
       defaultLongitude: 67.00994,
       defaultLatitudeDelta: 20,
       defaultLongitudeDelta: 20,
       office: [
         {
         latitude: 24.8670370,
         longitude:67.0809530,
       },
           ],

   polygon: [
          	{
           latitude: 27,
           longitude:63,
        	},
       	{
           latitude: 30,
           longitude:60,
       	},
         {
           latitude: 30,
           longitude:63,
         },
         {
           latitude: 30,
           longitude:66,
         },
         {
           latitude: 33,
           longitude:69,
         },
         {
         latitude: 36,
         longitude:70,
       },
       {
         latitude: 38,
         longitude:73,
       },
       {
         latitude: 36,
         longitude:76,
       },
       {
         latitude: 33,
         longitude:76,
       },
       {
         latitude: 30,
         longitude:75,
       },
       {
       latitude: 27,
       longitude:72,
     },
     {
       latitude: 24,
       longitude:71,
     },
     {
       latitude: 24,
       longitude:69,
     },
     {
       latitude: 24.5,
       longitude:66,
     },
     {
       latitude: 25,
       longitude:61,
     },
     {
       latitude: 27,
       longitude:63,
     },


       ],


   };

   }
   render() {
      const { polygon,office } = this.state;
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
                 <MapView.Marker
                 coordinate = {{
                   latitude: this.state.latitude,
                   longitude: this.state.longitude,
                   }} >
                   <View style= {styles.radius}>

                   </View>
                 </MapView.Marker>
                 <MapView.Marker
                 coordinate = {office[0]} >

                 </MapView.Marker>
  			    </MapView>
   </View>
       );
   }
 }

 const styles = StyleSheet.create({
   radius:{
     height:100,
     width:100,
     borderRadius:50,
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
