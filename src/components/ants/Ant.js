/**
 * @module Ant
 * @description Renders the information of an ant such as name, color, weight, length,
 * postition after the race and likelihood when its calculated
 */

import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, ActivityIndicator} from 'react-native';
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

        <AntDetails length={length} color={color} weight={weight} />
      </View>
    </View>
  );
}
export const ANT_PROPERTIES = {
  name: PropTypes.string.isRequired,
  ...ANT_PARAMETERS,
  ...ANT_DETAILS,
};

Ant.propTypes = ANT_PROPERTIES;

const STATUS = {
  NOT_STARTED: 'Not Yet Run',
  IN_PROGRESS: 'In Progress',
  CALCULATED: 'Calculated!',
};

function AntStatus({isStarted, isFinished, index, likelihood}) {
  const antStatus = parseAntStatus(likelihood, isStarted);
  return (
    <View style={styles.antPositionContainer}>
      {isStarted && isFinished && (
        <Text style={[styles.antText, styles.antPosition]}> {index + 1} </Text>
      )}

      {antStatus === STATUS.IN_PROGRESS && <ActivityIndicator size="small" />}

      <Text
        style={[
          styles.antStatusText,
          antStatus === STATUS.CALCULATED && styles.antFinishedText,
        ]}>
        {antStatus}
      </Text>
    </View>
  );
}

const ANT_PARAMETERS = {
  index: PropTypes.number.isRequired,
  likelihood: PropTypes.number,
  isStarted: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
};
AntStatus.propTypes = ANT_PARAMETERS;

function AntDetails({length, color, weight}) {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.antDetailText}>Length: {length} | </Text>
      <Text style={styles.antDetailText}>Color: {color} | </Text>
      <Text style={styles.antDetailText}>Weight: {weight}</Text>
    </View>
  );
}

const ANT_DETAILS = {
  length: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
};
AntDetails.propTypes = ANT_DETAILS;

function parseAntStatus(likelihood, isStarted) {
  if (!isStarted) {
    return STATUS.NOT_STARTED;
  }
  return likelihood !== undefined ? STATUS.CALCULATED : STATUS.IN_PROGRESS;
}
