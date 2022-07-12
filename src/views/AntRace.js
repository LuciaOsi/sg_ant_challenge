/**
 * @module AntRace
 * @description renders the GetAntsButton component if the ants information is not loaded,
 * otherwise if renders the RaceDashboard component in order show the list of ants.
 */
import React, {useState, useCallback, useRef, useEffect} from 'react';
import {View, Alert, FlatList, Image, Dimensions, Text, Animated} from 'react-native';
import {RaceDashboard} from './../components/race/RaceDashboard';
import {GetAntsButton} from '../components/ants/GetAntsButton';
import {AntAnimation} from '../components/ants/AntAnimation';
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
  // const { width } = Dimensions.get('window');
  const [activeAnt, setActiveAnt] = useState(0);
  const flatListRef = useRef(null);
  const [getAnts, {loading}] = useLazyQuery(GET_ANTS, {
    onError() {
      Alert.alert('An error occurred. Please try again later');
    },
    onCompleted: data => {
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
        setAnts(previousAnts =>
          previousAnts
            .map(previousAnt =>
              previousAnt.name === ant.name
                ? {
                    ...previousAnt,
                    likelihood: likelihood,
                  }
                : previousAnt,
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
        <View style={styles.animationContainer}>
          <GetAntsButton onPress={getAnts} isLoading={loading} />
          <View style={styles.animation}>
            <AntAnimation />
          </View>
        </View>
      ) : (
        <RaceDashboard ants={ants} onRaceStart={startRace} />
      )}
    </View>
  );
}
