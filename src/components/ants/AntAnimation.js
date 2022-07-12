/**
 * @module AntAnimation
 * @description renders 3 ants with its index. They autoscroll horizontally
 */
import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './_antAnimation';
import Carousel from 'react-native-snap-carousel';

export function AntAnimation() {
  return (
    <Carousel
      loop={true}
      data={['1', '2', '3']}
      renderItem={({item}) => (
        <View id={item} style={styles.container}>
          <Text>{item}</Text>
          <Image
            id={item}
            style={styles.image}
            source={require('./../../assets/images/ant.png')}
          />
        </View>
      )}
      sliderWidth={390}
      itemWidth={390}
      autoplay={true}
      autoplayDelay={500}
      autoplayInterval={2000}
    />
  );
}
