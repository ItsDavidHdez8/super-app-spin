/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
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
import AccountTabIcon from '../assets/Home/AccountTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChangePoints from '../screens/ChangePoints';
import {Balance} from '../screens/Balance';

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
          tabBarIcon: () => <AccountTabIcon size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigator = () => {
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
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Balance"
        component={Balance}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
