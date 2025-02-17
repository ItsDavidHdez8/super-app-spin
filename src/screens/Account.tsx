import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import Text from '../../library/components/Text/Text';
import Tag from '../../library/components/atoms/Tag';
import LogoutIcon from '../assets/Account/LogoutIcon';
import {IMAGES} from '../utils/constants';
import {AppContext} from '../context/AppContext';
import {LineSeparator} from '../components/LineSeparator/LineSeparator';
import Modal from '../../library/components/atoms/Modal';
import {useCustomNavigation} from '../hooks/useCustomNavigation';

export const Account = () => {
  const {points} = useContext(AppContext);
  const navigation = useCustomNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cuenta</Text>
      <View style={styles.header}>
        <View>
          <Text style={styles.name}>Maria Florencia</Text>
          <Tag
            leftIcon={require('../assets/Benefits/TagIconPoints.png')}
            text={`${points.toLocaleString('en')} puntos`}
            variant="points"
            size="large"
          />
        </View>
        <View style={styles.img}>
          <Image source={IMAGES.spinLogoAccount} />
        </View>
      </View>
      <Text style={styles.others}>Otras acciones</Text>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Modal.show({
              title: '¿Quieres cerrar tu sesión?',
              variant: 'two-button',
              description:
                'Recuerda que puedes volver a entrar a la app cuando quieras',
              firstButtonProps: {
                text: 'Sí, cerrar sesión',
                onPress: () => navigation.navigate('Home'),
                enableCloseOnPress: true,
              },
              secondButtonProps: {
                text: 'En otro momento',
                onPress: () => navigation.navigate('CreateAccount'),
                enableCloseOnPress: true,
              },
            });
          }}>
          <LogoutIcon size={24} style={styles.icon} />
          <Text style={styles.logoutText}>Cierra sesión</Text>
        </TouchableOpacity>
      </View>
      <LineSeparator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    height: '100%',
  },

  title: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.4,
    marginBottom: 38,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  name: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    letterSpacing: 0.4,
    marginBottom: 10,
  },

  img: {
    marginTop: -28,
  },

  button: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 25,
  },

  icon: {
    marginLeft: 5,
    marginRight: 15,
    marginBottom: 15,
  },

  others: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.2,
  },

  logoutText: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '400',
    alignSelf: 'center',
    marginBottom: 15,
  },
});
