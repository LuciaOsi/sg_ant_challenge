/**
 * @module RaceDashboard
 * @description view that will render the dashboard where we can start the race
 */

import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {GenericButton} from '../common/GenericButton';
import {AntsList} from '../ants/AntsList';
import {styles} from './_raceDashboard';
import {isRaceFinished} from '../../utils/raceStatus';

export function RaceDashboard({ants = [], onRaceStart}) {
  const [isStarted, setIsStarted] = useState(false);
  const isFinished = isRaceFinished(ants);

  const handleStart = () => {
    setIsStarted(true);
    onRaceStart();
  };

  return (
    <View style={styles.container}>
      <AntsList
        ants={ants}
        isStarted={isStarted}
        ListHeaderComponentStyle={styles.headerComponent}
        ListHeaderComponent={
          <React.Fragment>
            <Text
              style={[
                styles.raceStatusText,
                isStarted && isFinished && styles.fetchDataText,
              ]}>
              Race: {getRaceStatusText(isStarted, isFinished)}
            </Text>

            {!isFinished && (
              <GenericButton title={'Start Race'} onPress={handleStart} />
            )}
          </React.Fragment>
        }
      />
    </View>
  );
}

RaceDashboard.propTypes = {
  ants: PropTypes.arrayOf(
    PropTypes.shape({
      likelihood: PropTypes.number,
      name: PropTypes.string.isRequired,
      length: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onRaceStart: PropTypes.func.isRequired,
};

function getRaceStatusText(isStarted, isFinished) {
  if (!isStarted) {
    return 'Not Yet Run';
  }

  if (isStarted && !isFinished) {
    return 'In Progress';
  }

  if (isStarted && isFinished) {
    return 'Calculated!';
  }
}
