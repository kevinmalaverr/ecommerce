import React from 'react'

interface Context {}

class Context {
  state
  addToCart
  removeFromCart
}

const AppContext = React.createContext(new Context())

export default AppContext
