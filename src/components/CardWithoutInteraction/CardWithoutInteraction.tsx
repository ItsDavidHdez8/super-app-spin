import {View, StyleSheet, Platform, Image} from 'react-native';
import React from 'react';
import Tag from '../../../library/components/atoms/Tag';
import Text from '../../../library/components/Text/Text';

type Props = {
  icon: React.ReactNode;
  points: number;
  img: ImageType;
  title: string;
  date: string;
};

type ImageType = {
  product: string;
};

export const CardWithoutInteraction = ({
  icon,
  points,
  img,
  title,
  date,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {icon}
        <View style={styles.tag}>
          <Tag text={`+ ${points} puntos`} variant="points" size="large" />
        </View>
      </View>
      <View style={styles.content}>
        <Image style={styles.img} source={img} />
        <Text style={styles.title}>{title}</Text>
        <View>
          <Text style={styles.date}>Hasta el {date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '50%',
    height: 215,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#fefefe',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 1,
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
    alignSelf: 'center',
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    marginLeft: 2,
  },

  tag: {
    marginLeft: 12,
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    marginTop: 12,
  },

  date: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: '#69698B',
    marginTop: 6,
  },
});
