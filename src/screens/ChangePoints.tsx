import {StyleSheet} from 'react-native';
import React from 'react';
import Text from '../../library/components/Text/Text';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CardShowBrand} from '../components/CardShowBrand/CardShowBrand';
import {IMAGES} from '../utils/constants';
import {useCustomNavigation} from '../hooks/useCustomNavigation';

const ChangePoints = () => {
  const navigation = useCustomNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Elige la marca aliada en la que quieres usar tus puntos
      </Text>
      <CardShowBrand
        img={IMAGES.volarisLogo}
        brand="Volaris"
        catalog="Movilidad"
        handlerFunc={() => navigation.navigate('Balance')}
      />
      <CardShowBrand
        img={IMAGES.smartFitLogo}
        brand="Smart Fit"
        catalog="Deportes"
        handlerFunc={() => navigation.navigate('Balance')}
      />
      <CardShowBrand
        img={IMAGES.vixLogo}
        brand="VIX"
        catalog="Entretenimiento"
        handlerFunc={() => navigation.navigate('Balance')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: -40,
  },

  title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
  },
});

export default ChangePoints;
