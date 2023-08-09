import React from 'react';
import {
  View,
  Image,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Text from '../../../library/components/Text/Text';
import RightArrow from '../../assets/ChangePoints/RightArrow';

type Props = {
  img: Images;
  brand: string;
  catalog: string;
  handlerFunc?: () => void;
};

type Images = {
  brand: string;
};

export const CardShowBrand = ({img, brand, catalog, handlerFunc}: Props) => {
  return (
    <View style={styles.parent}>
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <Image style={styles.img} source={img} />
          <View>
            <Text style={styles.title}>{brand}</Text>
            <Text style={styles.catalog}>{catalog}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handlerFunc}>
          <RightArrow size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    alignSelf: 'center',
  },

  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 390,
    backgroundColor: '#fff',
    marginTop: 10,
    height: 70,
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
  title: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 4,
  },

  catalog: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#69698B',
  },

  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    marginHorizontal: 16,
  },

  button: {
    marginHorizontal: 15,
    alignSelf: 'center',
  },
});
