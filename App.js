import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, ImageBackground} from 'react-native';


export default class ContadorAgua extends Component {
  

  render(){

    return (
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}> 
          <View>
            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Meta</Text> 
                <Text style={styles.areaDado}>2000ml</Text> 
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Consumido</Text> 
                <Text style={styles.areaDado}>500ml</Text> 
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status</Text> 
                <Text style={styles.areaDado}>Ruim</Text> 
              </View>
            </View>

            <View style={styles.percArea}>
              <Text style={styles.percText}>25%</Text>
              
            </View>
          </View>
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
  },
  infoArea : {
    flex: 1,
    flexDirection: 'row',
    marginTop: 70
  },
  percArea: {
    marginTop: 160,
    alignItems: 'center'
  },
  area: {
    flex: 1,
    alignItems: 'center'
  },
  percText: {
    fontSize : 75,
    color: '#fff',
    backgroundColor: 'transparent'
  },
  areaTitulo : {
    color: '#45b2fc'
  },
  areaDado: {
    color: '#2b4274',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

