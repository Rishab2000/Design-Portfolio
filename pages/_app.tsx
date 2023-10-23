import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../components/header/header.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
