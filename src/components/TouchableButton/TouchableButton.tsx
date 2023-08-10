/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Text from '../../../library/components/Text/Text';

type Props = {
  buttonPress: string;
  setButtonPress: (buttonPress: string) => void;
  text: string;
  desc?: string;
  state: string;
  backgroundColor?: string;
  backgroundColorOnPress?: string;
  color?: string;
  colorOnPress?: string;
};

export const TouchableButton = ({
  buttonPress,
  setButtonPress,
  text,
  desc,
  state,
  backgroundColor = '#F5F5F7',
  backgroundColorOnPress = '#E0E0FF',
  color = 'black',
  colorOnPress = '#1723D3',
}: Props) => {
  return (
    <View style={[styles.cardButton, {marginRight: 7}]}>
      <TouchableOpacity
        onPress={() => setButtonPress(state)}
        style={[
          styles.button,
          {
            backgroundColor:
              buttonPress === `${state}`
                ? backgroundColorOnPress
                : backgroundColor,
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: buttonPress === `${state}` ? colorOnPress : color,
              fontWeight: '600',
              lineHeight: 16,
              fontSize: 16,
              letterSpacing: 0.5,
            },
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
      <Text style={styles.titlePoints}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    lineHeight: 16,
    fontSize: 16,
    letterSpacing: 0.5,
  },

  cardButton: {
    alignItems: 'center',
    width: '50%',
  },

  button: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 7,
    height: 45,
    justifyContent: 'center',
  },

  titlePoints: {
    marginTop: 5,
    color: '#69698B',
  },
});
