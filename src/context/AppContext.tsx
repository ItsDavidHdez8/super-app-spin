import {createContext} from 'react';
import {HistoryState} from '../interfaces/history';

export type AppContextProps = {
  appState: HistoryState;
  points: number;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
