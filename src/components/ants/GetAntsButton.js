/**
 * @module GetAntsButton
 * @description button that take cares of getting the ant's data
 */

import React from 'react';
import PropTypes from 'prop-types';
import {View, ActivityIndicator} from 'react-native';
import {GenericButton} from '../common/GenericButton';
import {styles} from './_getAntsButton';

export function GetAntsButton({onPress, isLoading}) {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <GenericButton title={'Load Competing Ants'} onPress={onPress} />
      )}
    </View>
  );
}

GetAntsButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
