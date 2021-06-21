import { AppProps } from "next/app";
import '../styles/global.scss';
import {Fragment} from 'react'
import { Header } from '../components/Heeader'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <Header />
            <Component {...pageProps} />
        </Fragment>
    ) 
}

export default MyApp