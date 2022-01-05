import React, { ReactElement, createContext, useReducer, Reducer } from 'react'

const getContext = (defaultValue) => {
  const Context = createContext(defaultValue)
  function ContextProvider({
    reducer,
    initialState,
    children,
  }) {
    const [state, dispatch] = useReducer(reducer, initialState || defaultValue)

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  }

  const ContextConsumer = Context.Consumer
  return { Context, ContextProvider, ContextConsumer }
}

export { getContext }
