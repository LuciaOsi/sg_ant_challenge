/**
 * @module AntStatus
 * @description Renders the status of the calculation of the likelihood of an ant winning the race.
 * If the calculation is in progress we show a spinner.
 * When the calculation its done we show the position the ant got at the race
 */

import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, ActivityIndicator} from 'react-native';
import {styles} from './_ant';

const STATUS = {
  NOT_STARTED: 'Not Yet Run',
  IN_PROGRESS: 'In Progress',
  CALCULATED: 'Calculated!',
};

export function AntStatus({isStarted, isFinished, index, likelihood}) {
  const antStatus = getAntStatus(likelihood, isStarted);
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

export const ANT_PARAMETERS = {
  index: PropTypes.number.isRequired,
  likelihood: PropTypes.number,
  isStarted: PropTypes.bool.isRequired,
  isFinished: PropTypes.bool.isRequired,
};
AntStatus.propTypes = ANT_PARAMETERS;

function getAntStatus(likelihood, isStarted) {
  if (!isStarted) {
    return STATUS.NOT_STARTED;
  }
  return likelihood !== undefined ? STATUS.CALCULATED : STATUS.IN_PROGRESS;
}
