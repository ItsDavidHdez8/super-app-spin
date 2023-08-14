import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Navigation } from './Navigation'
import { MovemenHistoryScreen } from '../screens/MovemenHistoryScreen'
import ChangePoints from '../screens/ChangePoints'

export type RootStackParams = {
  HomeNavigation : undefined,
  MovemenHistory : undefined,
  ChangePoints : undefined
}

const RootStack = createNativeStackNavigator<RootStackParams>()

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <RootStack.Screen name='HomeNavigation' component={Navigation}/>
      <RootStack.Screen name='MovemenHistory' component={MovemenHistoryScreen}/>
      <RootStack.Screen name="ChangePoints"component={ChangePoints}
      />
    </RootStack.Navigator>
  )
}
