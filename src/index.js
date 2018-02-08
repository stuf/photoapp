import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import createStore from './store';
import styles from './shared/styles';

import HomeScene from './scenes/home-scene';
import PhotoScene from './scenes/photo-scene';
import PhotoDetail from './containers/photo-detail';

const { store, persistor } = createStore();

const routes = {
  Home: { screen: HomeScene },
  Photo: { screen: PhotoScene },
  PhotoDetail: { screen: PhotoDetail }
};

const config = {
  initialRouteName: 'PhotoDetail'
};

const Root = StackNavigator(routes, config);

class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    )
  }
}

export default AppRoot;
