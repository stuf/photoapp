import React, { Component } from 'react';
import { connect } from 'react-redux';
import { prop, flip } from 'ramda';
import {
  View,
  Text,
  Button,
} from 'react-native';

import TextInput from '../../components/text-input';
import { updatePhotoField } from './actions';
import { curry2 } from '../../shared/helpers';
import { Direction } from '../../shared/styles';

//

class PhotoDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const title = "Add new";
    const headerRight =
      <Button title="Save"
              onPress={() => {}} />

    return { title, headerRight };
  }

  render() {
    const { photo, updatePhotoField } = this.props;

    const from = flip(prop);
    const fromItem = from(photo);

    return (
      <View>
        <Text>Basic</Text>

        <View>
          <TextInput placeholder="Title"
                     value={fromItem('title')}
                     onChangeText={updatePhotoField('title')} />
          <TextInput placeholder="Description"
                     value={fromItem('description')}
                     onChangeText={updatePhotoField('description')} />
          <TextInput placeholder="Conditions"
                     value={fromItem('conditions')}
                     onChangeText={updatePhotoField('conditions')} />
        </View>

        <Text>Settings</Text>

        <View style={Direction.ROW}>
          <TextInput placeholder="Aperture" flex
                     value={fromItem('aperture')}
                     onChangeText={updatePhotoField('aperture')} />
          <TextInput placeholder="Shutter" flex
                     value={fromItem('shutter')}
                     onChangeText={updatePhotoField('shutter')} />
          <TextInput placeholder="ISO" flex
                     value={fromItem('iso')}
                     onChangeText={updatePhotoField('iso')} />
        </View>

        <Text>Location</Text>

        <View style={Direction.ROW}>
          <TextInput placeholder="Lat" flex
                     value={fromItem('lat')}
                     onChangeText={updatePhotoField('lat')} />
          <TextInput placeholder="Long" flex
                     value={fromItem('long')}
                     onChangeText={updatePhotoField('long')} />
          <Button title="Locate" onPress={() => {}} />
        </View>

        <Text>Notes</Text>

        <View>
          <TextInput placeholder="Notes"
                     value={fromItem('notes')}
                     multiline
                     onChangeText={updatePhotoField('notes')} />
        </View>

        <Text>{JSON.stringify(photo, null, 2)}</Text>
      </View>
    );
  }
}

//

const mapStateToProps = (state, props) => ({
  photo: state.photoDetail
});

const mapDispatchToProps = dispatch => ({
  updatePhotoField: curry2((name, value) => dispatch(updatePhotoField(name, value)))
});

//

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetail);
