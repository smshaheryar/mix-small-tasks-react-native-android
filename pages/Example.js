import React, { Component } from 'react';

import { AppRegistry, StyleSheet, TextInput, View,Alert,ScrollView,FlatList, Button,Text ,TouchableOpacity,TouchableHighlight} from 'react-native';
import Display from 'react-native-display';

export default class page10 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      my_array:[1,3,4],
      start_index: 0,
    number_of_elements_to_add : 1,
    number_of_elements_to_remove : 1,
      f1:'',
      f2:'',
      f3:'',
      enable: true,
      samplearray:["orange","banana","apple"],
  samplearray1:[],
  fruits:[],
      enable2:true,
      enable3:true,
    Color1:'black',
      Color2:'black',
        Color3:'black',
        counter:0,
        Color4:'black',
          Color5:'black',
            Color6:'black',
            fruit01:'',
            fruit02:'',
            fruit03:'',
            fruit1:'',
            fruit2:'',
            fruit3:'',
            fontSize:40,

    }
  }

   toggleDisplay1() {
     if(this.state.samplearray[0]=='orange'){
          this.setState({Color1:'white'  })
                  var fruit1=this.state.samplearray[0];
                  this.setState({f1:fruit1})
                }
  if(this.state.samplearray[0]=='banana'){
    this.setState({Color1:'white'  })
     var fruit2=this.state.samplearray[0];
     this.setState({f2:fruit2})
           }

  if(this.state.samplearray[0]=='apple'){
       this.setState({Color1:'white'  })
     var fruit3=this.state.samplearray[0];
          this.setState({f3:fruit3})
         }


}

toggleDisplay2() {
  if (this.state.samplearray[1]=='banana') {
      this.setState({Color2:'white'  })
   var fruit2=this.state.samplearray[1];
           this.setState({f2:fruit2})
}
if (this.state.samplearray[1]=='apple') {
  this.setState({Color2:'white'  })
  // this.state.samplearray.splice(this.state.start_index,this.state.number_of_elements_to_add,this.state.samplearray[1]);
       var fruit3=this.state.samplearray[1];
       this.setState({f3:fruit3})
}
}

toggleDisplay3() {
  if (this.state.samplearray[2]=='apple') {
    this.setState({Color3:'white'  })
    // this.state.samplearray.splice(this.state.start_index,this.state.number_of_elements_to_add,this.state.samplearray[1]);
         var fruit3=this.state.samplearray[2];
         this.setState({f3:fruit3})
}


}
toggleDisplay4() {

this.setState({fruit01:this.state.f1})
this.setState({fruit02:this.state.f2})
this.setState({fruit03:this.state.f3})

     if(this.state.Color1=='white' && this.state.Color2=='white' && this.state.Color3=='white'){
          this.removal1()
          this.setState({f1:''})
            this.setState({f2:''})
              this.setState({f3:''})
    }
    else if(this.state.Color2=='white' && this.state.Color3=='white'){
      this.removal21()
        this.setState({Color1:'black'})

    }
    else if(this.state.Color2=='white' && this.state.Color1=='white'){
      this.removal2()
      this.setState({Color1:'black'})
    }else if (this.state.Color1=='white') {
      this.removal11()
      this.setState({Color1:'black'})
    }else if (this.state.Color2=='white') {
      this.removal3()
      this.setState({Color2:'black'})

    }else if(this.state.Color3=='white'){
      this.removal31()
    }

}






removal1(){
  this.state.samplearray.splice(0,3);

  // alert(this.state.samplearray)
}
removal2(){ this.state.samplearray.splice(0,2);

}
removal21(){ this.state.samplearray.splice(1,2);

}
removal3(){
   this.state.samplearray.splice(1,1);
 }
 removal11(){
    this.state.samplearray.splice(0,1);
}
removal31(){
       this.state.samplearray.splice(2,1);
    //   alert('this.state.samplearray')
     }




  selected1() {
    if(this.state.fruit01=='orange'){
         this.setState({Color4:'white'  })
                 this.setState({ fruit1:this.state.fruit01})
                  this.state.samplearray.splice(this.state.start_index,this.state.number_of_elements_to_add,this.state.fruit1);
                    this.setState({Color1:'black'})
               }
             }
               selected2() {
                    if(this.state.fruit02=='banana'){
                    this.setState({Color5:'white'  })
     // this.setState({ fruit2:this.state.fruit02});
     // this.state.samplearray.splice(1,this.state.number_of_elements_to_add,'banana');
     // this.setState({Color2:'black'})
                          }
                        }
                        selected3(){
                if(this.state.fruit03=='apple'){
                     this.setState({Color6:'white'  })
                 // this.setState({fruit3:this.state.fruit03});
     // this.state.samplearray.splice(2,this.state.number_of_elements_to_add,'apple');
     // this.setState({Color3:'black'})

               }}
       back(){
        //  if (this.state.Color4=='white' && this.state.Color5=='white' &&  this.state.Color6=='white' ) {
        //   this.state.samplearray.splice(0,3,'apple','orange','banana');
        //   alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssss')
        //     this.setState({Color2:'black'})
        //       this.setState({Color1:'black'})
        //      this.setState({Color3:'black'})
        //     this.removal7()
        // }
        this.setState({f1:''})
          this.setState({f2:''})
            this.setState({f3:''})

         if(this.state.Color4=='white'){
           this.setState({ fruit1:this.state.fruit01})
            this.state.samplearray.splice(this.state.start_index,this.state.number_of_elements_to_add,this.state.fruit1);
              this.setState({Color1:'black'})
              this.removal4()

            }else if (this.state.Color5=='white') {
           this.setState({ fruit2:this.state.fruit02})
            this.state.samplearray.splice(1,this.state.number_of_elements_to_add,'banana');
              this.setState({Color2:'black'})

             this.removal5()
         }
         else if (this.state.Color6=='white') {
           this.setState({ fruit3:this.state.fruit03})
           this.state.samplearray.splice(2,this.state.number_of_elements_to_add,'apple');
              this.setState({Color3:'black'})
             this.removal6()
             // alert(this.state.samplearray)
         }
//alert(this.state.samplearray + "sample ")
// alert(this.state.f1+ this.state.f2 +this.state.f3 +"f1 f2 f3") // is mei variable ha
// alert(this.state.fruit01+ this.state.fruit02 +this.state.fruit03)

//    }
}


    removal4(){
      this.setState({fruit01:''})
     this.setState({fruit1:''})
      this.setState({Color4:'black'})
    }
    removal5(){
      this.setState({fruit02:''})
      this.setState({fruit2:''})
      this.setState({Color5:'black'})
    }
    removal6(){
      this.setState({fruit03:''})
     this.setState({fruit3:''})
      this.setState({Color6:'black'})

    }
    removal7(){
alert(this.state.fruit01)
alert(this.state.fruit02)
alert(this.state.fruit03)
    }


 // if(this.state.samplearray[0]=='banana'){rr
 //   this.setState({Color1:'white'  })
 //    var fruit2=this.state.samplearray[0];
 //    this.setState({f2:fruit2})
 //          }
 //
 // if(this.state.samplearray[0]=='apple'){
 //      this.setState({Color1:'white'  })
 //    var fruit3=this.state.samplearray[0];
 //         this.setState({f3:fruit3})
 //        }



  render() {
    return (
        <View style={styles.wrapper}>
        <ScrollView style={styles.container}>
          <Text style={styles.text}>fruits</Text>
          <View >
          <TouchableOpacity
          onPress={this.toggleDisplay1.bind(this)}
          >
          <Text style={{color: this.state.Color1,fontSize:this.state.fontSize}}>{this.state.samplearray[0]} </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.toggleDisplay2.bind(this)}
          >
          <Text style={{color: this.state.Color2,fontSize:this.state.fontSize}}>{this.state.samplearray[1]} </Text>
          </TouchableOpacity>
          <TouchableOpacity
                onPress={this.toggleDisplay3.bind(this)}
          >
          <Text style={{color: this.state.Color3,fontSize:this.state.fontSize}}>{this.state.samplearray[2] }</Text>
          </TouchableOpacity>

          </View>

      </ScrollView>
      <Button
    onPress={this.toggleDisplay4.bind(this)}
      title=">>"
      color="#34495e"

      />
      <Button
      onPress={this.back.bind(this)}
      title="<<"
      color="#34495e"

      />

    <ScrollView style={styles.container2}>
      <Text style={styles.text}>selected</Text>
      <View >
      <TouchableOpacity
      onPress={this.selected1.bind(this)}
      >
      <Text style={{color:this.state.Color4,fontSize:this.state.fontSize}}>{this.state.fruit01} </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={this.selected2.bind(this)}
      >
      <Text style={{color: this.state.Color5,fontSize:this.state.fontSize}}>{this.state.fruit02} </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={this.selected3.bind(this)}
      >
      <Text style={{color: this.state.Color6,fontSize:this.state.fontSize}}>{this.state.fruit03} </Text>
      </TouchableOpacity>


      </View>

  </ScrollView>
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
  color:{
    backgroundColor:'white'
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
    flexDirection: 'column',

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

    flexDirection: 'column',

    borderBottomWidth: 2,
    borderWidth: 2,
    marginLeft:2,
    marginRight: 2,
    borderColor: 'blue',
  },
  box1: {
    backgroundColor: 'black'
  },


});
