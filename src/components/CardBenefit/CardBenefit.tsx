import {StyleSheet, View} from 'react-native';
import React from 'react';
import {benefitsStyles} from '../../styles/Loyalty/Benefits/Benefits.styles';
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
      <View style={benefitsStyles.titleContainerSection}>
        <Text style={benefitsStyles.titleSection}>{title}</Text>
        {showMore ? (
          <Text variant="text-link-one" style={styles.text}>
            Mostrar más
          </Text>
        ) : null}
      </View>
      <Text variant="content-one-medium">{desc}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
  },
});
