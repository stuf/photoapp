import React from 'react';
import {
  View,
  TextInput as Input,
  StyleSheet,
} from 'react-native';
import { prop } from 'ramda';
import { flatten } from '../shared/helpers';

const styles = StyleSheet.create({
  container: {},
  content: {
    padding: 10,
    backgroundColor: '#f00',
  }
});

export const BoundTextInput = (object, onChangeFn) => ({ name, title, flex }) =>
  <TextInput placeholder={title}
             value={prop(name, object)}
             onChangeText={onChangeFn(name)}
             flex={flex} />

const TextInput = ({ placeholder, multiline, value, onChangeText, flex }) =>
  <View style={flatten(styles.container,
                       flex && { flex: 1 })}>
    <Input {...{ placeholder,
                 onChangeText,
                 multiline,
                 value,
                 style: styles.content }} />
  </View>;

export default TextInput;
