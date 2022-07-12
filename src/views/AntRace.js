/**
 * @module AntRace
 * @description renders the GetAntsButton component if the ants information is not loaded,
 * otherwise if renders the RaceDashboard component in order show the list of ants.
 */
import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {RaceDashboard} from './../components/race/RaceDashboard';
import {GetAntsButton} from '../components/ants/GetAntsButton';
import {styles} from './_antRace';
import {generateAntWinLikelihoodCalculator} from './../utils/generateAntWinLikelihoodCalculator';
import {gql, useLazyQuery} from '@apollo/client';

// Initialize query to get competing ants
const GET_ANTS = gql`
  query GetAnts {
    ants {
      name
      length
      color
      weight
    }
  }
`;
export function AntRace() {
  const [ants, setAnts] = useState([]);
  const [getAnts, {loading, data}] = useLazyQuery(GET_ANTS, {
    onError() {
      Alert.alert('An error occurred. Please try again later');
    },
    onCompleted() {
      if (data.ants) {
        setAnts(data.ants);
      } else {
        Alert.alert('An error occurred. Please try again later');
      }
    },
  });

  const startRace = () => {
    ants.forEach(ant => {
      function getLikelihood(likelihood) {
        setAnts(oldAnts =>
          oldAnts
            .map(oldAnt =>
              oldAnt.name === ant.name
                ? {
                    ...oldAnt,
                    likelihood: likelihood,
                  }
                : oldAnt,
            )
            .sort((antA, antB) => antB.likelihood - antA.likelihood),
        );
      }
      generateAntWinLikelihoodCalculator()(getLikelihood);
    });
  };

  return (
    <View style={styles.container}>
      {ants.length === 0 ? (
        <GetAntsButton onPress={getAnts} isLoading={loading} />
      ) : (
        <RaceDashboard ants={ants} onRaceStart={startRace} />
      )}
    </View>
  );
}
