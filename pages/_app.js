import AppProvider from '../utils/provider';
import '../styles/globals.css';
import LeftNav from '../components/LeftNav';

function MyApp({ Component, pageProps }) {

  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
