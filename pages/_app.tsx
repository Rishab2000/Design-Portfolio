import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../components/header/header.css';
import '../styles/fluidtype.css';
import '../styles/font.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
