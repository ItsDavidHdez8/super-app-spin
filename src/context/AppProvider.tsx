import React, {useReducer} from 'react';
import {AppContext} from './AppContext';
import {HistoryState} from '../interfaces/history';
import {appReducer} from './appReducer';

const INITIAL_STATE: HistoryState = {
  history: [],
};

console.log(INITIAL_STATE);
interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

export function AppProvider({children}: AppProviderProps) {
  const [appState, dispatch] = useReducer(appReducer, INITIAL_STATE);
  return (
    <AppContext.Provider
      value={{
        appState,
      }}>
      {children}
    </AppContext.Provider>
  );
}