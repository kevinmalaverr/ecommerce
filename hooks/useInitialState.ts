import { useState } from 'react';

const useInitialState = ():Object => {
  const [state, setState] = useState({
    cart: [
      {id:1,name: 'nombre'},
      {id:2,name: 'otro nombre'}
    ],
  });

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(item=>item.id !== payload.id)
    });
  };

  return {
    state,
    addToCart,
    removeFromCart
  }
};

export default useInitialState;
