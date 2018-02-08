import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import styles, { Direction } from '../shared/styles';
import TextInput from '../components/text-input';
import { flatten } from '../shared/helpers';

const PhotoScene = () =>
  <View style={styles.sceneStyles}>
    <Text>Add new</Text>

    <View>
      <TextInput placeholder="Title" />
      <TextInput placeholder="Description" />
    </View>

    <Text>Settings</Text>

    <View style={Direction.ROW}>
      <TextInput placeholder="Aperture" flex />
      <TextInput placeholder="Shutter" flex />
      <TextInput placeholder="ISO" flex />
    </View>

    <Text>Location</Text>

    <View style={Direction.ROW}>
      <TextInput placeholder="Lat" flex />
      <TextInput placeholder="Long" flex />
      <Button title="Locate" onPress={() => {}} />
    </View>
  </View>;

PhotoScene.navigationOptions = ({ navigation }) => ({
  title: 'Add new photo',
  headerRight: <Button title="Save"
                       onPress={() => {}} />
});

export default PhotoScene;
