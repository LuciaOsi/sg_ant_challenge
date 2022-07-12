import React from 'react';
import {Text, View, Pressable} from 'react-native';
import {styles} from './_genericButton';
import PropTypes from 'prop-types';

/**
 * @summary This component renders a view with a pressable
 * The children props will be add inside the pressable container
 *
 * Any extra props, passed to this component will be passed along to the Pressable element.
 * This props must match the ones expected by a react native Pressable component (e.g. disable, onPress, style, etc).
 *
 */
export function GenericButton({title, children, ...otherProps}) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable {...otherProps}>
        <View style={styles.textButtonContainer}>
          <Text style={styles.buttonText}> {title} </Text>
          {children}
        </View>
      </Pressable>
    </View>
  );
}

GenericButton.propTypes = {
  /* Title of the pressable button*/
  title: PropTypes.string.isRequired,
  /* elements that will be pressable*/
  children: PropTypes.node,
  /* function that will be trigger by the pressable*/
  onPress: PropTypes.func.isRequired,
};
