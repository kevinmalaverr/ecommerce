export const cartReducers = {
  '@cart/add': (state, payload) => ({
    ...state,
    cart: [...state.cart, payload],
  }),

  '@cart/remove': (state, action) => ({}),
}
