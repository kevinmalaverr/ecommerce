import Link from 'next/link'
import { useStore } from '@/context/Store'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useStore()

  console.log(cart)

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price
    const sum = cart.reduce(reducer, 0)
    return sum
  }

  const paid = () => {
    const checkout = new WidgetCheckout({
      currency: 'COP',
      amountInCents: handleSumTotal() * 100,
      reference: uuidv4(),
      publicKey: process.env.NEXT_PUBLIC_WOMPI_KEY, // Opcional
    })

    checkout.open((result) => {
      console.log(result)
    })
  }

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3>}
        {cart.map((item) => (
          <div key={item.id} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
            <button type="button" onClick={() => dispatch({ type: '@cart/remove', payload: item })}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
          <Link href="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
      <button onClick={paid}>pagar</button>
    </div>
  )
}

export default Cart

export async function getStaticProps(): Promise<{ props: object }> {
  return { props: { title: 'My Title', content: '...' } }
}
