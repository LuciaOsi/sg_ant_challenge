/**
 * @module AntsList
 * @description Renders a styled list of ants
 */

import React from 'react';
import PropTypes from 'prop-types';
import {View, FlatList} from 'react-native';
import {Ant, ANT_PROPERTIES} from './Ant';
import {styles} from './_antsList';
import {raceIsFinished} from '../../utils/raceStatus.js';
export function AntsList({isStarted, ants, ...otherProps}) {
  const isFinished = raceIsFinished(ants);
  return (
    <View style={styles.antsContainer}>
      <FlatList
        {...otherProps}
        extraData={ants}
        horizontal={false}
        data={ants}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ant => ant.name}
        ItemSeparatorComponent={() => <View style={styles.antSeparator} />}
        renderItem={({item, index}) => (
          <Ant
            {...item}
            key={item.name}
            index={index}
            isStarted={isStarted}
            isFinished={isFinished}
          />
        )}
      />
    </View>
  );
}

AntsList.propTypes = {
  isStarted: PropTypes.bool.isRequired,
  ants: PropTypes.arrayOf(
    PropTypes.shape({
      ...ANT_PROPERTIES,
    }),
  ).isRequired,
};
