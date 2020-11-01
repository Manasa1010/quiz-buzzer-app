import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import BuzzerScreen from './screens/BuzzerScreen'
import {createSwitchNavigator,createAppContainer} from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <View>
      
       <AppContainer/>
      </View>
    );
  }
}
var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
BuzzerScreen:BuzzerScreen
})
var AppContainer=createAppContainer(AppNavigator);
