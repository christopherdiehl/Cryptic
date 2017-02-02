'use strict'

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native'


export default class LandingPage extends Component {
  constructor(props) {
    super();
  }
  render() {
    if(this.props.isLoading) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(165,203,246,1)",
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 54,
              fontWeight: "bold",
              fontFamily: "Trebuchet MS",
              lineHeight: 60,
            }}>
            Cryptic
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontWeight: 'normal',
              fontFamily: "Helvetica",
            }}>
            Welcome to the most secure chat application.
          </Text>
        </View>
      );
    }
  }
}
LandingPage.propTypes = {
  isLoading: React.PropTypes.bool,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Cochin',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
