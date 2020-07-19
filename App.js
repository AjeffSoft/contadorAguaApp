import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, ImageBackground} from 'react-native';


export default class ContadorAgua extends Component {
  

  render(){

    return (
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}> 


        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    flex : 1,
    paddingTop: 15
  },
  bgimage: {
    flex : 1,
    width:null
  }
});

