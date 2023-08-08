import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from '../../../library/components/Text/Text';

type Props = {
  images: ImagesProps;
  title: string;
  desc: string;
  showMore?: boolean;
  children: string | JSX.Element | JSX.Element[];
};

type ImagesProps = {
  product: string;
};

export const CardBenefit = ({
  children,
  title,
  desc,
  showMore = true,
}: Props) => {
  return (
    <View>
      <View style={styles.titleContainerSection}>
        <Text style={styles.titleSection}>{title}</Text>
        {showMore ? (
          <Text variant="text-link-one" style={styles.text}>
            Mostrar más
          </Text>
        ) : null}
      </View>
      <Text variant="content-one-medium" style={styles.desc}>
        {desc}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    letterSpacing: 0.2,
  },

  titleContainerSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
    marginBottom: 10,
  },

  titleSection: {
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'Poppins',
    marginBottom: 10,
    letterSpacing: 0.6,
  },

  desc: {
    fontSize: 17,
  },
});
