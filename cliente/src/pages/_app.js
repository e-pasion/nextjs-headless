import FabButton from '@/components/FabButton'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useEffect } from 'react';
import Loading from '@/components/Loading';
import Modal from '@/components/Modal';
import { ApolloProvider } from '@apollo/client';
import client from '@/libs/apollo-client';
import loadAllLibraries from '@/libs/loader-libraries';




export default function App({ Component, pageProps }) {
  return<>
    <ApolloProvider client={client}>
    <Header/>
      <Loading/>
      <Component {...pageProps} />
      <FabButton/>
      <Footer/>
    </ApolloProvider>
  </> 
  
}
