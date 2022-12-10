import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import {ImageDummy1} from '../../../assets';

const ItemListA = ({image}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 8,
        alignItems: 'center',
      }}>
      <Image
        source={image}
        style={{
          width: 60,
          height: 60,
          borderRadius: 8,
          overflow: 'hidden',
          marginRight: 12,
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontFamily: 'Poppins-Reqular',
            fontSize: 16,
            color: '#020202',
          }}>
          New 1
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 13,
            color: '#8D92A3',
          }}>
          2001
        </Text>
      </View>
      <Rating />
    </View>
  );
};

export default ItemListA;

const styles = StyleSheet.create({});
