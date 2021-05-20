import '../styles/globals.css'
import '../styles/components/CartItem.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { fetchData } from 'utils/fetchData'
import { productsToSearchList } from 'utils/transformData'
import { cartReducers } from 'context/reducers'
import Store, { useStore } from 'context/Store'
import { useEffect } from 'react'

Store.addReducers(cartReducers)

const LoadStorage = ({ children }) => {
  const { dispatch } = useStore()
  useEffect(() => {
    dispatch({ type: '@cart/load' })
  }, [])

  return children
}
function App({ Component, pageProps, initialState }): JSX.Element {
  return (
    <Store.Provider initialState={initialState}>
      <LoadStorage>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </LoadStorage>
    </Store.Provider>
  )
}

App.getInitialProps = async () => {
  let data = await fetchData('products')
  data = data.map((product) => ({ ...product, price: parseInt(product.price) }))
  const searchList = productsToSearchList(data)
  return { initialState: { products: data, searchList, cart: [] } }
}

export default App
