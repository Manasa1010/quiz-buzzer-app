import * as React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from "../config"

export default class HomeScreen extends React.Component {

  constructor(){
    super();
    this.state={
      redStatus:true,
      blueStatus:true,
      greenStatus:true,
      yellowStatus:true
    }
  }

  componentDidMount(){
var teamRef=db.ref("teams/");
teamRef.on("value",(data)=>{
  var teamDetails=data.val();
  this.setState({
    redStatus:teamDetails.red.enabled,
    blueStatus:teamDetails.blue.enabled,
    greenStatus:teamDetails.green.enabled,
     yellowStatus:teamDetails.yellow.enabled
  })
})
  }
  goToBuzzerScreen = (buzzercolor) => {
    var teamRef=db.ref("teams/"+buzzercolor);
    teamRef.update({
      enabled:false
    })
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity
        disabled={!this.state.redStatus}
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => this.goToBuzzerScreen('red')}>
          <Text style={styles.buttonText}>Team 1 </Text>
        </TouchableOpacity>
        <TouchableOpacity
         disabled={!this.state.blueStatus}
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => this.goToBuzzerScreen('blue')}>
          <Text style={styles.buttonText}>Team 2 </Text>
        </TouchableOpacity>
        <TouchableOpacity
         disabled={!this.state.greenStatus}
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => this.goToBuzzerScreen('green')}>
          <Text style={styles.buttonText}>Team 3 </Text>
        </TouchableOpacity>
        <TouchableOpacity
         disabled={!this.state.yellowStatus}
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => this.goToBuzzerScreen('yellow')}>
          <Text style={styles.buttonText}>Team 4 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
