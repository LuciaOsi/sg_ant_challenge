/**
 * @module AntRace
 * @description main module where the Ants Race will handle the views
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
      // callback to pass down to the likelihood calculator
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

      // this callback needs to be different for each ant, so it is calculated inside the foreach
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
