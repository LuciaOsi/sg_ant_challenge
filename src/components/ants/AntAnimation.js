/**
 * @module AntAnimation
 * @description
 */
import React, {useCallback, useRef} from 'react';
import {View, FlatList, Image, Text} from 'react-native';
import {styles} from './_antAnimation';

export function AntAnimation() {
  const flatListRef = useRef(null);

  const onAntChange = useCallback(({viewableItems}) => {
    if (flatListRef.current) {
      if (viewableItems[0].index === 2) {
        setTimeout(function () {
          if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
              animated: true,
              index: 0,
              viewPosition: 0,
            });
      }}, 2000);
      } else {
        setTimeout(function () {
          if (flatListRef.current) {
            flatListRef.current.scrollToIndex({
              animated: true,
            index: viewableItems[0].index + 1,
            viewPosition: viewableItems[0].index + 1,
            });
        }  
        }, 2000);
      }
    }
  }, []);
  return (
    <FlatList
      data={['1', '2', '3']}
      horizontal
      snapToInterval={390}
      snapToAlignment={'center'}
      onViewableItemsChanged={onAntChange}
      ref={flatListRef}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
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
    />
  );
}
