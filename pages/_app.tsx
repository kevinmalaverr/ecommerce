import { AppProps} from 'next/app'
import '../styles/globals.css';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const intialState = useInitialState();
  return (
    <AppContext.Provider value={intialState}>
      <Header />
      <Component {...pageProps} />
      <Footer></Footer>
    </AppContext.Provider>
  );
}

export default MyApp;
