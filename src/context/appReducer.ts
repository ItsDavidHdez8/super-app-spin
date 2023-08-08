import {History, HistoryState} from '../interfaces/history';

type AppAction = {type: 'getHistory'; payload: History};

export const appReducer = (state: HistoryState, action: AppAction) => {
  switch (action.type) {
    case 'getHistory':
      console.log('getHistory', state);
      return {
        ...state,
        history: [...state.history, action.payload],
      };

    default:
      break;
  }
};
