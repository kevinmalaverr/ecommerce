import Link from 'next/link'
import { useStore } from '@/context/Store'
import { v4 as uuidv4 } from 'uuid'
import CartItem from 'components/CartItem'

const Cart = () => {
  const { state } = useStore()

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity
    const sum = state.cart.reduce(reducer, 0)
    return sum
  }

  const paid = () => {
    const checkout = new WidgetCheckout({
      currency: 'COP',
      amountInCents: handleSumTotal() * 100,
      reference: uuidv4(),
      publicKey: process.env.NEXT_PUBLIC_WOMPI_KEY,
      redirectUrl: process.env.NEXT_PUBLIC_URL,
    })

    checkout.open((result) => {
      console.log(result)
    })
  }

  return (
    <div>
      <main className="container">
        <div className="flex">
          <div className="flex-1">
            <div className="cart__table-head">
              <div className="text-xl">
                <strong>Item</strong>
              </div>
              <div className="text-xl">
                <strong>Cantidad</strong>
              </div>
              <div className="text-xl">
                <strong>Precio</strong>
              </div>
              <div></div>
            </div>
            <div className="cart__content custom-scroll">
              {state.cart.length > 0 ? (
                <div className="cart__items">
                  {state.cart.map((item) => (
                    <CartItem key={item.id} {...item} />
                  ))}
                </div>
              ) : (
                <h3 className="text-color-green">
                  <center>Aún no tienes productos agregados a tu carrito de compras</center>
                </h3>
              )}
            </div>
          </div>
          <div className="cart__total">
            <h2>Total:</h2>
            <p>$ {handleSumTotal()}</p>
            <button onClick={paid} className="btn-1 w-full">
              Pagar
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cart

export async function getStaticProps(): Promise<{ props: object }> {
  return { props: { title: 'My Title', content: '...' } }
}
