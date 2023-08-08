export interface History {
  entity: string;
  date: string;
  points: number;
  operation: string;
  transactionNo: string;
  id: number;
}

export interface HistoryState {
  history: History[];
}
