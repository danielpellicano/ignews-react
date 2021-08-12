import { AppProps } from "next/app";
import '../styles/global.scss';
import {Fragment} from 'react'
import { Header } from '../components/Heeader'
import { Provider as NextAuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextAuthProvider session={pageProps.session}>
            <Header />
            <Component {...pageProps} />
        </NextAuthProvider>
    ) 
}

export default MyApp