export interface GraphData {
  time: string;
  value: number;
}

export interface Graph {
  visibility: boolean;
  type: string;
  title: string;
  data: GraphData[];
}

export interface GraphState {
  data: { [key: string]: Graph };
  layouts: any;
  breakpoint: string;
}

export enum GraphAction {
  SET_TYPE = "SET_TYPE",
  SET_LAYOUT = "SET_LAYOUT",
  SET_VISIBILITY = "SET_VISIBILITY",
}

export interface Action {
  type: GraphAction;
  payload: {
    id: string;
    type: string;
  };
}

export interface ReducerContext {
  state: GraphState;
  dispatch: React.Dispatch<any>;
}
