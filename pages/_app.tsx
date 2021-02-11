import { AppProps } from 'next/app'
import '../styles/globals.css'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { fetchData } from 'utils/fetchData'
import cart from './cart'

function App({ Component, pageProps, initialState }) {
  const intialState = useInitialState(initialState)
  return (
    <AppContext.Provider value={intialState}>
      <Header />
      <Component {...pageProps} />
      <Footer></Footer>
    </AppContext.Provider>
  )
}
App.getInitialProps = async () => {
  const data = await fetchData('products')
  return { initialState: { products: data, cart: [] } }
}

export default App
