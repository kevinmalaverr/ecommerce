import { useState } from 'react'

interface useInitialStateReturn {
  state: object
  addToCart: Function
  removeFromCart: Function
}

const useInitialState = (initialState): useInitialStateReturn => {
  const [state, setState] = useState(initialState)

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    })
  }

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item) => item.id !== payload.id),
    })
  }

  return {
    state,
    addToCart,
    removeFromCart,
  }
}

export default useInitialState
