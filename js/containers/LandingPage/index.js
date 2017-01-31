/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

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
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit Hello
          </Text>
          <Text style={styles.instructions}>
            Current state = {this.props.isLoading.toString()}
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
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
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
