/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import {
  AppRegistry,
} from 'react-native';
import LandingPage from './containers/LandingPage';

export default class App extends Component {
  constructor(props) {
    super();
    this.state  = {
      isLoading : true,
      store: configureStore(() => this.setState({isLoading: false})),
    };
  }

  render() {
    return <LandingPage isLoading={this.state.isLoading} />;
  }
}
