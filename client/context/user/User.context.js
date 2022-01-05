import React from 'react'
import { getContext } from '../Context'
import { LOAD_USER } from './User.Constants'

const { Context, ContextProvider } = getContext(null)

const initialState = {
  data: [],
  loaded: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        data: action.payload.data, loaded: true
        }
  }
}

const UserProvider = ({ children }) => (
  <ContextProvider reducer={reducer} initialState={initialState}>
    {children}
  </ContextProvider>
)

const UserContext = Context

export { UserProvider, UserContext }
