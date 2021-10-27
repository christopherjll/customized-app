import * as React from "react";
import { initialState } from "./mockState";
import { ReducerContext } from "./type";
import { reducer } from "./reducer";

const AppContext = React.createContext<ReducerContext>({
  state: initialState,
  dispatch: () => null,
});

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error("No Context!!");
  }

  return context;
};

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
