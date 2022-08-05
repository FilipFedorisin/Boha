import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import Modal from 'src/components/Modal';
import Navbar from 'src/components/Navbar';

import store from 'src/redux/store';

import 'src/styles/gallery.css';
import 'src/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Modal />
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
