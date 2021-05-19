import React, { useReducer, useContext } from 'react'
import { UseStoreReturn } from './types'

const Context = React.createContext({})
let reducers = {}

const reducer = (state, action) => {
  console.log(reducers)
  if (!reducers[action.type]) {
    throw new Error(`action type "${action.type}" doesn't exist`)
  }

  return reducers[action.type](state, action.payload)
}

const Store = {
  addReducers(...newReducers) {
    for (const newReducer of newReducers) {
      reducers = { ...reducers, ...newReducer }
    }
  },

  Provider({ children, initialState }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  },
}

export const useStore = (): UseStoreReturn => useContext(Context)

export default Store
