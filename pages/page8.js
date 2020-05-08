import React, { Component } from 'react';

import { AppRegistry, StyleSheet, TextInput, View, Alert, Button } from 'react-native';
export default class page8 extends Component {
  constructor(props) {

    super(props)

    this.state = {

      id: '',
      username: '',
      password: ''

    }
  }

  InsertDataToServer = () =>{
 // const { id }  = this.state ;
 // const { username }  = this.state ;
 // const { password }  = this.state ;

//let url = "http://192.168.1.9/phpapi/index.php?username="+ this.state.username +"&password="+ this.state.password;
let url = "http://192.168.1.9/phpapi/index2.php";

///alert(url);

var userForm = {
  id: this.state.id,
  username: this.state.username,
  password: this.state.password
};

alert(JSON.stringify(userForm));

fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userForm)
}).then((response) => response.json())
    .then((responseJson) => {
      alert(responseJson);
    }).catch((error) => {
      console.error(error);
    });
}
render() {
   return (

<View style={styles.MainContainer}>



       <TextInput

         // Adding hint in Text Input using Place holder.
         placeholder="username"

         onChangeText={username => this.setState({username})}

         // Making the Under line Transparent.
         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

       <TextInput

         // Adding hint in Text Input using Place holder.
         placeholder="password"

         onChangeText={password => this.setState({password})}

         // Making the Under line Transparent.
         underlineColorAndroid='transparent'

         style={styles.TextInputStyleClass}
       />

       <Button title="Insert Text Input Data to Server" onPress={this.InsertDataToServer} color="#2196F3" />



</View>

   );
 }
}

const styles = StyleSheet.create({

MainContainer :{

justifyContent: 'center',
flex:1,
margin: 10
},

TextInputStyleClass: {

textAlign: 'center',
marginBottom: 7,
height: 40,
borderWidth: 1,
// Set border Hex Color Code Here.
borderColor: '#FF5722',

// Set border Radius.
//borderRadius: 10 ,
}

});
