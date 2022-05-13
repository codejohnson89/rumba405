import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../components/layout';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Layout from '../components/layout';
import Head from 'next/head';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [setScrollTop, ScrollTop] = useState(0)

  return (
        <SSRProvider>
          <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"/>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SSRProvider>
  )
}

export default MyApp;
