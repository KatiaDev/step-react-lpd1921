import { createContext, useReducer } from "react";

export const CounterContext = createContext();

const initialState = {
  counter: 0,
};

const CounterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };

    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CounterReducer, initialState);

  const value = { state, dispatch };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
