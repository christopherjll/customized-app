import { GraphState, Action } from "./type";

export const reducer = (state: GraphState, action: Action) => {
  switch (action.type) {
    case "SET_TYPE":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            type: action.payload.type,
          },
        },
      };
    case "SET_VISIBILITY":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            visibility: false,
          },
        },
      };
    default:
      return state;
  }
};
