/**
 * @module GetAntsButton
 * @description Renders a button that triggers the onPress funcion or a spinner.
 * Used in the AntRace component to load the ants information
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
