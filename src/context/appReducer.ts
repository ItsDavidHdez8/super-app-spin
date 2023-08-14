import {History, HistoryState} from '../interfaces/history';

type AppAction = 
| {type: 'getHistory'; payload: History[]}


export const appReducer = (state: HistoryState, action: AppAction) : HistoryState => {
  switch (action.type) {
    case 'getHistory':
      return {
        ...state,
        history: [...state.history, ...action.payload],
      };

    default:
      return state;
  }
};
