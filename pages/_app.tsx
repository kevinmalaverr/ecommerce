import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { fetchData } from 'utils/fetchData'
import { productsToSearchList } from 'utils/transformData'
import { cartReducers } from 'context/reducers'
import Store from 'context/Store'

Store.addReducers(cartReducers)
function App({ Component, pageProps, initialState }): JSX.Element {
  return (
    <Store.Provider initialState={initialState}>
      <Header />
      <Component {...pageProps} />
      <Footer />
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
