import React, { Component } from 'react';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

const __NAME = 'PhotoListContainer';

class PhotoListContainer extends Component {
  render() {
    const { foo } = this.props;
    return (
      <View>
        <Text>photo list</Text>
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(`${__NAME} mapStateToProps`, { state, props });
  return { foo: state };
};

export default withRouter(connect()(PhotoListContainer));
