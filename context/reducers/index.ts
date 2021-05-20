import { loadItems, addItem, removeItem, updateItem } from '@/utils/cart'

export const cartReducers = {
  '@cart/load': loadItems,

  '@cart/add': addItem,

  '@cart/remove': removeItem,

  '@cart/increment': (state, payload) =>
    updateItem(state, payload, (item) => ({
      ...item,
      quantity: item.quantity + 1,
    })),

  '@cart/decrement': (state, payload) =>
    updateItem(state, payload, (item) => ({
      ...item,
      quantity: item.quantity - 1,
    })),
}
