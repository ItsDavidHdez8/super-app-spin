import 'react-native-gesture-handler';
import React from 'react';
import ThemeProvider from './library/themes/ThemeProvider';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {AppProvider} from './src/context/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <ThemeProvider>
          <Navigation />
        </ThemeProvider>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
