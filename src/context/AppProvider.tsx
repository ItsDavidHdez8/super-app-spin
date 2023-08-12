import React, {useState, useReducer} from 'react';
import {AppContext} from './AppContext';
import {HistoryState} from '../interfaces/history';
import {appReducer} from './appReducer';

const INITIAL_STATE: HistoryState = {
  history: [],
};

interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

export function AppProvider({children}: AppProviderProps) {
  const [appState, dispatch] = useReducer(appReducer, INITIAL_STATE);
  const [points, setPoints] = useState(1200);
  return (
    <AppContext.Provider
      value={{
        appState,
        points,
      }}>
      {children}
    </AppContext.Provider>
  );
}
