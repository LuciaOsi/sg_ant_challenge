/**
 * @module Login
 * @description Renders a two input to allow the user to enter a username and a password
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {styles} from './_login';
import {Input} from '../components/login/Input';
import {GenericButton} from '../components/common/GenericButton';

export function Login({onLoggedIn}) {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  console.log(userName, password);
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Competing Ant App</Text>
      <Input
        label={'Username'}
        onChangeText={text => setUserName(text)}
        placeholder={'Enter a username'}
      />
      <Input
        label={'Password'}
        onChangeText={text => setPassword(text)}
        placeholder={'Enter a password'}
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <GenericButton title={'Log In'} onPress={() => onLoggedIn(userName)} />
      </View>
    </View>
  );
}
Login.propTypes = {
  /** triggers when the "Log in" button is pressed */
  onLoggedIn: PropTypes.func.isRequired,
};
