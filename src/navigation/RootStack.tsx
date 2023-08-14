import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Navigation } from './Navigation'
import { MovemenHistoryScreen } from '../screens/MovemenHistoryScreen'
import ChangePoints from '../screens/ChangePoints'
import { History } from '../interfaces/history'
import { RootStackParamsList } from '../interfaces/navigation'



const RootStack = createNativeStackNavigator<RootStackParamsList>()

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
