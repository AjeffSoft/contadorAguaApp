import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button, ImageBackground} from 'react-native';


export default class ContadorAgua extends Component {
  
  constructor(props){
    super(props);
    this.state = {consumido: 0, status: 'Ruim', perc: 0};

    this.addCopo = this.addCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
  }


  addCopo (){
    let s = this.state;
    s.consumido += 200;
    this.setState(s);
    this.atualizar();

  }

  atualizar (){
    let s = this.state;
    s.perc = Math.floor((s.consumido/2000) * 100);

    if(s.perc >= 100){
      s.status = 'Bom';
    }else {
      s.status = 'Ruim';
    }
    this.setState(s);
  }

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
                <Text style={styles.areaDado}>{this.state.consumido}ml</Text> 
              </View>
              <View style={styles.area}>
                <Text style={styles.areaTitulo}>Status</Text> 
                <Text style={styles.areaDado}>{this.state.status}</Text> 
              </View>
            </View>

            <View style={styles.percArea}>
              <Text style={styles.percText}>{this.state.perc}%</Text>
            </View>

            <View style={styles.btnArea}>
              <Button title="Beber 200ml" onPress={this.addCopo}/>
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
  btnArea : {
    marginTop : 30,
    alignItems : 'center'
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

