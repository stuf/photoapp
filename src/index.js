import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { NativeRouter as Router, Route } from 'react-router-native';
import { PersistGate } from 'redux-persist/integration/react';

import createStore from './store';
import styles from './shared/styles';

import PhotoList from './containers/photo-list';
import PhotoDetail from './containers/photo-detail';

const { store, persistor } = createStore();

//

class AppRoot extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <View style={styles.appBackground}>
              <Route path="/:id" component={PhotoDetail} />
              <Route path="/" component={PhotoList} />
            </View>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

//

export default AppRoot;
