import {View, Image, StyleSheet, Platform} from 'react-native';
import React from 'react';
import Text from '../Text/Text';
import CheckIcon from '../../assets/Benefits/Check';
import ProgressBar from '../atoms/ProgressBar';

type Props = {
  img?: ImageType;
  text: string;
  icon: React.ReactNode;
  imgInteractive: ImagesInteractives;
  count: number;
  total: number;
  unit: Unit;
};

type Unit = 'currency' | 'unit';

type ImageType = {
  product: string;
};

type ImagesInteractives = 'check' | 'line';

export const CardWithInteraction = ({
  img,
  text,
  icon,
  imgInteractive,
  count,
  total,
  unit = 'unit',
}: Props) => {
  const handlerRender = (imgStr: string) => {
    switch (imgStr) {
      case 'check':
        return (
          <>
            <CheckIcon style={styles.checkLogo} size={22} />
            <CheckIcon style={styles.checkLogo} size={22} />
            <CheckIcon style={styles.checkLogo} size={22} />
            <CheckIcon style={styles.checkLogo} size={22} />
            <CheckIcon style={styles.checkLogo} size={22} />
          </>
        );
      case 'line':
        return (
          <View style={styles.progressBar}>
            <ProgressBar
              percent={{currentStep: count, totalStep: total}}
              firstColor="#087D6F"
            />
          </View>
        );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.principalContainer}>
        <Image style={styles.img} source={img} />
        <View style={styles.containerText}>
          <Text variant="content-one-regular" style={styles.text}>
            {text}
          </Text>
        </View>
      </View>
      <View style={styles.secundaryContainer}>
        <View style={styles.iconsContainer}>
          <View style={styles.oxxoIcon}>{icon}</View>
          {handlerRender(imgInteractive)}
        </View>
        <View style={styles.containerSecundaryText}>
          {unit === 'unit' ? (
            <View style={styles.textBoldContainer}>
              <Text style={styles.textBold}>{count}</Text>
              <Text style={styles.textMiddle}>de</Text>
              <Text style={styles.textWithoutBold}> {total}</Text>
            </View>
          ) : (
            <View style={styles.textBoldContainer}>
              <Text style={styles.textBold}>${count}.00</Text>
              <Text style={styles.textMiddle}>de</Text>
              <Text style={styles.textWithoutBold}> ${total}.00</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 350,
    marginTop: 20,
    marginBottom: 80,
    marginRight: 15,
    marginLeft: 3,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.68,
      },
      android: {
        elevation: 11,
      },
    }),
  },

  img: {
    marginLeft: 15,
    marginTop: 7,
  },

  principalContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 120,
    borderRadius: 10,
    zIndex: 998,
    backgroundColor: '#fff',
  },

  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  secundaryContainer: {
    display: 'flex',
    height: 60,
    backgroundColor: '#D6F1ED',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    position: 'absolute',
    top: 112,
    width: '100%',
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },

  containerText: {
    alignSelf: 'center',
    maxWidth: 180,
    marginRight: 40,
    marginLeft: 24,
  },

  containerSecundaryText: {
    alignSelf: 'center',
    maxWidth: 150,
    marginRight: 10,
    marginTop: 8,
  },

  oxxoIcon: {
    marginLeft: 10,
    marginRight: 5,
  },

  checkLogo: {
    marginHorizontal: 5,
  },

  progressBar: {
    width: 110,
    marginLeft: 3,
  },

  text: {
    lineHeight: 20,
  },

  textBold: {
    fontWeight: 'bold',
    marginRight: 3,
    fontSize: 16,
  },

  textWithoutBold: {
    fontSize: 16,
  },

  textBoldContainer: {
    flexDirection: 'row',
  },

  textMiddle: {
    marginTop: 2,
  },
});
