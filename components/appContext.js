import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
        'parcelsDelivered': 0,
        'moneyEarned': 0,
    }

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_PARCELS_DELIVERED':
      return {
        ...state,
        parcelsDelivered: state.parcelsDelivered + 1
      };
    case 'INCREMENT_MONEY_EARNED':
        return {
          ...state,
          moneyEarned: state.moneyEarned + action.payload
        };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);