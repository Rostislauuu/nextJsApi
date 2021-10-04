import React from 'react';
import Head from "next/head";

import Header from '../components/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
          <title>Ped Project</title>
      </Head>

      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
