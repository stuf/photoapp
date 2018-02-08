import React from 'react';
import { Text } from 'react-native';
import { Size } from '../shared/styles';

export default ({ children }) => <Text style={Size.TITLE}>{children}</Text>
