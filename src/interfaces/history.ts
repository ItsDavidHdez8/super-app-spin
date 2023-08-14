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

export interface HistorySection {
  title: string,
  data : History[]
}

export interface HistoryListState {
  step : number,
  allMovements : History[],
  sections : HistorySection[]
}
