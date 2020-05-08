import React, { Component } from 'react';

import { AppRegistry, StyleSheet, TextInput, View,ScrollView, Alert,List, Button,Text ,TouchableOpacity,TouchableHighlight} from 'react-native';
import Display from 'react-native-display';

export default class page9 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fruit1:'orange',
      fruit2:'apple',
      fruit3:'banana',
      f1:'',
      f2:'',
      f3:'',
      fr1:'',
      fr2:'',
      fr3:'',
      fruits:'',
      fruit01:'',
  fruit02:'',
    fruit03:'',
      enable1: true,
      enable2:true,
      enable3:true,
    Color1:'black',
      Color2:'black',
        Color3:'black',
    }
  }
  // toggleDisplay() {rr
  //   let toggle = !this.state.enable;
  //   this.setState({enable: toggle});
  //
  //   // var fruit01    = this.state.fruit1;
  //   // var fruit02   = this.state.fruit2;
  //   // var fruit03  = this.state.fruit3;
  //   //
  //   // var fruits= fruit01+"\n"+fruit02+"\n"+fruit03;
  //   // this.setState({fruits:fruits})
  //
  // }
  toggleDisplay1() {
      let toggle = !this.state.enable1;
      this.setState({enable1: toggle});
    this.setState({fr1:this.state.fruit1}),
    this.setState({
      Color1:'white'
    })
  //  alert(this.state.f1)

  }

  toggleDisplay2() {
    let toggle = !this.state.enable2;
    this.setState({enable2: toggle});
    this.setState({fr2:this.state.fruit2}),
    this.setState({
      Color2:'white'
    })
    //  alert(this.state.f2)

    // var fruit0    = this.state.fruit1;
    // var fruit02   = this.state.fruit2;
    // // var fruit03  = this.state.fruit3;
    //
    // var fruits= fruit01+"\n"+fruit02+"\n"+fruit03;
    // this.setState({fruits:fruits})

  }
  toggleDisplay3() {

    let toggle = !this.state.enable3;
    this.setState({enable3: toggle});
  //  this.setState({fruit3:'banana'}),
this.setState({fr3:this.state.fruit3}),
    this.setState({
      Color3:'white'
    })
  //  alert(this.state.f3)
    // var fruit0    = this.state.fruit1;
    // var fruit02   = this.state.fruit2;
    // // var fruit03  = this.state.fruit3;
    //
    // var fruits= fruit01+"\n"+fruit02+"\n"+fruit03;
    // this.setState({fruits:fruits})

  }
  toggleDisplay4() {
    // if(this.state.Color1=='white'){
    //   let toggle = !this.state.enable;
    //   this.setState({enable: toggle});
    //   // alert("sdad")
    // }else if (this.state.Color2=='white') {
    //   let toggle2 = !this.state.enable2;
    //       this.setState({enable2: toggle2});
    // }else if (this.state.Color3=='white') {
    //   let toggle3 = !this.state.enable3;
    //   this.setState({enable3: toggle3});
    // }

    // let toggle2 = !this.state.enable2;
    //     this.setState({enable2: toggle2});
    //     let toggle3 = !this.state.enable3;
    //     this.setState({enable3: toggle3});
    //  let toggle = !this.state.enable;
    // this.setState({enable: toggle});

    var fruit01    = this.state.fr1;

   var fruit02   = this.state.fr2;
   var fruit03  = this.state.fr3;
   this.setState({fruit01:fruit01}) ;
    this.setState({fruit02:fruit02}) ;
     this.setState({fruit03:fruit03}) ;
     // var fruits= fruit01+"\n"+fruit02+"\n"+fruit03;
   // this.setState({fruits:fruits})

// if(this.state.f1=='orange'){
//       this.setState({Color1:'grey'})
//     }
//   if (this.state.f2=='apple' ) {
//
//       this.setState({Color2:'grey'})
//
// }
//
// if(this.state.f3=='banana'){
// this.setState({Color3:'grey'})
// }

}



toggleDisplay5(){

if(this.state.Color1=='grey'){

  this.setState({fruit1:'orange'})

}
if(this.state.Color2=='grey'){
  this.setState({Color2:'black'})
  this.setState({fruit2:'apple'})
}
if(this.state.Color3=='grey'){
  this.setState({Color3:'black'})
  this.setState({fruit3:'banana'})
}

}
back1(){
this.setState({fruit1:'banana'})
}
  render() {

    return (

      <View style={styles.wrapper}>
      <ScrollView style={styles.container}>
      <Text style={styles.text}>fruits</Text>
      <Display
      enable={this.state.enable1}
      exitDuration={250}
      exit="fadeOut"
      >
      <TouchableOpacity
      onPress={this.toggleDisplay1.bind(this)}
      >
      <Text style={{color:this.state.Color1}}>{this.state.fruit1} </Text>
      </TouchableOpacity>
        </Display>




        <Display
        enable={this.state.enable2}
        exitDuration={250}
        exit="fadeOut"
        >
      <TouchableOpacity
      onPress={this.toggleDisplay2.bind(this)}
      >
      <Text style={{color: this.state.Color2}}>{this.state.fruit2} </Text>
      </TouchableOpacity>
        </Display>


      <Display
      enable={this.state.enable3}
      exitDuration={250}
      exit="fadeOut"
      >
      <TouchableOpacity

      onPress={this.toggleDisplay3.bind(this)}
      >
      <Text style={{color: this.state.Color3}}>{this.state.fruit3}</Text>
      </TouchableOpacity>

  </Display>



      </ScrollView>

      <Button
    onPress={this.toggleDisplay4.bind(this)}
      title=">>"
      color="#34495e"

      />
      <Button
      onPress={this.toggleDisplay5.bind(this)}
      title="<<"
      color="#34495e"

      />
      <View style={styles.container2}>
      <Text style={styles.text}>selected</Text>
      <View >
      <TouchableOpacity
        onPress={this.back1.bind(this)}
      >
      <Text>{this.state.fruit01} </Text>

      </TouchableOpacity>
      <TouchableOpacity
      >
      <Text>{this.state.fruit02} </Text>

      </TouchableOpacity>
      <TouchableOpacity
      >
      <Text>{this.state.fruit03} </Text>

      </TouchableOpacity>

      </View>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor: 'grey',

  },
  texta: {
    backgroundColor: 'transparent',
    color: '#111'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 10
  },
  buttonas: {
    padding: 10,
    borderWidth: 3,
    borderColor: '#111'
  },
  bgFill: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  text:{
    textAlign: 'center',
    backgroundColor: 'grey',
    borderWidth: 0.5,
    marginLeft:1,
    marginRight: 1,
    borderBottomWidth: 2,
    borderColor: 'black',
  },
  container: {
    flex: .5,
    flexDirection: 'column',
  //  justifyContent: 'space-between', //replace with flex-end or center
    borderBottomWidth: 2,
    borderWidth: 2,
    marginLeft:2,
    marginRight: 2,
    borderColor: 'blue',
  },
  container3: {
    flexDirection: 'row',
  },
  container2: {
    flex: .5,
    flexDirection: 'column',
    justifyContent: 'space-between', //replace with flex-end or center
    borderBottomWidth: 2,
    borderWidth: 2,
    marginLeft:2,
    marginRight: 2,
    borderColor: 'blue',
  },
  box1: {
    backgroundColor: 'black'
  },
  // TouchableOpacity:
  // {
  //
  // },
  //
  // box2: {
  //   backgroundColor: 'grey'
  // },

});
