/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/Home';
import {Benefits} from '../screens/Benefits';
import {Wallet} from '../screens/Wallet';
import {Account} from '../screens/Account';
import HomeTabIcon from '../assets/Home/HomeTab';
import HomeTabNotFocusedIcon from '../assets/Home/HomeTabNotFocused';
import BenefitsTabIcon from '../assets/Home/BenefitsTab';
import BenefitsTabNotFocusedIcon from '../assets/Home/BenefitsTabNotFocused';
import WalletTabIcon from '../assets/Home/WalletTab';
import AccountTabNotFocusedIcon from '../assets/Home/AccountTabNotFocused';
import AccountTabIcon from '../assets/Home/AccountTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChangePoints from '../screens/ChangePoints';
import {Balance} from '../screens/Balance';
import NavBar from '../../library/components/NavBar/NavBar';
import {useCustomNavigation} from '../hooks/useCustomNavigation';
import {IMAGES} from '../utils/constants';
import CreateAccount from '../screens/CreateAccount';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            lineHeight: 16,
            fontWeight: '600',
            color: '#05053D',
          },
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeTabIcon size={50} />
            ) : (
              <HomeTabNotFocusedIcon size={50} />
            ),
        }}
      />
      <Tab.Screen
        component={Benefits}
        name="Beneficios"
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            lineHeight: 16,
            fontWeight: '600',
            color: '#05053D',
          },
          tabBarLabel: 'Beneficios',
          headerShown: false,
          tabBarIcon: ({focused}) =>
            !focused ? (
              <BenefitsTabIcon size={60} />
            ) : (
              <BenefitsTabNotFocusedIcon size={60} />
            ),
        }}
      />
      <Tab.Screen
        component={Wallet}
        name="Cartera"
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            lineHeight: 16,
            fontWeight: '600',
            color: '#05053D',
          },
          tabBarLabel: 'Cartera',
          headerShown: false,
          tabBarIcon: () => <WalletTabIcon size={24} />,
        }}
      />
      <Tab.Screen
        component={Account}
        name="Cuenta"
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            lineHeight: 16,
            fontWeight: '600',
            color: '#05053D',
          },
          tabBarLabel: 'Cuenta',
          headerShown: false,
          tabBarIcon: ({focused}) =>
            !focused ? (
              <AccountTabIcon size={60} />
            ) : (
              <AccountTabNotFocusedIcon size={60} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigator = () => {
  const navigation = useCustomNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Navigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePoints"
        component={ChangePoints}
        options={{
          header: () => (
            <NavBar
              variant={'primary'}
              title={'Cambia tus puntos'}
              leftSection={
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={IMAGES.leftArrow} />
                  </TouchableOpacity>
                </View>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name="Balance"
        component={Balance}
        options={{
          header: () => (
            <NavBar
              variant={'primary'}
              title={'Cambia tus puntos'}
              leftSection={
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={IMAGES.leftArrow} />
                  </TouchableOpacity>
                </View>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          header: () => (
            <NavBar
              variant={'primary'}
              title={'Cambia tus puntos'}
              leftSection={
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={IMAGES.leftArrow} />
                  </TouchableOpacity>
                </View>
              }
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
