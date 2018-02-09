import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';

import RootScene from './src';
import store from './src/store';
import { rgb } from './src/shared/helpers';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class Root extends Component {
  render() {
    return <RootScene />;
  }
}
