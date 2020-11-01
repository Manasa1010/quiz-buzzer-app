import * as React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import AppHeader from '../components/AppHeader';
import SoundButton from '../components/SoundButton';
export default class BuzzerScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <SoundButton color={this.props.navigation.getParam("color")}/>
      </View>
    );
  }
}
