import 'react-native-gesture-handler';
import React from 'react';
import ThemeProvider from './library/themes/ThemeProvider';
import {NavigationContainer} from '@react-navigation/native';
import {AppProvider} from './src/context/AppProvider';
import { RootStackNavigator } from './src/navigation/RootStack';
import {Modal} from './src';


const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <ThemeProvider>
          <RootStackNavigator/>
          <Modal.Component />
        </ThemeProvider>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
