import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import React from 'react';

type Props = {
  style?: StyleProp<ViewStyle>;
};

export const LineSeparator = ({style}: Props) => {
  return <View style={[styles.lineSeparator, style]} />;
};

const styles = StyleSheet.create({
  lineSeparator: {
    width: 1000,
    borderColor: '#E6E6EC',
    height: 1,
    borderWidth: 1,
    marginBottom: 25,
    marginLeft: -20,
    marginRight: 100,
  },
});
