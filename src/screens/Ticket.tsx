import { StackScreenProps } from '@react-navigation/stack';
import React, { useMemo } from 'react';
import { Image, ScrollView, View } from 'react-native';
import Card from "../../library/components/Card/Card";
import Text from '../../library/components/Text/Text';
import useTheme from '../../library/hooks/useTheme';



export type Props = StackScreenProps<RootStackParamsList, 'Ticket'>;


const MovementDetail = ({navigation, route}: Props) => {
  const {movement} = route.params;

  const {colors} = useTheme();

  const startDate = useMemo(() => {
    const movemntDate = new Date(movement.date);
    return new Date(
      movemntDate.setMonth(movemntDate.getMonth() + 1),
    ).toLocaleDateString();
  }, []);

  return (
    <ScrollView
      testID="detail-container"
      style={[style.container, {backgroundColor: colors.surface_primary}]}
      contentContainerStyle={{paddingTop: 40, paddingBottom: 16}}>
      <View style={{padding: 16}}>
        <Card
          style={{
            position: 'relative',
            paddingHorizontal: 8,
            paddingVertical: 8,
          }}
          contentStyle={{alignItems: 'center'}}>
          <Card
            style={style.imageContainer}
            contentStyle={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
              testID="partner-logo"
              style={style.logo}
              source={require('../../../assets/partner_logo.png')}
            />
          </Card>
          <View
            style={style.entityInfoContainer}>
            <Text variant="headline-medium">{movement.entity}</Text>
            <View
              style={[
                style.gainsLabel,
                {backgroundColor: colors.surface_secondary},
              ]}>
              <Text variant="default-body">
                En esta compra{' '}
                {movement.operation == 'earned' ? 'ganaste' : 'usaste'}:
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text variant="headline-large" style={{color: colors.ui_active}}>
                {movement.operation == 'earned' ? '+ ' : '- '}
              </Text>
              <Text variant="headline-extra-large">{movement.points}</Text>
            </View>
          </View>
        </Card>
      </View>
      <View
        style={[
          style.infoConainer,
          {borderBottomColor: colors.stroke_secondary},
        ]}>
        <View style={style.infoContainer}>
          <Text variant="label-default">Monto total:</Text>
          <Text testID="total-amount" variant="label-default-bold">
            ${(movement.points / 10).toFixed(2)}
          </Text>
        </View>
        <View style={style.infoContainer}>
          <Text variant="label-default">Fecha:</Text>
          <Text testID="date" variant="label-default-bold">
            {new Date(movement.date).toLocaleDateString()}
          </Text>
        </View>
        {movement.operation == 'earned' && (
          <View style={style.infoContainer}>
            <Text variant="label-default">Úsalos desde el:</Text>
            <Text variant="label-default-bold">{startDate}</Text>
          </View>
        )}
      </View>
      <View style={{paddingVertical: 16, gap: 8, padding: 16}}>
        <Text variant="label-default">Número de transacción</Text>
        <Text
          variant="label-default-bold"
          style={{color: colors.content_tertiary}}>
          {movement.transactionNo}
        </Text>
      </View>
    </ScrollView>
  );
};

export default MovementDetail;

import { StyleSheet } from 'react-native';
import { RootStackParamsList } from '../interfaces/navigation';

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  entityInfoContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    marginTop: 36,
  },
  imageContainer: {
    height: 72,
    width: 72,
    borderRadius: 100,
    position: 'absolute',
    top: -43,
  },
  points: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    width: '100%',
    marginTop: 30,
  },
  logo: {
    height: 66,
    width: 66,
    borderRadius: 100,
  },
  gainsLabel: {
    height: 40,
    width: '85%',
    borderRadius: 16,
    marginTop: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoConainer: {
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    gap: 8,
    paddingBottom: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
});