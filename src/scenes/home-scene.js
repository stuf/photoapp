import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prop } from 'ramda';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Title, SubTitle } from '../components';
import styles, { ItemRow, Direction } from '../shared/styles';
import * as H from '../shared/helpers';

const { flatten } = StyleSheet;

//

const titleIn = prop('title');
const descriptionIn = prop('description');

const ListItem = ({ item, ...props }) =>
  <TouchableOpacity onPress={() => {}}>
    <View style={H.flatten(ItemRow.LARGE, Direction.ROW)}>
      <View style={{ flex: 1 }}>
        <Title>{titleIn(item)}</Title>
        <SubTitle>{descriptionIn(item)}</SubTitle>
      </View>

      <Ionicons name="ios-arrow-forward" size={18} />
    </View>
  </TouchableOpacity>;

const HomeScene = ({ items, navigation }) =>
  <View style={styles.sceneStyles}>
    <FlatList data={items}
              renderItem={ListItem}
              keyExtractor={prop('id')} />
  </View>;

HomeScene.navigationOptions = ({ navigation }) => ({
  title: 'Home',
  headerRight: <Button title="Add" onPress={() => navigation.navigate('Photo')} />
});

//

const mapStateToProps = (state, props) => ({
  items: state.photos.items
});

//

export default connect(mapStateToProps)(HomeScene);
