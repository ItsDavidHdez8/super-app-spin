import {createContext} from 'react';
import {HistoryState} from '../interfaces/history';

export type AppContextProps = {
  appState: HistoryState;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
