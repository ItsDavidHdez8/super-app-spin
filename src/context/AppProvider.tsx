import React, {useEffect, useReducer} from 'react';
import {AppContext} from './AppContext';
import {HistoryState} from '../interfaces/history';
import {appReducer} from './appReducer';
import { useFetch } from '../hooks/useFetch';

export const INITIAL_STATE: HistoryState = {
  history: [],
};

interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

export function AppProvider({children}: AppProviderProps) {
  const [appState, dispatch] = useReducer(appReducer, INITIAL_STATE)

  const {fetchHistory} = useFetch()

  useEffect(() => {
    getHistory()
  }, [])
  
  const getHistory = async () => {
    const history = await fetchHistory()
    dispatch({type: "getHistory", payload: history})
  }

  return (
    <AppContext.Provider
      value={{
        appState,
      }}>
      {children}
    </AppContext.Provider>
  );
}
