/**
 * @module Input
 * @description Renders an input with its label
 *
 * Any extra props, passed to this component will be passed along to the Input element.
 * This props must match the ones expected by a react native Input component (e.g. editable, autoFocus, autoCorrect, etc).
 */

import {View, Text, TextInput} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {styles} from './_input';

export function Input({label, inputContainer, ...otherProps}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{label}</Text>
      <View style={[styles.inputContainer]}>
        <TextInput
          {...otherProps}
          style={styles.textInput}
          editable={true}
          autoCorrect={false}
        />
      </View>
    </View>
  );
}

Input.propTypes = {
  /** label is the text that describes the input */
  label: PropTypes.string,
  /** textInput autoCapitalize */
  autoCapitalize: PropTypes.oneOf(['characters', 'words', 'sentence', 'none']),
};
Input.defaultProps = {
  autoCapitalize: 'none',
};
