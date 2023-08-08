import {SafeAreaView, View} from 'react-native';
import React from 'react';
import MobileHome from '../assets/Home/Mobile';
import {homeStyles} from '../styles/Loyalty/Home/Home.styles';
import Text from '../../library/Text/Text';

export const Home = () => {
  return (
    <SafeAreaView style={homeStyles.container}>
      <View style={homeStyles.iconContainer}>
        <MobileHome />
      </View>
      <Text style={homeStyles.title}>Pantalla Home</Text>
    </SafeAreaView>
  );
};
