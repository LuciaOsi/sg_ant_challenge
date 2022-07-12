/**
 * @module Ant
 * @description Renders the information of an ant such as name, color, weight, length,
 * postition after the race and likelihood when its calculated
 */

import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {AntStatus, ANT_PARAMETERS} from './AntStatus';
import {styles} from './_ant';

export function Ant({
  index,
  likelihood,
  name,
  length,
  color,
  weight,
  isStarted,
  isFinished,
}) {
  return (
    <View style={styles.antContainer}>
      <View style={styles.ant}>
        <AntStatus
          index={index}
          likelihood={likelihood}
          isStarted={isStarted}
          isFinished={isFinished}
        />
        <View
          style={[styles.nameContainer, {borderColor: color.toLowerCase()}]}>
          <Text style={styles.antText}> {name} </Text>
        </View>

        {likelihood && (
          <Text style={styles.antDetailText}>
            Likelihood: {likelihood.toFixed(2)}
          </Text>
        )}

        <View style={styles.detailsContainer}>
          <Text style={styles.antDetailText}>Length: {length} | </Text>
          <Text style={styles.antDetailText}>Color: {color} | </Text>
          <Text style={styles.antDetailText}>Weight: {weight}</Text>
        </View>
      </View>
    </View>
  );
}

const ANT_PROPERTIES = {
  name: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  ...ANT_PARAMETERS,
};

Ant.propTypes = ANT_PROPERTIES;
