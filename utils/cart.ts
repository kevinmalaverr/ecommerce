function findItem(arr, id) {
  return arr.findIndex((item) => item.id === id)
}

/**
 * @param {Object} state
 * @param {number} id
 * @returns {Object}
 */
export function removeItem(state, id) {
  const itemIndex = findItem(state.cart, id)
  const newState = {
    ...state,
    cart: [...state.cart.slice(0, itemIndex), ...state.cart.slice(itemIndex + 1)],
  }
  setLocalStorage(newState.cart)
  return newState
}

/**
 *
 * @param {Object} state
 * @param {number} id
 * @param {(item: Object)=>Object} update
 * @returns
 */
export function updateItem(state, id, update) {
  const itemIndex = findItem(state.cart, id)

  const newState = {
    ...state,
    cart: [
      ...state.cart.slice(0, itemIndex),
      update(state.cart[itemIndex]),
      ...state.cart.slice(itemIndex + 1),
    ],
  }

  setLocalStorage(newState.cart)

  return newState
}

/**
 *
 * @param {Object} state
 * @param {Object} item
 * @returns {Object}
 */
export function addItem(state, item) {
  const itemIndex = findItem(state.cart, item.id)

  if (itemIndex >= 0) {
    const newState = {
      ...state,
      cart: [
        ...state.cart.slice(0, itemIndex),
        { ...item, quantity: state.cart[itemIndex].quantity + 1 },
        ...state.cart.slice(itemIndex + 1),
      ],
    }
    setLocalStorage(newState.cart)
    return newState
  }

  const newState = {
    ...state,
    cart: [...state.cart, { ...item, quantity: 1 }],
  }
  setLocalStorage(newState.cart)
  return newState
}

function setLocalStorage(cart) {
  window.localStorage.setItem('cart', JSON.stringify(cart))
}

export function loadItems(state) {
  const cart = JSON.parse(window.localStorage.getItem('cart')) || []
  return { ...state, cart }
}
