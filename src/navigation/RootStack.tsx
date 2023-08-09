import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Navigation } from './Navigation'
import { MovemenHistoryScreen } from '../screens/MovemenHistoryScreen'

export type RootStackParams = {
  HomeNavigation : undefined,
  MovemenHistory : undefined
}

const RootStack = createNativeStackNavigator<RootStackParams>()

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name='HomeNavigation' component={Navigation}/>
      <RootStack.Screen name='MovemenHistory' component={MovemenHistoryScreen}/>
    </RootStack.Navigator>
  )
}
