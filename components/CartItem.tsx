import React from 'react'
import Trash from './icons/Trash'
import Minus from './icons/Minus'
import Plus from './icons/Plus'
import { useStore } from '@/context/Store'

const CartItem = (props) => {
  const { name, price, images, quantity } = props

  const { dispatch } = useStore()

  const totalPrice = parseInt(price) * quantity

  const incrementItem = () => {
    dispatch({ type: '@cart/increment', payload: props.id })
  }

  const decrementItem = () => {
    dispatch({ type: '@cart/decrement', payload: props.id })
  }

  const removeItem = () => {
    dispatch({ type: '@cart/remove', payload: props.id })
  }

  return (
    <div className="cart-item">
      <div className="cart-item__description">
        <div>
          <img className="cart-item__img" src={images[0].url} alt={name} />
        </div>
        <div>
          <div className="text-xl">{name}</div>
        </div>
      </div>
      <div className="cart-item__qty">
        <button
          className="btn btn--hover-dark btn--rounded cart-item__btn-qty"
          onClick={decrementItem}
          disabled={quantity === 1}
        >
          <Minus fontSize="1.8rem" />
        </button>
        <div>{quantity}</div>
        <button
          className="btn btn--hover-dark btn--rounded cart-item__btn-qty"
          onClick={incrementItem}
        >
          <Plus fontSize="1.8rem" />
        </button>
      </div>
      <div className="cart-item__price">$ {totalPrice}</div>
      <div className="cart-item__remove">
        <button className="btn btn--hover-dark btn--rounded" onClick={removeItem}>
          <Trash fontSize="1.2rem" />
        </button>
      </div>
    </div>
  )
}

export default CartItem
