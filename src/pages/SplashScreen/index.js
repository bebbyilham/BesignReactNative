import React from 'react';
import {Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Logo />
      <View style={{height: 30}} />
      <Text
        style={{fontSize: 32, color: '#020202', fontFamily: 'Poppins-Medium'}}>
        besign
      </Text>
    </View>
  );
};

export default SplashScreen;
