
import React, {useState, useReducer, useEffect} from 'react';
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

  
  const [points, setPoints] = useState(1000);
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
